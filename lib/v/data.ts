/**
 * Données des pages d'accueil, lues dans la base (Payload) avec repli sur le contenu statique
 * si la base est indisponible ou vide.
 */
import { cache } from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import { googleReviews } from "@/data/reviews";
import { corsicaRegions } from "@/lib/corsica-data";
import { communes as communesStatiques } from "@/lib/v/communes";
import * as statique from "@/lib/v/content";

export type ServiceData = { slug: string; title: string; href: string; text: string; items: string[]; avant: string; apres: string };
export type ChantierData = { slug: string; lieu: string; titre: string; texte: string; chiffres: string[]; avant: string; apres: string; instagram?: string };
export type AvisData = { name: string; description: string; date: string; rating: number };
export type ZoneData = { slug: string; name: string; corse: string; cities: { slug: string; name: string; lat?: number | null; lon?: number | null }[] };
export type AccueilData = {
  heroTitre: string; heroTexte: string; heroPhoto?: string; boutonDevis: string; boutonContact: string;
  etapesTitre: string; etapesTexte: string; etapes: { titre: string; texte: string }[];
  servicesTitre: string; servicesTexte: string;
  realisationsTitre: string; realisationsTexte: string; realisationsEncadreTitre: string; realisationsEncadre: string;
  publicsTitre: string; publicsTexte: string; publics: { titre: string; texte?: string | null }[];
  avisTitre: string; avisTexte: string; zonesTitre: string; zonesTexte: string;
  ctaTitre: string; ctaTexte: string; piedTexte: string;
};
export type SiteData = {
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  instagram: string;
  facebook: string;
  googleReviews: string;
  proofs: { value: string; label: string }[];
  services: ServiceData[];
  chantiers: ChantierData[];
  avis: AvisData[];
  avisTotal: number;
  zones: ZoneData[];
  /** toutes les réalisations visibles (page Réalisations) */
  realisations: ChantierData[];
  accueil: Partial<AccueilData>;
};

type Media = { url?: string | null; sizes?: { vignette?: { url?: string | null } } } | number | string | null | undefined;
const url = (m: Media, fallback = "") => (m && typeof m === "object" ? m.url ?? fallback : fallback);

function telHref(phone: string) {
  const d = phone.replace(/\D/g, "");
  return d.startsWith("0") ? `tel:+33${d.slice(1)}` : `tel:+${d}`;
}

function donneesStatiques(): SiteData {
  return {
    ...statique.contact,
    proofs: statique.proofs,
    services: statique.services,
    chantiers: statique.chantiers,
    avis: statique.reviews.map((r) => ({ name: r.name, description: r.description, date: r.date, rating: r.rating })),
    avisTotal: googleReviews.length,
    realisations: statique.chantiers,
    accueil: {},
    zones: corsicaRegions.map((r) => ({
      slug: r.slug,
      name: r.name,
      corse: r.corseName,
      cities: Array.from(new Map(r.cities.map((c) => [c.slug, c])).values()).map((c) => {
        const g = communesStatiques.find((x) => x.slug === c.slug && x.region === r.slug);
        return { slug: c.slug, name: c.name, lat: g?.lat, lon: g?.lon };
      }),
    })),
  };
}

export const getSiteData = cache(async (): Promise<SiteData> => {
  const repli = donneesStatiques();
  if (!process.env.DATABASE_URL) return repli;
  try {
    const payload = await getPayload({ config });
    const [infos, services, chantiers, avis, zones, accueilDoc, realisations] = await Promise.all([
      payload.findGlobal({ slug: "infos", depth: 0 }),
      payload.find({ collection: "services", sort: "ordre", limit: 12, depth: 1 }),
      payload.find({ collection: "chantiers", where: { and: [{ afficher: { equals: true } }, { accueil: { equals: true } }] }, sort: "ordre", limit: 12, depth: 1 }),
      payload.find({ collection: "avis", where: { afficher: { equals: true } }, sort: "ordre", limit: 100, depth: 0 }),
      payload.find({ collection: "zones", sort: "nom", limit: 50, depth: 0 }),
      payload.findGlobal({ slug: "accueil", depth: 1 }),
      payload.find({ collection: "chantiers", where: { afficher: { equals: true } }, sort: "ordre", limit: 200, depth: 1 }),
    ]);
    const versChantier = (c: (typeof realisations.docs)[number]): ChantierData => ({
      slug: String(c.id),
      lieu: c.lieu,
      titre: c.titre,
      texte: c.texte ?? "",
      chiffres: (c.chiffres ?? []).map((x) => x.valeur),
      avant: url(c.avant as Media),
      apres: url(c.apres as Media),
      instagram: c.instagram ?? undefined,
    });
    const a = accueilDoc as unknown as Record<string, unknown> & { heroPhoto?: Media; etapes?: { titre: string; texte: string }[]; publics?: { titre: string; texte?: string | null }[] };
    const accueil: Partial<AccueilData> = Object.fromEntries(
      Object.entries({ ...a, heroPhoto: url(a.heroPhoto) || undefined }).filter(([k, v]) => v !== null && v !== undefined && v !== "" && !["id", "updatedAt", "createdAt", "globalType"].includes(k)),
    ) as Partial<AccueilData>;
    const phone = (infos as { telephone?: string }).telephone || repli.phone;
    const i = infos as unknown as Record<string, unknown> & { chiffres?: { valeur: string; libelle: string }[] };
    return {
      phone,
      phoneHref: telHref(phone),
      email: (i.email as string) || repli.email,
      city: (i.ville as string) || repli.city,
      instagram: (i.instagram as string) || repli.instagram,
      facebook: (i.facebook as string) || repli.facebook,
      googleReviews: (i.avisGoogle as string) || repli.googleReviews,
      proofs: i.chiffres?.length ? i.chiffres.map((c) => ({ value: c.valeur, label: c.libelle })) : repli.proofs,
      services: services.docs.length
        ? services.docs.map((s) => ({
            slug: String(s.id),
            title: s.titre,
            href: s.lien || "/services",
            text: s.description,
            items: (s.points ?? []).map((p) => p.texte),
            avant: url(s.avant as Media),
            apres: url(s.apres as Media),
          }))
        : repli.services,
      chantiers: chantiers.docs.length ? chantiers.docs.map(versChantier) : repli.chantiers,
      realisations: realisations.docs.length ? realisations.docs.map(versChantier) : repli.realisations,
      accueil,
      avis: avis.docs.length
        ? avis.docs.map((a) => ({ name: a.auteur, description: a.texte, date: a.quand ?? "", rating: a.note }))
        : repli.avis,
      avisTotal: avis.totalDocs || repli.avisTotal,
      zones: zones.docs.length
        ? zones.docs.map((z) => ({
            slug: z.slug,
            name: z.nom,
            corse: z.nomCorse ?? "",
            cities: (z.communes ?? []).map((c) => ({ slug: c.slug, name: c.nom, lat: c.lat, lon: c.lon })),
          }))
        : repli.zones,
    };
  } catch (e) {
    console.error("[odebarras] lecture de la base impossible, contenu statique utilisé", e);
    return repli;
  }
});
