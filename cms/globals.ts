import type { GlobalConfig } from "payload";

export const Infos: GlobalConfig = {
  slug: "infos",
  label: "Informations de l'entreprise",
  access: { read: () => true },
  admin: { group: "Réglages", description: "Coordonnées et textes affichés sur tout le site." },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        try {
          const { revalidatePath } = await import("next/cache");
          revalidatePath("/", "layout");
        } catch {}
        return doc;
      },
    ],
  },
  fields: [
    { type: "row", fields: [
      { name: "telephone", label: "Téléphone", type: "text", required: true, defaultValue: "07 84 71 73 01" },
      { name: "email", label: "Email", type: "email", required: true, defaultValue: "odebarras2b@gmail.com" },
    ] },
    { name: "ville", label: "Ville", type: "text", defaultValue: "Bastia" },
    { name: "accroche", label: "Phrase d'accroche", type: "textarea", defaultValue: "Intervention rapide, discrète et respectueuse dans toute la Corse." },
    {
      name: "chiffres",
      label: "Chiffres clés (bandeau sous l'ouverture)",
      type: "array",
      maxRows: 4,
      labels: { singular: "Chiffre", plural: "Chiffres" },
      fields: [
        { type: "row", fields: [
          { name: "valeur", label: "Valeur", type: "text", required: true },
          { name: "libelle", label: "Libellé", type: "text", required: true },
        ] },
      ],
    },
    { type: "row", fields: [
      { name: "instagram", label: "Lien Instagram", type: "text", defaultValue: "https://www.instagram.com/odebarras/" },
      { name: "facebook", label: "Lien Facebook", type: "text" },
      { name: "avisGoogle", label: "Lien vers les avis Google", type: "text" },
    ] },
  ],
};
