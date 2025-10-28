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
  title:
    "Ò Débarras - Service de Débarras Professionnel en Corse | Particuliers & Professionnels",
  description:
    "Expert en débarras en Corse depuis 2020. Intervention rapide pour maisons, appartements, caves, syndrome de Diogène, locaux professionnels. Devis gratuit. Discrétion garantie.",
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
  metadataBase: new URL("https://o-debarras-4b2f.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ò Débarras - Service de Débarras Professionnel en Corse",
    description:
      "Expert en débarras en Corse depuis 2020. Intervention rapide et discrète pour particuliers et professionnels. Devis gratuit.",
    url: "https://o-debarras-4b2f.vercel.app",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.svg",
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
    images: ["/logo.svg"],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#064e3b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ò Débarras" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
