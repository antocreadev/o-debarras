"use client";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://o-debarras-4b2f.vercel.app/#organization",
        name: "Ò Débarras",
        image: "https://o-debarras-4b2f.vercel.app/logo.svg",
        logo: "https://o-debarras-4b2f.vercel.app/logo.svg",
        url: "https://o-debarras-4b2f.vercel.app",
        telephone: "+33495123456",
        email: "contact@odebarras.fr",
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "12:00",
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
          "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Service de débarras de maisons, appartements, caves, greniers, locaux professionnels et cas de syndrome de Diogène.",
        founder: {
          "@type": "Person",
          name: "Ò Débarras",
        },
      },
      {
        "@type": "Service",
        "@id": "https://o-debarras-4b2f.vercel.app/#service",
        serviceType: "Débarras",
        provider: {
          "@id": "https://o-debarras-4b2f.vercel.app/#organization",
        },
        areaServed: {
          "@type": "State",
          name: "Corse",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de Débarras",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Débarras Particuliers",
                description:
                  "Débarras de maisons, appartements, caves, greniers et garages pour particuliers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Syndrome de Diogène",
                description:
                  "Intervention spécialisée et discrète pour les cas de syndrome de Diogène et syllogomanie",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Débarras Professionnels",
                description:
                  "Débarras de locaux commerciaux, bureaux, entrepôts pour professionnels et collectivités",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://o-debarras-4b2f.vercel.app/#website",
        url: "https://o-debarras-4b2f.vercel.app",
        name: "Ò Débarras - Service de Débarras Professionnel en Corse",
        description:
          "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels.",
        publisher: {
          "@id": "https://o-debarras-4b2f.vercel.app/#organization",
        },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
