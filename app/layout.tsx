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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#064e3b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
