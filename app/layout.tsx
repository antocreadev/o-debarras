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
        <meta name="theme-color" content="#064e3b" />
        <meta name="msapplication-TileColor" content="#064e3b" />
        <meta name="msapplication-navbutton-color" content="#064e3b" />

        {/* iOS Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Security & Performance */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
