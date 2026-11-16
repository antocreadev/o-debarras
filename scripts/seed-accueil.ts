/**
 * Importe dans l'administration le contenu de l'ancien site encore absent :
 * textes de la page d'accueil et réalisations de la page « Réalisations ».
 * Lancer : node node_modules/payload/bin.js run scripts/seed-accueil.ts --use-swc
 */
import path from "path";
import sharpLib from "sharp";
import { getPayload } from "payload";
import config from "../payload.config";

const payload = await getPayload({ config });

/* Textes de la page d'accueil (repris tels quels de l'ancien site) */
await payload.updateGlobal({
  slug: "accueil",
  overrideAccess: true,
  data: {
    heroTitre: "Ò Débarras",
    heroTexte: "Intervention rapide, discrète et respectueuse dans toute la Corse.",
    boutonDevis: "Devis Gratuit",
    boutonContact: "Nous Contacter",
    etapesTitre: "Comment ça marche ?",
    etapesTexte: "Un processus simple et transparent en 3 étapes pour votre tranquillité d'esprit",
    etapes: [
      { titre: "Contact & Devis", texte: "Contactez-nous par téléphone ou email. Nous établissons un devis gratuit et sans engagement sous 24h" },
      { titre: "Validation & Planification", texte: "Vous validez le devis et nous planifions ensemble l'intervention selon vos disponibilités" },
      { titre: "Intervention & Finalisation", texte: "Notre équipe intervient rapidement, assure le tri, le recyclage et laisse les lieux impeccables" },
    ],
    servicesTitre: "Des solutions pour tous",
    servicesTexte: "Que vous soyez particulier ou professionnel, nous avons la solution adaptée à votre besoin",
    realisationsTitre: "Notre expertise en action",
    realisationsTexte: "Découvrez nos interventions de débarras en Corse. Avant/après, chaque projet raconte une histoire.",
    realisationsEncadreTitre: "Des projets réussis",
    realisationsEncadre:
      "Particuliers, professionnels, syndrome de Diogène... Nous avons l'expérience pour gérer tous types de débarras avec professionnalisme et discrétion.",
    publicsTitre: "À qui s'adressent nos services ?",
    publicsTexte:
      "Nous mettons notre expertise en débarras au service de divers secteurs, allant des particuliers aux entreprises, des collectivités aux administrations, pour offrir des solutions complètes et adaptées à chaque besoin en Corse.",
    publics: [
      { titre: "Particuliers", texte: "Propriétaires, locataires, héritiers" },
      { titre: "Agences immobilières", texte: "Remise en état de biens" },
      { titre: "Entreprises", texte: "Locaux commerciaux et bureaux" },
      { titre: "Mandataires judiciaires", texte: "Accompagnement juridique" },
      { titre: "Collectivités", texte: "Administrations et services publics" },
    ],
    avisTitre: "Avis Google",
    avisTexte: "Découvrez les retours de nos clients sur Google",
    zonesTitre: "Intervention dans toute la Corse",
    zonesTexte:
      "De Bastia à Bonifacio, de Calvi à Porto-Vecchio, nous intervenons sur l'ensemble du territoire corse pour tous vos besoins de débarras.",
    ctaTitre: "Besoin d'un débarras ?",
    ctaTexte: "Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Intervention rapide dans toute la Corse.",
    piedTexte: "Votre partenaire de confiance pour tous vos besoins de débarras en Corse depuis 2020.",
  },
});
payload.logger.info("Page d'accueil : textes importés");

/* Les chantiers déjà présents (issus d'Instagram) sont mis en avant sur l'accueil */
const existants = await payload.find({ collection: "chantiers", limit: 100, overrideAccess: true, sort: "ordre" });
for (const [i, c] of existants.docs.entries()) {
  await payload.update({ collection: "chantiers", id: c.id, overrideAccess: true, data: { accueil: i < 6, afficher: true, ordre: 20 + i } });
}

/* Réalisations de l'ancienne page « Réalisations » */
const anciennes = [
  { titre: "Cave encombrée", texte: "Transformation complète d'une cave encombrée", avant: "cave-1-1.png", apres: "cave-1.png" },
  { titre: "Situation Diogène", texte: "Intervention spécialisée avec accompagnement", avant: "diogene-1-1.png", apres: "diogene-1.png" },
  { titre: "Débarras particulier", texte: "Nettoyage complet d'un logement", avant: "particulier-1.png", apres: "particulier-1-1.png" },
  { titre: "Local professionnel", texte: "Débarras de local commercial", avant: "pro-1-1.png", apres: "pro-1.png" },
  { titre: "Grenier encombré", texte: "Vidage et nettoyage de grenier", avant: "grenier-1.png", apres: "grenier-1-1.png" },
  { titre: "Débarras de garage complet", texte: "Transformation complète d'un garage encombré en espace propre et fonctionnel", avant: "images/before-1.png", apres: "images/after-1.png" },
  { titre: "Nettoyage après sinistre", texte: "Remise en état d'un local après dégâts des eaux", avant: "images/before-2.png", apres: "images/after-2.png" },
  { titre: "Débarras d'appartement", texte: "Vidage complet et nettoyage d'un appartement", avant: "images/before-3.png", apres: "images/after-3.png" },
  { titre: "Syndrome de Diogène", texte: "Intervention discrète et respectueuse pour syndrome de Diogène", avant: "dio-avant.jpg", apres: "dio-apres.jpg" },
  { titre: "Local associatif", texte: "Débarras et réorganisation d'un local associatif", avant: "asso-avant.jpg", apres: "asso-apres.jpg" },
];

async function envoyer(fichier: string, alt: string) {
  const src = path.resolve(process.cwd(), "public", fichier);
  // les photos d'origine (4032 px, plusieurs Mo) sont réduites avant envoi pour respecter la limite d'envoi
  const data = await sharpLib(src).rotate().resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 85 }).toBuffer();
  const name = path.basename(fichier).replace(/\.\w+$/, ".jpg").replace(/^/, "ancien-");
  const doc = await payload.create({
    collection: "medias",
    overrideAccess: true,
    data: { alt },
    file: { data, mimetype: "image/jpeg", name, size: data.length },
  });
  return doc.id as number;
}

const deja = await payload.find({ collection: "chantiers", where: { titre: { equals: anciennes[0].titre } }, limit: 1, overrideAccess: true });
if (deja.docs.length) {
  payload.logger.info("Réalisations de l'ancien site déjà importées");
} else {
  for (const [i, r] of anciennes.entries()) {
    await payload.create({
      collection: "chantiers",
      overrideAccess: true,
      data: {
        titre: r.titre,
        lieu: "Corse",
        texte: r.texte,
        avant: await envoyer(r.avant, `${r.titre} : avant débarras`),
        apres: await envoyer(r.apres, `${r.titre} : après débarras`),
        afficher: true,
        accueil: false,
        ordre: i + 1,
      },
    });
  }
  payload.logger.info(`Réalisations de l'ancien site : ${anciennes.length}`);
}
process.exit(0);
