const baseUrl = "https://www.odebarras-corse.fr";
const businessName = "Ò Débarras";
const businessPhone = "+33784717301";
const businessEmail = "odebarras2b@gmail.com";
const businessFounded = "2020";

// Coordonnées GPS du centre de la Corse
export const corsicaGeo = {
  latitude: 42.0396,
  longitude: 9.0129,
};

// Liste de toutes les villes desservies (pour le SEO local)
export const areasServed = [
  "Ajaccio",
  "Bastia", 
  "Calvi",
  "Porto-Vecchio",
  "Bonifacio",
  "Corte",
  "Sartène",
  "Propriano",
  "Ghisonaccia",
  "L'Île-Rousse",
  "Corse-du-Sud",
  "Haute-Corse",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: businessName,
    alternateName: ["O Débarras", "Ò Débarras Corse"],
    image: `${baseUrl}/logo-2.png`,
    logo: `${baseUrl}/logo.svg`,
    url: baseUrl,
    telephone: businessPhone,
    email: businessEmail,
    foundingDate: businessFounded,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corse",
      addressLocality: "Corse",
      addressRegion: "Corse",
      postalCode: "20000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: corsicaGeo.latitude,
      longitude: corsicaGeo.longitude,
    },
    hasMap: "https://www.google.com/maps/place/Corse",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "€€",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: corsicaGeo.latitude,
          longitude: corsicaGeo.longitude,
        },
        geoRadius: "100000", // 100km
      },
      ...areasServed.map(area => ({
        "@type": "City",
        name: area,
      })),
    ],
    sameAs: [
      "https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/",
      "https://www.instagram.com/o_debarras/",
    ],
    description: "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Service de débarras de maisons, appartements, caves, greniers, locaux professionnels et cas de syndrome de Diogène.",
    potentialAction: {
      "@type": "Action",
      name: "Obtenir un devis",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/contact`,
        actionPlatform: ["http://schema.org/HTTPS"],
      },
      result: {
        "@type": "Offer",
        name: "Devis gratuit",
        description: "Devis gratuit sous 24h pour votre débarras en Corse",
        price: 0,
        priceCurrency: "EUR",
      },
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Débarras particuliers",
        description: "Débarras de maisons, appartements, caves et greniers pour particuliers",
        priceCurrency: "EUR",
        areaServed: "Corse",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Débarras professionnels",
        description: "Débarras de bureaux, locaux commerciaux et entrepôts pour entreprises",
        priceCurrency: "EUR",
        areaServed: "Corse",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Syndrome de Diogène",
        description: "Intervention spécialisée pour cas de syllogomanie et accumulation compulsive",
        priceCurrency: "EUR",
        areaServed: "Corse",
        availability: "https://schema.org/InStock",
      },
    ],
    owns: {
      "@type": "Vehicle",
      name: "Camion de débarras",
      description: "Flotte de véhicules équipés pour le transport et l'évacuation des encombrants",
    },
    numberOfEmployees: "1-10",
    yearsOfExperience: "5+",
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Ò Débarras",
      telephone: "+33784717301",
      url: baseUrl,
    },
    areaServed: {
      "@type": "State",
      name: "Corse",
    },
    url: `${baseUrl}${serviceUrl}`,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateLocalBusinessSchema(
  regionName: string,
  regionSlug: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Ò Débarras - ${regionName}`,
    alternateName: [`O Débarras ${regionName}`, `Débarras ${regionName}`],
    description: `Service de débarras professionnel en ${regionName}. ${description}`,
    url: `${baseUrl}/zones/${regionSlug}`,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: regionName,
      addressRegion: "Corse",
      postalCode: "20000",
      addressCountry: "FR",
    },
    geo: corsicaGeo,
    areaServed: {
      "@type": "Place",
      name: regionName,
    },
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/contact?region=${regionSlug}`,
      },
    },
  };
}

// Schéma pour les pages de villes
export function generateCityPageSchema(
  cityName: string,
  cityCorseName: string,
  regionName: string,
  regionSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/zones/villes/${regionSlug}-${cityName}#business`,
        name: `Ò Débarras - ${cityName}`,
        alternateName: [`Débarras ${cityName}`, `${cityName} débarras`],
        description: `Service de débarras professionnel à ${cityName} (${cityCorseName}) en ${regionName}. Intervention rapide et discrète pour tous vos besoins de débarras.`,
        url: `${baseUrl}/zones/villes/${regionSlug}`,
        telephone: businessPhone,
        email: businessEmail,
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressRegion: regionName,
          postalCode: "20000",
          addressCountry: "FR",
        },
        geo: corsicaGeo,
        priceRange: "€€",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        sameAs: [
          "https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/",
          "https://www.instagram.com/o_debarras/",
        ],
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/zones/villes/${regionSlug}#service`,
        name: `Débarras à ${cityName}`,
        description: `Service professionnel de débarras, désencombrement et nettoyage à ${cityName} et ses alentours.`,
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: cityName,
        },
        offers: {
          "@type": "Offer",
          name: "Devis gratuit",
          description: "Devis gratuit sous 24h",
          price: 0,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          areaServed: {
            "@type": "City",
            name: cityName,
          },
        },
      },
      {
        "@type": "Place",
        "@id": `${baseUrl}/zones/villes/${regionSlug}#location`,
        name: cityName,
        alternateName: cityCorseName,
        description: `Ville de ${cityName} en ${regionName}, Corse`,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: regionName,
        },
        geo: corsicaGeo,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/zones/villes/${regionSlug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Zones",
            item: `${baseUrl}/zones`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: regionName,
            item: `${baseUrl}/zones/${regionSlug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: cityName,
            item: `${baseUrl}/zones/villes/${regionSlug}`,
          },
        ],
      },
    ],
  };
}

// Schéma FAQ pour les questions courantes
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelles zones desservez-vous en Corse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons dans toute la Corse : Ajaccio, Bastia, Calvi, Porto-Vecchio, Bonifacio, Corte, Sartène, et toutes les communes. Consultez nos pages par région pour plus de détails.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un débarras ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif dépend du volume à évacuer et de la complexité de l'intervention. Nous proposons un devis gratuit sous 24h. Contactez-nous pour une estimation précise.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour le syndrome de Diogène ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous sommes spécialisés dans les interventions pour syndrome de Diogène avec discrétion et accompagnement adapté.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous un service pour les professionnels ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Nous intervenons pour les entreprises, administrateurs de biens, notaires, assurances et collectivités avec des tarifs adaptés.",
        },
      },
      {
        "@type": "Question",
        name: "Que devient les objets récupérés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous trions et recyclons au maximum. Les objets en bon état sont donnés aux associations, les déchets sont évacués dans le respect de l'environnement.",
        },
      },
    ],
  };
}

// Schéma de recherche locale
export function generateSearchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessName,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/zones?search={search_term_string}`,
        actionPlatform: ["http://schema.org/HTTPS"],
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "fr-FR",
  };
}
