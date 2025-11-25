const baseUrl = "https://o-debarras-4b2f.vercel.app";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "Ò Débarras",
    image: `${baseUrl}/logo.svg`,
    logo: `${baseUrl}/logo.svg`,
    url: baseUrl,
    telephone: "+33784717301",
    email: "odebarras2b@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Corse",
      addressRegion: "Corse",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.0396,
      longitude: 9.0129,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "€€",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 42.0396,
        longitude: 9.0129,
      },
      geoRadius: "100000",
    },
    description:
      "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Service de débarras de maisons, appartements, caves, greniers, locaux professionnels / associatifs et cas de syndrome de Diogène.",
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
    description: `Service de débarras professionnel en ${regionName}. ${description}`,
    url: `${baseUrl}/zones/${regionSlug}`,
    telephone: "+33784717301",
    email: "odebarras2b@gmail.com",
    areaServed: {
      "@type": "Place",
      name: regionName,
    },
    priceRange: "€€",
  };
}
