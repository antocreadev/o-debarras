import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = "https://www.odebarras-corse.fr";

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || "/",
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}${config.canonical || "/"}`,
      siteName: "Ò Débarras",
      locale: "fr_FR",
      type: config.type || "website",
      images: [
        {
          url: config.ogImage || "/logo-2.png",
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.ogImage || "/logo-2.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.odebarras-corse.fr${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://www.odebarras-corse.fr${service.url}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Ò Débarras",
      url: "https://www.odebarras-corse.fr",
    },
    areaServed: {
      "@type": "State",
      name: "Corse",
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    url: `https://www.odebarras-corse.fr${article.url}`,
    image: article.image || "https://www.odebarras-corse.fr/logo-2.png",
    author: {
      "@type": "Organization",
      name: "Ò Débarras",
    },
    publisher: {
      "@type": "Organization",
      name: "Ò Débarras",
      logo: {
        "@type": "ImageObject",
        url: "https://www.odebarras-corse.fr/logo.svg",
      },
    },
  };
}

export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      "@type": "Organization",
      name: "Ò Débarras",
      logo: {
        "@type": "ImageObject",
        url: "https://www.odebarras-corse.fr/logo.svg",
      },
    },
  };
}

export function generateImageSchema(image: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: `https://www.odebarras-corse.fr${image.url}`,
    caption: image.caption,
    width: image.width,
    height: image.height,
    author: {
      "@type": "Organization",
      name: "Ò Débarras",
    },
  };
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
        ? `https://www.odebarras-corse.fr${step.image}`
        : undefined,
    })),
  };
}

export function generateAggregateOfferSchema(offer: {
  name: string;
  lowPrice: number;
  highPrice?: number;
  priceCurrency?: string;
  availability?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.name,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: offer.lowPrice,
      highPrice: offer.highPrice,
      priceCurrency: offer.priceCurrency || "EUR",
      availability: offer.availability || "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Ò Débarras",
      },
    },
  };
}

export function generateSpeakableSchema(selectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: selectors,
    },
  };
}

export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  employmentType: string;
  baseSalary?: { minValue: number; maxValue: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Ò Débarras",
      sameAs: "https://www.odebarras-corse.fr",
      logo: "https://www.odebarras-corse.fr/logo.svg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Corse",
        addressCountry: "FR",
      },
    },
    baseSalary: job.baseSalary
      ? {
          "@type": "MonetaryAmount",
          currency: "EUR",
          value: {
            "@type": "QuantitativeValue",
            minValue: job.baseSalary.minValue,
            maxValue: job.baseSalary.maxValue,
            unitText: "MONTH",
          },
        }
      : undefined,
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://www.odebarras-corse.fr/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Ò Débarras",
      telephone: "+33784717301",
      email: "odebarras2b@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Corse",
        addressCountry: "FR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "19:00",
        },
      ],
    },
  };
}

export function generateImageGallerySchema(
  images: Array<{ url: string; caption: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    image: images.map((img) => ({
      "@type": "ImageObject",
      url: `https://www.odebarras-corse.fr${img.url}`,
      caption: img.caption,
    })),
  };
}

// === WEB SEMANTIQUE AVANCE ===

export function generateKnowledgeGraph() {
  return {
    "@context": {
      "@vocab": "https://schema.org/",
      foaf: "http://xmlns.com/foaf/0.1/",
      skos: "http://www.w3.org/2004/02/skos/core#",
      dbpedia: "http://dbpedia.org/resource/",
      wikidata: "https://www.wikidata.org/wiki/",
    },
    "@graph": [
      {
        "@id": "https://www.odebarras-corse.fr/#organization",
        "@type": ["Organization", "LocalBusiness"],
        name: "Ò Débarras",
        "foaf:name": "Ò Débarras",
        "skos:prefLabel": "Ò Débarras - Débarras professionnel Corse",
        "skos:altLabel": [
          "O Débarras",
          "Ò Débarras Corse",
          "Débarras Corse",
        ],
        url: "https://www.odebarras-corse.fr",
        sameAs: [
          "https://www.facebook.com/people/ò-débarras/61580426932164/",
          "https://www.instagram.com/o_debarras/",
        ],
        "skos:related": [
          "dbpedia:Waste_management",
          "dbpedia:Cleaning",
          "wikidata:Q840614",
        ],
        foundingDate: "2020",
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 42.0396,
            longitude: 9.0129,
          },
          geoRadius: "100000",
          name: "Corse",
        },
        knowsAbout: [
          {
            "@type": "Thing",
            name: "Débarras de maison",
            "skos:broader": "Services de nettoyage",
            "skos:narrower": [
              "Débarras appartement",
              "Débarras cave",
              "Débarras grenier",
            ],
          },
          {
            "@type": "Thing",
            name: "Syndrome de Diogène",
            sameAs: "wikidata:Q1228323",
            "skos:related": ["Syllogomanie", "Accumulation compulsive"],
          },
        ],
      },
    ],
  };
}

export function generateLinkedDataProfile() {
  return {
    "@context": [
      "https://schema.org",
      {
        foaf: "http://xmlns.com/foaf/0.1/",
        dcterms: "http://purl.org/dc/terms/",
        skos: "http://www.w3.org/2004/02/skos/core#",
      },
    ],
    "@type": ["Organization", "foaf:Organization"],
    "@id": "https://www.odebarras-corse.fr/#id",
    name: "Ò Débarras",
    "foaf:name": "Ò Débarras",
    "foaf:homepage": "https://www.odebarras-corse.fr",
    "foaf:phone": "tel:+33784717301",
    "foaf:mbox": "mailto:odebarras2b@gmail.com",
    "dcterms:description":
      "Expert en débarras professionnel en Corse depuis 2020",
    "dcterms:subject": "Débarras, Nettoyage, Services professionnels",
    "dcterms:spatial": "Corse, France",
    "dcterms:created": "2020",
    "skos:prefLabel": {
      "@language": "fr",
      "@value": "Ò Débarras - Service de débarras professionnel",
    },
    "skos:definition":
      "Entreprise spécialisée dans le débarras de maisons, appartements, et locaux professionnels en Corse",
    memberOf: {
      "@type": "OrganizationRole",
      memberOf: {
        "@type": "Organization",
        name: "Entreprises corses",
      },
    },
  };
}

export function generateSemanticRelations() {
  return {
    "@context": {
      "@vocab": "https://schema.org/",
      skos: "http://www.w3.org/2004/02/skos/core#",
      dcterms: "http://purl.org/dc/terms/",
    },
    "@type": "DefinedTermSet",
    name: "Vocabulaire Débarras Corse",
    "skos:ConceptScheme": {
      "@type": "Thing",
      name: "Services de débarras",
      "skos:hasTopConcept": [
        {
          "@type": "DefinedTerm",
          name: "Débarras particuliers",
          "skos:broader": "Services aux particuliers",
          "skos:narrower": [
            "Débarras maison",
            "Débarras appartement",
            "Débarras cave",
            "Débarras grenier",
            "Débarras garage",
          ],
          "skos:related": ["Vide maison", "Désencombrement", "Tri"],
        },
        {
          "@type": "DefinedTerm",
          name: "Débarras professionnels",
          "skos:broader": "Services aux entreprises",
          "skos:narrower": [
            "Débarras bureaux",
            "Débarras locaux commerciaux",
            "Débarras entrepôts",
          ],
          "skos:related": [
            "Destruction archives",
            "RGPD",
            "Certificats destruction",
          ],
        },
        {
          "@type": "DefinedTerm",
          name: "Syndrome de Diogène",
          "skos:altLabel": ["Syllogomanie", "Accumulation compulsive"],
          "skos:related": [
            "Intervention spécialisée",
            "Accompagnement social",
            "Discrétion",
          ],
        },
      ],
    },
  };
}

export function generateEntityAnnotations(entities: {
  organizations?: string[];
  locations?: string[];
  services?: string[];
  specialties?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...(entities.organizations?.map((org, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Organization",
            name: org,
          },
        })) || []),
        ...(entities.locations?.map((loc, i) => ({
          "@type": "ListItem",
          position: (entities.organizations?.length || 0) + i + 1,
          item: {
            "@type": "Place",
            name: loc,
          },
        })) || []),
        ...(entities.services?.map((svc, i) => ({
          "@type": "ListItem",
          position:
            (entities.organizations?.length || 0) +
            (entities.locations?.length || 0) +
            i +
            1,
          item: {
            "@type": "Service",
            name: svc,
          },
        })) || []),
      ],
    },
  };
}

export function generateAIContextSchema(context: {
  intent: string;
  userNeed: string;
  solution: string;
  useCases: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    about: {
      "@type": "Thing",
      name: context.userNeed,
      description: context.solution,
    },
    potentialAction: {
      "@type": "SearchAction",
      query: context.intent,
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.odebarras-corse.fr/contact?query={search_term_string}",
      },
    },
    mentions: context.useCases.map((useCase) => ({
      "@type": "Thing",
      name: useCase,
    })),
  };
}
