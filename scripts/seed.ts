/**
 * Importe le contenu actuel du site dans la base (une seule fois).
 * Lancer : pnpm seed  (ou node node_modules/payload/bin.js run scripts/seed.ts --use-swc)
 */
import path from "path";
import { getPayload } from "payload";
import config from "../payload.config";
import { googleReviews } from "../data/reviews";
import { corsicaRegions } from "../lib/corsica-data";
import { communes } from "../lib/v/communes";
import { chantiers, services } from "../lib/v/content";

const payload = await getPayload({ config });
const pub = (p: string) => path.resolve(process.cwd(), "public", p.replace(/^\//, ""));

async function vider(collection: "chantiers" | "avis" | "services" | "zones" | "medias") {
  await payload.delete({ collection, where: { id: { exists: true } }, overrideAccess: true });
}

const cacheMedias = new Map<string, number>();
async function media(src: string, alt: string) {
  if (cacheMedias.has(src)) return cacheMedias.get(src)!;
  const doc = await payload.create({ collection: "medias", data: { alt }, filePath: pub(src), overrideAccess: true });
  cacheMedias.set(src, doc.id as number);
  return doc.id;
}

const deja = await payload.count({ collection: "chantiers" });
if (deja.totalDocs > 0 && !process.argv.includes("--force")) {
  payload.logger.info("Contenu déjà importé. Relancer avec --force pour tout remplacer.");
  process.exit(0);
}

for (const c of ["chantiers", "services", "avis", "zones", "medias"] as const) await vider(c);

/* Informations générales */
await payload.updateGlobal({
  slug: "infos",
  data: {
    telephone: "07 84 71 73 01",
    email: "odebarras2b@gmail.com",
    ville: "Bastia",
    accroche: "Intervention rapide, discrète et respectueuse dans toute la Corse.",
    chiffres: [
      { valeur: "5/5", libelle: "23 avis Google" },
      { valeur: "24 h", libelle: "devis gratuit" },
      { valeur: "2B · 2A", libelle: "toute la Corse" },
      { valeur: "2020", libelle: "à votre service depuis" },
    ],
    instagram: "https://www.instagram.com/odebarras/",
    facebook: "https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/",
    avisGoogle: "https://share.google/9YV6aX2d34jUUCAcZ",
  },
  overrideAccess: true,
});

/* Zones et communes */
for (const r of corsicaRegions) {
  const vues = new Set<string>();
  await payload.create({
    collection: "zones",
    overrideAccess: true,
    data: {
      nom: r.name,
      nomCorse: r.corseName,
      slug: r.slug,
      description: r.description,
      communes: r.cities
        .filter((c) => (vues.has(c.slug) ? false : (vues.add(c.slug), true)))
        .map((c) => {
          const geo = communes.find((x) => x.slug === c.slug && x.region === r.slug);
          return { nom: c.name, nomCorse: c.corseName, slug: c.slug, lat: geo?.lat, lon: geo?.lon };
        }),
    },
  });
}
payload.logger.info(`Zones : ${corsicaRegions.length}`);

/* Avis */
let i = 0;
for (const a of googleReviews) {
  await payload.create({
    collection: "avis",
    overrideAccess: true,
    data: { auteur: a.name, note: a.rating, texte: a.description, quand: a.date, source: "google", afficher: true, ordre: i++ },
  });
}
payload.logger.info(`Avis : ${googleReviews.length}`);

/* Services */
i = 0;
for (const s of services) {
  await payload.create({
    collection: "services",
    overrideAccess: true,
    data: {
      titre: s.title,
      description: s.text,
      points: s.items.map((texte) => ({ texte })),
      avant: await media(s.avant, `${s.title} : avant débarras`),
      apres: await media(s.apres, `${s.title} : après débarras`),
      lien: s.href,
      ordre: i++,
    },
  });
}
payload.logger.info(`Services : ${services.length}`);

/* Chantiers */
const tous = [
  ...chantiers,
  {
    slug: "adamu",
    lieu: "Adamu, Cap Corse",
    titre: "Trois étages et une cave",
    texte: "Une maison de village sur trois niveaux, loin des déchetteries.",
    chiffres: ["80 m³"],
    avant: "/v/adamu-avant.webp",
    apres: "/v/adamu-apres.webp",
    instagram: "https://www.instagram.com/odebarras/reel/Dd4d3_QqNjK/",
  },
  {
    slug: "ajaccio-leclerc",
    lieu: "Ajaccio, cours du Général-Leclerc",
    titre: "Un 3ᵉ étage, à 2 h 30 de route",
    texte: "Plus de 90 m³ d'objets, de meubles et d'encombrants. Plusieurs objets récupérés pour une seconde vie.",
    chiffres: ["90 m³ et plus"],
    avant: "/v/ajaccio-leclerc-avant.webp",
    apres: "/v/ajaccio-leclerc-apres.webp",
    instagram: "https://www.instagram.com/odebarras/reel/DcQWDlzKyeM/",
  },
  {
    slug: "gianuccio",
    lieu: "Gianuccio, Monacia-d'Aullène",
    titre: "Un client qui nous rappelle",
    texte: "Deuxième intervention dans ce village isolé du Sud, à 3 h 30 de route.",
    chiffres: ["3 h 30 de route"],
    avant: "/v/gianuccio-avant.webp",
    apres: "/v/gianuccio-apres.webp",
    instagram: "https://www.instagram.com/odebarras/reel/Dar-OOYsEGi/",
  },
];
i = 0;
for (const c of tous) {
  await payload.create({
    collection: "chantiers",
    overrideAccess: true,
    data: {
      titre: c.titre,
      lieu: c.lieu,
      texte: c.texte,
      chiffres: c.chiffres.map((valeur) => ({ valeur })),
      avant: await media(c.avant, `${c.lieu} : avant débarras`),
      apres: await media(c.apres, `${c.lieu} : après débarras`),
      instagram: c.instagram,
      afficher: i < 6,
      ordre: i++,
    },
  });
}
payload.logger.info(`Chantiers : ${tous.length} · médias : ${cacheMedias.size}`);
process.exit(0);
