import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ò Débarras - Service de Débarras Professionnel en Corse",
  description:
    "Expert en débarras en Corse depuis 2020. Intervention rapide pour particuliers et professionnels. Devis gratuit. Discrétion garantie.",
  keywords: [
    "débarras Corse",
    "débarras maison Corse",
    "débarras appartement",
    "vide maison Corse",
    "débarras professionnel",
    "syndrome de Diogène Corse",
    "débarras succession",
    "nettoyage après décès",
    "débarras cave grenier",
    "débarras locaux commerciaux Corse",
    "enlèvement encombrants Corse",
    "débarras Ajaccio",
    "débarras Bastia",
    "entreprise débarras Corse",
  ],
  authors: [{ name: "Ò Débarras" }],
  creator: "Ò Débarras",
  publisher: "Ò Débarras",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.odebarras-corse.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ò Débarras - Service de Débarras Professionnel en Corse",
    description:
      "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Devis gratuit.",
    url: "https://www.odebarras-corse.fr",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Ò Débarras - Service de débarras en Corse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ò Débarras - Service de Débarras Professionnel en Corse",
    description:
      "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète. Devis gratuit.",
    images: ["/logo-2.png"],
    creator: "@o_debarras",
    site: "@o_debarras",
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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  category: "Service de débarras",
  other: {
    "geo.region": "FR-2A;FR-2B",
    "geo.placename": "Corse",
    "geo.position": "42.0396;9.0129",
    ICBM: "42.0396, 9.0129",
    // Dublin Core Metadata
    "DC.title": "Ò Débarras - Service de Débarras Professionnel en Corse",
    "DC.creator": "Ò Débarras",
    "DC.subject": "Débarras, Nettoyage, Corse, Syndrome de Diogène",
    "DC.description":
      "Expert en débarras en Corse depuis 2020. Intervention rapide pour particuliers et professionnels.",
    "DC.publisher": "Ò Débarras",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.language": "fr",
    "DC.coverage": "Corse, France",
    // Rating & Content Classification
    rating: "general",
    distribution: "global",
    "revisit-after": "7 days",
    // Mobile Optimization
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    // Microsoft
    "msapplication-TileColor": "#064e3b",
    "msapplication-tap-highlight": "no",
    // Referrer Policy
    referrer: "strict-origin-when-cross-origin",
    // Content Type
    "content-type": "text/html; charset=UTF-8",
    // Author Contact
    "reply-to": "odebarras2b@gmail.com",
    // Business Classification
    classification: "Business",
    // Coverage
    coverage: "Worldwide",
    // Target Audience
    audience: "all",
    // Page Topic
    "page-topic": "Service de débarras professionnel en Corse",
    // Abstract
    abstract:
      "Service professionnel de débarras en Corse pour particuliers et entreprises. Intervention rapide, discrétion garantie.",
    // Pinterest
    "pinterest:title":
      "Ò Débarras - Service de Débarras Professionnel en Corse",
    "pinterest:description":
      "Expert en débarras en Corse depuis 2020. Intervention rapide et professionnelle.",
    "pinterest:image": "https://www.odebarras-corse.fr/logo-2.png",
    // LinkedIn
    "linkedin:owner": "Ò Débarras",
    // Telegram
    "telegram:channel": "@odebarras",
    // WhatsApp Business
    "whatsapp:account": "+33784717301",
    // Schema.org Article Metadata
    articleSection: "Services",
    articleTag: "débarras, Corse, nettoyage, syndrome de Diogène",
    
    // === META TAGS POUR LES IA ===
    // GPT/ChatGPT
    "openai:title": "Ò Débarras - Expert en débarras en Corse",
    "openai:description":
      "Service professionnel de débarras en Corse. Intervention 48h, particuliers et professionnels. Tél: 07 84 71 73 01",
    "openai:image": "https://www.odebarras-corse.fr/logo-2.png",
    // Claude (Anthropic)
    "anthropic:context": "business:local-service,industry:cleaning-clearance,location:corsica-france",
    "anthropic:expertise": "débarras professionnel,syndrome de Diogène,nettoyage,tri recyclage",
    // Perplexity
    "perplexity:category": "Local Business - Clearance Service",
    "perplexity:verified": "true",
    // Bing Chat / Copilot
    "bing:sitename": "Ò Débarras",
    "bing:primaryImageOfPage": "https://www.odebarras-corse.fr/logo-2.png",
    // Google Bard / Gemini
    "google:enrichment": "business-listing,service-provider",
    
    // === VOCABULAIRES SEMANTIQUES ===
    // FOAF (Friend of a Friend)
    "foaf:name": "Ò Débarras",
    "foaf:homepage": "https://www.odebarras-corse.fr",
    "foaf:phone": "+33784717301",
    "foaf:mbox": "mailto:odebarras2b@gmail.com",
    // SKOS (Simple Knowledge Organization System)
    "skos:prefLabel": "Débarras professionnel Corse",
    "skos:altLabel": "vide maison Corse,nettoyage encombrants,désencombrement",
    "skos:broader": "services de nettoyage",
    "skos:narrower": "débarras particuliers,débarras professionnels,syndrome de Diogène",
    "skos:related": "nettoyage,tri,recyclage,valorisation,évacuation",
    // DBpedia
    "dbpedia:subject": "Waste_management,Cleaning,Professional_services",
    "dbpedia:about": "http://dbpedia.org/resource/Waste_collection",
    // Wikidata
    "wikidata:topic": "Q840614", // Waste collection
    "wikidata:location": "Q14112", // Corsica
    
    // === ENTITES NOMMEES (NER) ===
    "entity:organization": "Ò Débarras",
    "entity:location": "Corse,Ajaccio,Bastia,Corse-du-Sud,Haute-Corse",
    "entity:service": "débarras,nettoyage,tri,recyclage,désencombrement",
    "entity:specialty": "syndrome de Diogène,syllogomanie,débarras succession",
    
    // === ONTOLOGIE METIER ===
    "ont:domain": "services-aux-particuliers,services-aux-entreprises",
    "ont:service-type": "débarras,vide-maison,nettoyage-après-décès",
    "ont:service-category": "nettoyage-professionnel,gestion-déchets",
    "ont:business-model": "service-local,intervention-rapide,devis-gratuit",
    
    // === KNOWLEDGE GRAPH ===
    "kg:entity-id": "odebarras-corse-2020",
    "kg:industry": "waste-management,cleaning-services",
    "kg:service-area": "corsica-france,corse-du-sud,haute-corse",
    "kg:established": "2020",
    "kg:specialization": "diogenes-syndrome,professional-clearance,estate-clearance",
    
    // === LINKED DATA ===
    "ld:type": "LocalBusiness,Service,Organization",
    "ld:sameAs":
      "https://www.facebook.com/odebarras,https://www.instagram.com/o_debarras/",
    "ld:memberOf": "French SME,Corsican businesses",
    
    // === SEMANTIC RELATIONS ===
    "rel:provides": "débarras services",
    "rel:serves": "particuliers,professionnels,collectivités",
    "rel:operates-in": "Corse",
    "rel:specializes-in": "syndrome de Diogène,débarras professionnel",
    
    // === AI CONTEXT ===
    "ai:intent": "local-service-discovery,quote-request,appointment-booking",
    "ai:primary-action": "contact,request-quote,call-now",
    "ai:user-need": "débarras service,clearing service,cleaning service",
    "ai:solution": "professional clearance,rapid intervention,discrete service",
    "ai:use-cases":
      "house clearance,apartment clearing,estate clearance,diogenes syndrome,commercial premises",
    
    // === SEMANTIC WEB ===
    "sw:ontology": "https://schema.org/,http://xmlns.com/foaf/0.1/",
    "sw:vocabulary": "Schema.org,FOAF,Dublin Core,SKOS",
    "sw:format": "JSON-LD,RDFa,Microdata",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ò Débarras",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* DNS Prefetch & Preconnect pour performances */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://static.cdninstagram.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.instagram.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://lh3.googleusercontent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://scontent.cdninstagram.com"
          crossOrigin="anonymous"
        />

        {/* Manifest & Theme */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="alternate"
          type="application/ld+json"
          href="/jsonld-context.json"
        />
        <link
          rel="alternate"
          type="application/ld+json"
          href="/manifest.jsonld"
        />
        <link rel="alternate" type="text/turtle" href="/.well-known/void.ttl" />
        <link rel="author" type="text/plain" href="/humans.txt" />
        <link rel="help" type="text/plain" href="/.well-known/security.txt" />
        <meta name="theme-color" content="#064e3b" />
        <meta name="msapplication-TileColor" content="#064e3b" />
        <meta name="msapplication-navbutton-color" content="#064e3b" />

        {/* iOS Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Security & Performance */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Knowledge Graph JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "skos:prefLabel":
                    "Ò Débarras - Débarras professionnel Corse",
                  "skos:altLabel": [
                    "O Débarras",
                    "Ò Débarras Corse",
                    "Débarras Corse",
                  ],
                  url: "https://www.odebarras-corse.fr",
                  telephone: "+33784717301",
                  email: "odebarras2b@gmail.com",
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
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Corse",
                    addressCountry: "FR",
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
                      "skos:related": [
                        "Syllogomanie",
                        "Accumulation compulsive",
                      ],
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* Linked Data Profile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />

        {/* Semantic Relations Vocabulary */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": {
                "@vocab": "https://schema.org/",
                skos: "http://www.w3.org/2004/02/skos/core#",
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
                    "skos:altLabel": [
                      "Syllogomanie",
                      "Accumulation compulsive",
                    ],
                    "skos:related": [
                      "Intervention spécialisée",
                      "Accompagnement social",
                      "Discrétion",
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
