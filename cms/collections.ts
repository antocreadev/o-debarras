import { APIError, type CollectionConfig, type CollectionBeforeChangeHook, type CollectionAfterChangeHook } from "payload";
import { LIMITS, SEUIL_BLOCAGE, lireUsage, messageBlocage, poidsBase, poidsMedias } from "@/lib/quota";

/* ------------------------------------------------------------------ */
/* Garde-fous des quotas gratuits                                      */
/* ------------------------------------------------------------------ */

/** Refuse l'envoi d'un fichier si l'espace médias gratuit serait dépassé. */
const bloquerSiMediasPlein: CollectionBeforeChangeHook = async ({ req, operation }) => {
  const file = req.file;
  if (!file) return;
  const { total } = await poidsMedias(req.payload);
  const entrant = file.size ?? 0;
  if (total + entrant > LIMITS.medias * SEUIL_BLOCAGE) {
    throw new APIError(messageBlocage("medias", total, LIMITS.medias), 413, undefined, true);
  }
  void operation;
};

/** Refuse la création de contenus si la base gratuite est presque pleine. */
const bloquerSiBasePleine: CollectionBeforeChangeHook = async ({ req, operation }) => {
  if (operation !== "create") return;
  const taille = await poidsBase(req.payload);
  if (taille > LIMITS.base * SEUIL_BLOCAGE) {
    throw new APIError(messageBlocage("base", taille, LIMITS.base), 413, undefined, true);
  }
};

/** Met à jour les pages publiques après chaque modification. */
const rafraichirSite: CollectionAfterChangeHook = async ({ doc }) => {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch {
    // hors contexte Next (script d'import) : rien à faire
  }
  return doc;
};

const auteurs = {
  read: () => true,
};

/* ------------------------------------------------------------------ */
/* Utilisateurs de l'administration                                    */
/* ------------------------------------------------------------------ */

export const Utilisateurs: CollectionConfig = {
  slug: "utilisateurs",
  labels: { singular: "Utilisateur", plural: "Utilisateurs" },
  auth: { tokenExpiration: 60 * 60 * 24 * 30 },
  admin: { useAsTitle: "email", group: "Réglages", description: "Les personnes qui peuvent se connecter à cette administration." },
  fields: [{ name: "nom", label: "Nom", type: "text" }],
};

/* ------------------------------------------------------------------ */
/* Médias : optimisation automatique                                   */
/* ------------------------------------------------------------------ */

export const Medias: CollectionConfig = {
  slug: "medias",
  labels: { singular: "Photo ou vidéo", plural: "Photos et vidéos" },
  access: auteurs,
  admin: {
    group: "Contenu",
    description:
      "Les photos sont réduites et converties automatiquement (format WebP, 1920 px maximum) pour économiser l'espace gratuit. Vidéos : MP4 de 25 Mo maximum, de préférence courtes.",
  },
  hooks: { beforeChange: [bloquerSiMediasPlein], afterChange: [rafraichirSite] },
  upload: {
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "video/mp4"],
    // l'original est remplacé par une version optimisée
    resizeOptions: { width: 1920, height: 1920, fit: "inside", withoutEnlargement: true },
    formatOptions: { format: "webp", options: { quality: 72, effort: 5 } },
    imageSizes: [{ name: "vignette", width: 640, formatOptions: { format: "webp", options: { quality: 65 } } }],
    adminThumbnail: "vignette",
    focalPoint: false,
    crop: false,
  },
  fields: [
    {
      name: "alt",
      label: "Description de la photo",
      type: "text",
      required: true,
      admin: { description: "Une phrase simple, par exemple « Salon vidé à Bastia ». Utile pour Google et l'accessibilité." },
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contenus                                                            */
/* ------------------------------------------------------------------ */

const communs = { access: auteurs, hooks: { beforeChange: [bloquerSiBasePleine], afterChange: [rafraichirSite] } };

export const Chantiers: CollectionConfig = {
  slug: "chantiers",
  labels: { singular: "Chantier", plural: "Chantiers" },
  ...communs,
  defaultSort: "ordre",
  admin: {
    group: "Contenu",
    useAsTitle: "titre",
    defaultColumns: ["titre", "lieu", "afficher", "ordre"],
    description: "Vos réalisations avant / après. Les chantiers cochés « Afficher sur le site » apparaissent sur la page d'accueil, dans l'ordre choisi.",
  },
  fields: [
    { type: "row", fields: [
      { name: "titre", label: "Titre", type: "text", required: true, admin: { placeholder: "Une maison et ses trois caves" } },
      { name: "lieu", label: "Lieu", type: "text", required: true, admin: { placeholder: "Meria, Cap Corse" } },
    ] },
    { name: "texte", label: "Ce qui a été fait", type: "textarea", admin: { rows: 3 } },
    {
      name: "chiffres",
      label: "Chiffres clés",
      type: "array",
      labels: { singular: "Chiffre", plural: "Chiffres" },
      admin: { description: "Par exemple « 8 fourgons », « 80 m³ », « 3 jours »." },
      fields: [{ name: "valeur", label: "Chiffre", type: "text", required: true }],
    },
    { type: "row", fields: [
      { name: "avant", label: "Photo avant", type: "upload", relationTo: "medias", required: true },
      { name: "apres", label: "Photo après", type: "upload", relationTo: "medias", required: true },
    ] },
    { name: "instagram", label: "Lien de la vidéo Instagram (facultatif)", type: "text" },
    { type: "row", fields: [
      { name: "afficher", label: "Afficher sur le site", type: "checkbox", defaultValue: true },
      { name: "ordre", label: "Ordre d'affichage", type: "number", defaultValue: 10, admin: { description: "Le plus petit en premier." } },
    ] },
  ],
};

export const Avis: CollectionConfig = {
  slug: "avis",
  labels: { singular: "Avis client", plural: "Avis clients" },
  ...communs,
  defaultSort: "ordre",
  admin: {
    group: "Contenu",
    useAsTitle: "auteur",
    defaultColumns: ["auteur", "note", "source", "afficher"],
    description: "Recopiez ici les avis reçus (Google, PagesJaunes, Facebook…). Ils s'affichent sur le site.",
  },
  fields: [
    { type: "row", fields: [
      { name: "auteur", label: "Nom du client", type: "text", required: true },
      { name: "note", label: "Note sur 5", type: "number", min: 1, max: 5, defaultValue: 5, required: true },
    ] },
    { name: "texte", label: "Avis", type: "textarea", required: true },
    { type: "row", fields: [
      { name: "quand", label: "Date (texte libre)", type: "text", admin: { placeholder: "il y a 3 mois" } },
      {
        name: "source",
        label: "Source",
        type: "select",
        defaultValue: "google",
        options: [
          { label: "Google", value: "google" },
          { label: "PagesJaunes", value: "pagesjaunes" },
          { label: "Facebook", value: "facebook" },
          { label: "Autre", value: "autre" },
        ],
      },
    ] },
    { type: "row", fields: [
      { name: "afficher", label: "Afficher sur le site", type: "checkbox", defaultValue: true },
      { name: "ordre", label: "Ordre", type: "number", defaultValue: 10 },
    ] },
  ],
};

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Service", plural: "Services" },
  ...communs,
  defaultSort: "ordre",
  admin: { group: "Contenu", useAsTitle: "titre", defaultColumns: ["titre", "ordre"] },
  fields: [
    { name: "titre", label: "Titre", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    {
      name: "points",
      label: "Points forts",
      type: "array",
      labels: { singular: "Point", plural: "Points" },
      fields: [{ name: "texte", label: "Texte", type: "text", required: true }],
    },
    { type: "row", fields: [
      { name: "avant", label: "Photo avant", type: "upload", relationTo: "medias" },
      { name: "apres", label: "Photo après", type: "upload", relationTo: "medias" },
    ] },
    { type: "row", fields: [
      { name: "lien", label: "Page détaillée", type: "text", admin: { placeholder: "/services/particuliers" } },
      { name: "ordre", label: "Ordre", type: "number", defaultValue: 10 },
    ] },
  ],
};

export const Zones: CollectionConfig = {
  slug: "zones",
  labels: { singular: "Zone d'intervention", plural: "Zones d'intervention" },
  ...communs,
  defaultSort: "nom",
  admin: {
    group: "Contenu",
    useAsTitle: "nom",
    defaultColumns: ["nom", "nomCorse"],
    description: "Les zones et leurs communes, affichées sur la carte de la Corse.",
  },
  fields: [
    { type: "row", fields: [
      { name: "nom", label: "Nom", type: "text", required: true },
      { name: "nomCorse", label: "Nom en corse", type: "text" },
      { name: "slug", label: "Identifiant (adresse)", type: "text", required: true, unique: true, admin: { description: "Ne pas modifier : sert à l'adresse de la page." } },
    ] },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "communes",
      label: "Communes",
      type: "array",
      labels: { singular: "Commune", plural: "Communes" },
      admin: { initCollapsed: true },
      fields: [
        { type: "row", fields: [
          { name: "nom", label: "Nom", type: "text", required: true },
          { name: "nomCorse", label: "Nom en corse", type: "text" },
          { name: "slug", label: "Identifiant", type: "text", required: true },
        ] },
        { type: "row", fields: [
          { name: "lat", label: "Latitude", type: "number", admin: { description: "Pour la carte (facultatif)." } },
          { name: "lon", label: "Longitude", type: "number" },
        ] },
      ],
    },
  ],
};

export { lireUsage };
