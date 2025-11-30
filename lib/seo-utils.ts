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
