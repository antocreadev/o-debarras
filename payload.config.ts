import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { fr } from "@payloadcms/translations/languages/fr";
import sharp from "sharp";
import { Avis, Chantiers, Medias, Services, Utilisateurs, Zones } from "./cms/collections";
import { Infos } from "./cms/globals";
import { Accueil } from "./cms/accueil";
import { migrations } from "./cms/migrations";
import { lireUsage } from "./lib/quota";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Clé de chiffrement des sessions : variable dédiée si présente, sinon dérivée de la connexion à la base.
const secret =
  process.env.PAYLOAD_SECRET ||
  createHash("sha256").update(`odebarras:${process.env.DATABASE_URL ?? "local"}`).digest("hex");

export default buildConfig({
  secret,
  admin: {
    user: Utilisateurs.slug,
    meta: { titleSuffix: " · Ò Débarras", description: "Administration du site Ò Débarras" },
    components: {
      beforeDashboard: ["/components/admin/quota-dashboard#QuotaDashboard"],
      graphics: { Logo: "/components/admin/brand#Logo", Icon: "/components/admin/brand#Icon" },
    },
    importMap: { baseDir: dirname },
    dateFormat: "d MMMM yyyy",
    theme: "light",
  },
  i18n: { supportedLanguages: { fr }, fallbackLanguage: "fr" },
  collections: [Chantiers, Avis, Services, Zones, Medias, Utilisateurs],
  routes: { admin: "/admin" },
  globals: [Accueil, Infos],
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
    prodMigrations: migrations,
    // le schéma n'évolue que par migrations : jamais de synchronisation automatique
    push: false,
    migrationDir: path.resolve(dirname, "cms/migrations"),
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { medias: { disablePayloadAccessControl: true } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      // les fichiers sont servis directement depuis le CDN Blob
      clientUploads: false,
    }),
  ],
  upload: { limits: { fileSize: 25_000_000 } },
  endpoints: [
    {
      path: "/quota",
      method: "get",
      handler: async (req) => {
        if (!req.user) return Response.json({ error: "Non connecté" }, { status: 401 });
        return Response.json(await lireUsage(req.payload), { headers: { "Cache-Control": "no-store" } });
      },
    },
  ],
  sharp,
  typescript: { outputFile: path.resolve(dirname, "cms/payload-types.ts") },
  graphQL: { disable: true },
  telemetry: false,
});
