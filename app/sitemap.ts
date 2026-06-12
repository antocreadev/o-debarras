import { MetadataRoute } from "next";
import { corsicaRegions, allCities } from "@/lib/corsica-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.odebarras-corse.fr";
  const today = new Date();

  // Pages statiques principales - Priorité maximale
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/logo-2.png`,
        `${baseUrl}/og-image-home.jpg`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/particulier-1.png`,
        `${baseUrl}/pro-1-1.png`,
        `${baseUrl}/diogene-1-1.png`,
      ],
    },
    {
      url: `${baseUrl}/zones`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/corse.png`,
        `${baseUrl}/og-image-zones.jpg`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.9,
      images: [`${baseUrl}/logo-2.png`],
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/realisation-1.jpg`],
    },
    {
      url: `${baseUrl}/valeurs`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/logo-2.png`],
    },
  ];

  // Pages de services - Priorité élevée
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/particuliers`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/particulier-1.png`],
    },
    {
      url: `${baseUrl}/services/professionnels`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/pro-1-1.png`],
    },
    {
      url: `${baseUrl}/services/diogene`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/diogene-1-1.png`],
    },
  ];

  // Pages de secteurs - Priorité moyenne-élevée
  const sectorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/secteurs/administrateurs-immeubles`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/secteurs/agences-immobilieres`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/secteurs/collectivites-administrations`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/secteurs/mandataires-judiciaires`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/secteurs/sinistres-assurances`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/secteurs/successions-notaires`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Pages légales - Priorité basse
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Pages des régions - Priorité selon l'importance
  const regionPages: MetadataRoute.Sitemap = corsicaRegions.map((region) => {
    // Priorité plus élevée pour les régions principales
    const priorities: Record<string, number> = {
      "cap-corse": 0.85,
      "pays-ajaccien": 0.85,
      "pays-bastiais": 0.85,
      "calvi-balagne": 0.8,
      "castagniccia-casinca": 0.8,
      "sud-corse": 0.8,
      "sartenais-valinco": 0.8,
      "fiumorbu-castellu": 0.75,
      "centre-corse": 0.75,
      "ouest-corse": 0.75,
    };
    
    return {
      url: `${baseUrl}/zones/${region.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: priorities[region.slug] || 0.7,
      images: [`${baseUrl}/corse.png`],
    };
  });

  // Pages des villes - Priorité basée sur l'importance de la ville
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => {
    // Villes principales avec priorité plus élevée
    const mainCities = [
      "ajaccio", "bastia", "calvi", "ile-rousse", "porto-vecchio", "bonifacio",
      "corte", "sartene", "propriano", "ghisonaccia"
    ];
    
    return {
      url: `${baseUrl}/zones/villes/${city.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: mainCities.includes(city.slug) ? 0.75 : 0.65,
      images: [`${baseUrl}/corse.png`],
    };
  });

  return [
    ...staticPages,
    ...servicePages,
    ...sectorPages,
    ...legalPages,
    ...regionPages,
    ...cityPages,
  ];
}

// Sitemap Index Generator (pour les moteurs de recherche)
export async function generateSitemapIndex(): Promise<string> {
  const baseUrl = "https://www.odebarras-corse.fr";
  const today = new Date().toISOString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}
