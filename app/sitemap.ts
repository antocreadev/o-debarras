import { MetadataRoute } from "next";
import { corsicaRegions, allCities } from "@/lib/corsica-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.odebarras-corse.fr";

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/logo-2.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${baseUrl}/particulier-1.png`,
        `${baseUrl}/pro-1-1.png`,
        `${baseUrl}/diogene-1-1.png`,
      ],
    },
    {
      url: `${baseUrl}/services/particuliers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/particulier-1.png`],
    },
    {
      url: `${baseUrl}/services/diogene`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/diogene-1-1.png`],
    },
    {
      url: `${baseUrl}/services/professionnels`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/pro-1-1.png`],
    },
    {
      url: `${baseUrl}/secteurs/collectivites-administrations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteurs/sinistres-assurances`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteurs/successions-notaires`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteurs/agences-immobilieres`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteurs/mandataires-judiciaires`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteurs/administrateurs-immeubles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/valeurs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zones`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pages des régions
  const regionPages: MetadataRoute.Sitemap = corsicaRegions.map((region) => ({
    url: `${baseUrl}/zones/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${baseUrl}/corse.png`],
  }));

  // Pages des villes
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/zones/villes/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [`${baseUrl}/corse.png`],
  }));

  return [...staticPages, ...regionPages, ...cityPages];
}
