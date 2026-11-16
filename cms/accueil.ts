import type { Field, GlobalConfig } from "payload";

/** Encadré d'aide : capture de la section concernée + lien pour la voir sur le site */
export const aide = (image: string, texte: string, lien = "/"): Field => ({
  name: `aide_${image.replace(/\W/g, "_")}`,
  type: "ui",
  admin: {
    components: {
      Field: { path: "/components/admin/ou-ca-apparait#OuCaApparait", clientProps: { image, texte, lien } },
    },
  },
});

const rafraichir = async ({ doc }: { doc: unknown }) => {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch {}
  return doc;
};

export const Accueil: GlobalConfig = {
  slug: "accueil",
  label: "Page d'accueil",
  access: { read: () => true },
  admin: {
    group: "Site internet",
    description: "Tous les textes de la page d'accueil, dans l'ordre où ils apparaissent. Modifiez, puis cliquez sur « Enregistrer » : le site est mis à jour en moins d'une minute.",
    preview: () => "/",
  },
  hooks: { afterChange: [rafraichir] },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "1. Haut de page",
          description: "Le premier écran que voit le visiteur.",
          fields: [
            aide("/admin/aide/hero.webp", "C'est le grand titre en haut de la page d'accueil, avec la photo et les deux boutons."),
            { name: "heroTitre", label: "Grand titre", type: "text", required: true, defaultValue: "Ò Débarras" },
            {
              name: "heroTexte",
              label: "Phrase sous le titre",
              type: "textarea",
              required: true,
              defaultValue: "Intervention rapide, discrète et respectueuse dans toute la Corse.",
            },
            { name: "heroPhoto", label: "Photo à droite", type: "upload", relationTo: "medias", admin: { description: "Laissez vide pour garder la photo actuelle (l'équipe en combinaison sur le toit)." } },
            { type: "row", fields: [
              { name: "boutonDevis", label: "Texte du bouton principal", type: "text", defaultValue: "Devis Gratuit" },
              { name: "boutonContact", label: "Texte du second bouton", type: "text", defaultValue: "Nous Contacter" },
            ] },
          ],
        },
        {
          label: "2. Comment ça marche",
          fields: [
            aide("/admin/aide/etapes.webp", "Les 3 étapes, juste sous le haut de page.", "/#process"),
            { name: "etapesTitre", label: "Titre", type: "text", defaultValue: "Comment ça marche ?" },
            { name: "etapesTexte", label: "Phrase sous le titre", type: "textarea", defaultValue: "Un processus simple et transparent en 3 étapes pour votre tranquillité d'esprit" },
            {
              name: "etapes",
              label: "Les étapes",
              type: "array",
              minRows: 3,
              maxRows: 3,
              labels: { singular: "Étape", plural: "Étapes" },
              fields: [
                { name: "titre", label: "Titre de l'étape", type: "text", required: true },
                { name: "texte", label: "Explication", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "3. Nos services",
          fields: [
            aide("/admin/aide/services.webp", "Les 3 cartes de services avec leurs photos avant / après. Le contenu de chaque carte se modifie dans « Services ».", "/#services"),
            { name: "servicesTitre", label: "Titre", type: "text", defaultValue: "Des solutions pour tous" },
            { name: "servicesTexte", label: "Phrase sous le titre", type: "textarea", defaultValue: "Que vous soyez particulier ou professionnel, nous avons la solution adaptée à votre besoin" },
          ],
        },
        {
          label: "4. Réalisations",
          fields: [
            aide("/admin/aide/realisations.webp", "L'encadré « Notre expertise en action ». Vos chantiers avant / après se gèrent dans « Réalisations ».", "/realisations"),
            { name: "realisationsTitre", label: "Titre", type: "text", defaultValue: "Notre expertise en action" },
            { name: "realisationsTexte", label: "Phrase sous le titre", type: "textarea", defaultValue: "Découvrez nos interventions de débarras en Corse. Avant/après, chaque projet raconte une histoire." },
            { name: "realisationsEncadreTitre", label: "Titre de l'encadré", type: "text", defaultValue: "Des projets réussis" },
            { name: "realisationsEncadre", label: "Texte de l'encadré", type: "textarea", defaultValue: "Particuliers, professionnels, syndrome de Diogène... Nous avons l'expérience pour gérer tous types de débarras avec professionnalisme et discrétion." },
          ],
        },
        {
          label: "5. Pour qui",
          fields: [
            aide("/admin/aide/publics.webp", "La rangée « À qui s'adressent nos services ? »."),
            { name: "publicsTitre", label: "Titre", type: "text", defaultValue: "À qui s'adressent nos services ?" },
            { name: "publicsTexte", label: "Phrase sous le titre", type: "textarea", defaultValue: "Nous mettons notre expertise en débarras au service de divers secteurs, allant des particuliers aux entreprises, des collectivités aux administrations, pour offrir des solutions complètes et adaptées à chaque besoin en Corse." },
            {
              name: "publics",
              label: "Les publics",
              type: "array",
              labels: { singular: "Public", plural: "Publics" },
              fields: [
                { type: "row", fields: [
                  { name: "titre", label: "Nom", type: "text", required: true },
                  { name: "texte", label: "Précision", type: "text" },
                ] },
              ],
            },
          ],
        },
        {
          label: "6. Avis",
          fields: [
            aide("/admin/aide/avis.webp", "Le carrousel des avis Google. Les avis eux-mêmes se gèrent dans « Avis clients ».", "/#avis"),
            { name: "avisTitre", label: "Titre", type: "text", defaultValue: "Avis Google" },
            { name: "avisTexte", label: "Phrase sous le titre", type: "text", defaultValue: "Découvrez les retours de nos clients sur Google" },
          ],
        },
        {
          label: "7. Zones",
          fields: [
            aide("/admin/aide/zones.webp", "La carte de la Corse et la liste des zones. Les zones et communes se gèrent dans « Zones et communes ».", "/zones"),
            { name: "zonesTitre", label: "Titre", type: "text", defaultValue: "Intervention dans toute la Corse" },
            { name: "zonesTexte", label: "Phrase sous le titre", type: "textarea", defaultValue: "De Bastia à Bonifacio, de Calvi à Porto-Vecchio, nous intervenons sur l'ensemble du territoire corse pour tous vos besoins de débarras." },
          ],
        },
        {
          label: "8. Bas de page",
          fields: [
            aide("/admin/aide/cta.webp", "Le bandeau vert « Besoin d'un débarras ? » en bas de toutes les pages."),
            { name: "ctaTitre", label: "Titre", type: "text", defaultValue: "Besoin d'un débarras ?" },
            { name: "ctaTexte", label: "Texte", type: "textarea", defaultValue: "Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Intervention rapide dans toute la Corse." },
            { name: "piedTexte", label: "Présentation dans le pied de page", type: "textarea", defaultValue: "Votre partenaire de confiance pour tous vos besoins de débarras en Corse depuis 2020." },
          ],
        },
      ],
    },
  ],
};
