/**
 * Quotas des offres gratuites utilisées par le site.
 * - Vercel Blob (Hobby) : 1 Go de stockage, 10 Go de transfert / mois
 * - Neon (Free) : 1 Go par projet — on garde une marge et on vise 512 Mo pour la base
 * Au-delà du seuil de blocage, l'ajout de fichiers ou de contenus est refusé.
 */
import { sql } from "@payloadcms/db-postgres";
import type { Payload } from "payload";

export const LIMITS = {
  medias: 1_000_000_000, // 1 Go
  base: 500_000_000, // 500 Mo (marge sous le 1 Go de Neon)
  transfertMensuel: 10_000_000_000, // 10 Go, non mesurable en direct
};

/** Au-delà de ce pourcentage, on bloque. */
export const SEUIL_BLOCAGE = 0.95;
/** Au-delà de ce pourcentage, on prévient. */
export const SEUIL_ALERTE = 0.8;

export const DEVELOPPEUR = {
  nom: "Anthony Menghi",
  telephone: "07 83 26 75 95",
};

export type Usage = {
  medias: { utilise: number; limite: number; fichiers: number };
  base: { utilise: number; limite: number };
  majLe: string;
};

/** Poids total des fichiers envoyés (original optimisé + vignettes). Ne consomme aucune opération Blob. */
export async function poidsMedias(payload: Payload) {
  const res = await payload.find({
    collection: "medias",
    limit: 0,
    pagination: false,
    depth: 0,
    select: { filesize: true, sizes: true },
    overrideAccess: true,
  });
  let total = 0;
  for (const doc of res.docs as Array<{ filesize?: number | null; sizes?: Record<string, { filesize?: number | null }> }>) {
    total += doc.filesize ?? 0;
    for (const s of Object.values(doc.sizes ?? {})) total += s?.filesize ?? 0;
  }
  return { total, fichiers: res.docs.length };
}

export async function poidsBase(payload: Payload) {
  try {
    const r = await (payload.db as unknown as { drizzle: { execute: (q: unknown) => Promise<{ rows?: unknown[] } & unknown[]> } }).drizzle.execute(sql`select pg_database_size(current_database()) as taille`);
    const row = (r.rows ?? r)[0] as { taille: string | number };
    return Number(row.taille);
  } catch {
    return 0;
  }
}

export async function lireUsage(payload: Payload): Promise<Usage> {
  const [m, b] = await Promise.all([poidsMedias(payload), poidsBase(payload)]);
  return {
    medias: { utilise: m.total, limite: LIMITS.medias, fichiers: m.fichiers },
    base: { utilise: b, limite: LIMITS.base },
    majLe: new Date().toISOString(),
  };
}

export function formatOctets(n: number) {
  if (n < 1e3) return `${n} o`;
  if (n < 1e6) return `${(n / 1e3).toFixed(0)} Ko`;
  if (n < 1e9) return `${(n / 1e6).toFixed(1)} Mo`;
  return `${(n / 1e9).toFixed(2)} Go`;
}

export function messageBlocage(quoi: "medias" | "base", utilise: number, limite: number) {
  const libelle = quoi === "medias" ? "l'espace photos et vidéos" : "la base de données";
  return (
    `Limite gratuite atteinte : ${libelle} est plein (${formatOctets(utilise)} sur ${formatOctets(limite)}). ` +
    `Pour continuer, supprimez des éléments inutiles (anciens chantiers, photos en double, vidéos), ` +
    `ou envoyez des fichiers plus légers. Pour augmenter la capacité, contactez le développeur, ` +
    `${DEVELOPPEUR.nom}, au ${DEVELOPPEUR.telephone}.`
  );
}
