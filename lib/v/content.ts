/**
 * Contenu réel partagé par les versions /v1, /v2, /v3 de la page d'accueil.
 * Textes repris de l'ancien site ; chiffres repris des légendes Instagram @odebarras.
 */
import { googleReviews } from "@/data/reviews";
import { corsicaRegions } from "@/lib/corsica-data";

export const contact = {
  phone: "07 84 71 73 01",
  phoneHref: "tel:+33784717301",
  email: "odebarras2b@gmail.com",
  city: "Bastia",
  instagram: "https://www.instagram.com/odebarras/",
  facebook: "https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/",
  googleReviews: "https://share.google/9YV6aX2d34jUUCAcZ",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis", href: "#avis" },
  { label: "Zones", href: "#zones" },
  { label: "Contact", href: "#contact" },
];

export const proofs = [
  { value: "5/5", label: "23 avis Google" },
  { value: "24 h", label: "devis gratuit" },
  { value: "2B · 2A", label: "toute la Corse" },
  { value: "2020", label: "à votre service depuis" },
];

export const services = [
  {
    slug: "particuliers",
    title: "Particuliers",
    href: "/services/particuliers",
    text: "Débarras de maisons, appartements, caves, greniers. Nous prenons en charge tous vos encombrants avec professionnalisme.",
    items: ["Maisons & appartements", "Caves & greniers", "Garages", "Successions"],
    avant: "/v/particulier-avant.webp",
    apres: "/v/particulier-apres.webp",
  },
  {
    slug: "diogene",
    title: "Syndrome de Diogène",
    href: "/services/diogene",
    text: "Intervention spécialisée avec discrétion et respect pour les cas de syndrome de Diogène et de syllogomanie.",
    items: ["Accompagnement personnalisé", "Discrétion absolue", "Équipe formée", "Mandataires judiciaires"],
    avant: "/v/diogene-avant.webp",
    apres: "/v/diogene-apres.webp",
  },
  {
    slug: "professionnels",
    title: "Professionnels",
    href: "/services/professionnels",
    text: "Débarras de locaux commerciaux, bureaux, entrepôts. Solutions adaptées aux entreprises et aux collectivités.",
    items: ["Locaux commerciaux", "Bureaux", "Entrepôts", "Collectivités"],
    avant: "/v/pro-avant.webp",
    apres: "/v/pro-apres.webp",
  },
];

export const steps = [
  {
    title: "Contact & devis",
    text: "Contactez-nous par téléphone ou email. Nous établissons un devis gratuit et sans engagement sous 24 h.",
  },
  {
    title: "Validation & planification",
    text: "Vous validez le devis et nous planifions ensemble l'intervention selon vos disponibilités.",
  },
  {
    title: "Intervention & finalisation",
    text: "Notre équipe intervient rapidement, assure le tri, le recyclage, et laisse les lieux impeccables.",
  },
];

export type Chantier = {
  slug: string;
  lieu: string;
  zone: string;
  titre: string;
  texte: string;
  chiffres: string[];
  avant: string;
  apres: string;
  instagram: string;
};

const ig = (id: string) => `https://www.instagram.com/odebarras/reel/${id}/`;

export const chantiers: Chantier[] = [
  {
    slug: "ajaccio-napoleon",
    lieu: "Ajaccio, cours Napoléon",
    zone: "Pays ajaccien",
    titre: "80 ans d'accumulation",
    texte: "Deux appartements au 4ᵉ et au 5ᵉ étage. Tout a été trié et évacué, jusqu'au piano descendu par les escaliers.",
    chiffres: ["8 fourgons", "Piano de 280 kg"],
    avant: "/v/ajaccio-napoleon-avant.webp",
    apres: "/v/ajaccio-napoleon-apres.webp",
    instagram: ig("DfRbzEhqyJW"),
  },
  {
    slug: "borgo",
    lieu: "Borgo",
    zone: "Haute-Corse",
    titre: "Un très gros volume",
    texte: "Une rotation de camions et un tri énorme sur place, chaque matière orientée vers la bonne filière.",
    chiffres: ["19 camions", "Plus de 200 m³"],
    avant: "/v/borgo-avant.webp",
    apres: "/v/borgo-apres.webp",
    instagram: ig("DWraJJlChG8"),
  },
  {
    slug: "pietranera",
    lieu: "Pietranera",
    zone: "Pays bastiais",
    titre: "Une maison laissée à l'abandon",
    texte: "Des années de déchets et de débris accumulés. Tout a été trié, chargé et évacué.",
    chiffres: ["12 fourgons", "3 jours"],
    avant: "/v/pietranera-avant.webp",
    apres: "/v/pietranera-apres.webp",
    instagram: ig("DeEygVPIJXg"),
  },
  {
    slug: "meria",
    lieu: "Meria",
    zone: "Cap Corse",
    titre: "Une maison et ses trois caves",
    texte: "Plusieurs décennies d'objets, après l'achat de la maison par de nouveaux propriétaires.",
    chiffres: ["80 m³"],
    avant: "/v/meria-avant.webp",
    apres: "/v/meria-apres.webp",
    instagram: ig("DbpauTmKIvb"),
  },
  {
    slug: "palombaggia",
    lieu: "Palombaggia",
    zone: "Corse-du-Sud",
    titre: "Une maison face à la mer",
    texte: "Débarras complet d'une maison, dans un cadre exceptionnel.",
    chiffres: ["Porto-Vecchio"],
    avant: "/v/palombaggia-avant.webp",
    apres: "/v/palombaggia-apres.webp",
    instagram: ig("DbVik6rqAgx"),
  },
  {
    slug: "bastia",
    lieu: "Bastia, place Saint-Nicolas",
    zone: "Pays bastiais",
    titre: "200 m² au dernier étage",
    texte: "Une partie du mobilier livrée en Italie à la demande du client, le reste entièrement vidé.",
    chiffres: ["200 m²", "Centre-ville"],
    avant: "/v/bastia-saint-nicolas-avant.webp",
    apres: "/v/bastia-saint-nicolas-apres.webp",
    instagram: ig("DZLAcLSqJkW"),
  },
];

export const audiences = [
  { title: "Particuliers", text: "Propriétaires, locataires, héritiers" },
  { title: "Agences immobilières", text: "Remise en état de biens", href: "/secteurs/agences-immobilieres" },
  { title: "Successions & notaires", text: "Débarras après décès", href: "/secteurs/successions-notaires" },
  { title: "Mandataires judiciaires", text: "Accompagnement juridique", href: "/secteurs/mandataires-judiciaires" },
  { title: "Entreprises", text: "Locaux commerciaux et bureaux", href: "/services/professionnels" },
  { title: "Collectivités", text: "Administrations et services publics", href: "/secteurs/collectivites-administrations" },
];

export const engagement = {
  quote: "Nous ne sommes pas une association. Nous sommes une entreprise. Une entreprise engagée.",
  points: [
    { title: "Donner", text: "Les meubles, objets et vêtements en bon état sont remis à des associations." },
    { title: "Recycler", text: "Chaque matière est orientée vers la bonne filière, jusqu'à la recyclerie spécialisée." },
    { title: "Évacuer", text: "Le reste part en déchetterie agréée. Les lieux sont rendus propres." },
  ],
};

export const reviews = googleReviews.filter((r) => r.description.length > 40).slice(0, 6);
export const reviewCount = googleReviews.length;

export const regions = corsicaRegions.map((r) => ({ slug: r.slug, name: r.name, corse: r.corseName, count: r.cities.length }));

export const towns = [
  { name: "Rogliano", lon: 9.418, lat: 42.957 },
  { name: "Bastia", lon: 9.4509, lat: 42.6973 },
  { name: "Saint-Florent", lon: 9.303, lat: 42.681 },
  { name: "Calvi", lon: 8.757, lat: 42.567 },
  { name: "Borgo", lon: 9.426, lat: 42.554 },
  { name: "Corte", lon: 9.149, lat: 42.306 },
  { name: "Porto", lon: 8.7, lat: 42.267 },
  { name: "Moriani", lon: 9.53, lat: 42.38 },
  { name: "Aléria", lon: 9.512, lat: 42.11 },
  { name: "Ajaccio", lon: 8.739, lat: 41.919 },
  { name: "Favone", lon: 9.4, lat: 41.76 },
  { name: "Propriano", lon: 8.903, lat: 41.676 },
  { name: "Porto-Vecchio", lon: 9.279, lat: 41.591 },
  { name: "Bonifacio", lon: 9.159, lat: 41.387 },
];

/** Lieux de chantiers géolocalisés dans les publications Instagram */
export const interventions = [
  { name: "Ajaccio", lon: 8.7345, lat: 41.9172 },
  { name: "L'Île-Rousse", lon: 8.9384, lat: 42.6343 },
  { name: "Pietranera", lon: 9.4562, lat: 42.7234 },
  { name: "Cagnano", lon: 9.4297, lat: 42.8753 },
  { name: "Cargèse", lon: 8.5969, lat: 42.1348 },
  { name: "Toga", lon: 9.4541, lat: 42.7085 },
  { name: "Cala Rossa", lon: 9.3467, lat: 41.6228 },
  { name: "Meria", lon: 9.4528, lat: 42.9262 },
  { name: "Palombaggia", lon: 9.3283, lat: 41.5583 },
  { name: "Cardo", lon: 9.4292, lat: 42.7033 },
  { name: "Monacia-d'Aullène", lon: 9.0138, lat: 41.5126 },
  { name: "Campile", lon: 9.3526, lat: 42.493 },
  { name: "Ersa", lon: 9.3822, lat: 42.9733 },
  { name: "Borgo", lon: 9.426, lat: 42.554 },
  { name: "Calenzana", lon: 8.8511, lat: 42.5103 },
  { name: "Moriani", lon: 9.5339, lat: 42.3898 },
];

export const instagramPosts = [
  { id: "DfRbzEhqyJW", label: "Ajaccio, 80 ans d'accumulation" },
  { id: "DbpauTmKIvb", label: "Meria, Cap Corse" },
  { id: "DWraJJlChG8", label: "Borgo, 19 camions" },
  { id: "DeEygVPIJXg", label: "Pietranera, 12 fourgons" },
  { id: "DbVik6rqAgx", label: "Palombaggia" },
  { id: "DZLAcLSqJkW", label: "Bastia, place Saint-Nicolas" },
  { id: "Dd4d3_QqNjK", label: "Adamu, Cap Corse" },
  { id: "DMFFVsPI3jG", label: "Murato" },
].map((p) => ({ ...p, image: `/v/ig-${p.id}.webp`, href: `https://www.instagram.com/odebarras/reel/${p.id}/` }));
