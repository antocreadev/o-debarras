import { MetadataRoute } from "next";
import { corsicaRegions, allCities } from "@/lib/corsica-data";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/logo-2.png`],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${SITE_URL}/particulier-1.png`,
        `${SITE_URL}/pro-1-1.png`,
        `${SITE_URL}/diogene-1-1.png`,
      ],
    },
    {
      url: `${SITE_URL}/services/particuliers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/particulier-1.png`],
    },
    {
      url: `${SITE_URL}/services/diogene`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/diogene-1-1.png`],
    },
    {
      url: `${SITE_URL}/services/professionnels`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/pro-1-1.png`],
    },
    {
      url: `${SITE_URL}/secteurs/collectivites-administrations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/secteurs/sinistres-assurances`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/secteurs/successions-notaires`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/secteurs/agences-immobilieres`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/secteurs/mandataires-judiciaires`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/secteurs/administrateurs-immeubles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/realisations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/valeurs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/zones`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cgu`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pages des régions
  const regionPages: MetadataRoute.Sitemap = corsicaRegions.map((region) => ({
    url: `${SITE_URL}/zones/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${SITE_URL}/corse.png`],
  }));

  // Pages des villes
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${SITE_URL}/zones/villes/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [`${SITE_URL}/corse.png`],
  }));

  return [...staticPages, ...regionPages, ...cityPages];
}
