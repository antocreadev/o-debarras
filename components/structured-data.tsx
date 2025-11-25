"use client";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.odebarras-corse.fr/#organization",
        name: "Ò Débarras",
        image: "https://www.odebarras-corse.fr/logo.svg",
        logo: "https://www.odebarras-corse.fr/logo.svg",
        url: "https://www.odebarras-corse.fr",
        telephone: "+33784717301",
        email: "contact@odebarras.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Corse",
          addressRegion: "Corse",
          addressCountry: "FR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Christine Saoli" },
            datePublished: "2024-11-01",
            reviewBody:
              "Très bon contact ! Très professionnel, rapide et prix très raisonnable ! Ce sont occupés de vider mon garage qui était remplit de tout et n’importe quoi.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Joseph Marchioni" },
            datePublished: "2024-08-15",
            reviewBody:
              "Excellent travail de Kévin et de son équipe. Très humain , très compréhensif, très compétent ! Un véritable et honnête professionnel.",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Pierre Cuttoli" },
            datePublished: "2024-11-15",
            reviewBody:
              "Entreprise très correct au niveau tarif, personnel a l écoute, tout est propre après leur départ",
            reviewRating: { "@type": "Rating", ratingValue: "5" },
          },
        ],
        sameAs: [
          "https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/",
          "https://www.instagram.com/o_debarras/",
        ],
        knowsAbout: [
          "Débarras de maison",
          "Syndrome de Diogène",
          "Nettoyage après décès",
          "Débarras de cave",
          "Débarras de grenier",
          "Débarras de locaux professionnels et associatifs",
        ],
        paymentAccepted: ["Cash", "Credit Card", "Check", "Wire Transfer"],
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
          "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Service de débarras de maisons, appartements, caves, greniers, locaux professionnels / associatifs et cas de syndrome de Diogène.",
        founder: {
          "@type": "Person",
          name: "Ò Débarras",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.odebarras-corse.fr/#service",
        serviceType: "Débarras",
        provider: {
          "@id": "https://www.odebarras-corse.fr/#organization",
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
        "@id": "https://www.odebarras-corse.fr/#website",
        url: "https://www.odebarras-corse.fr",
        name: "Ò Débarras - Service de Débarras Professionnel en Corse",
        description:
          "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels.",
        publisher: {
          "@id": "https://www.odebarras-corse.fr/#organization",
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
