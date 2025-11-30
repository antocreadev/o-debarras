import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DetailedServicesSection } from "@/components/detailed-services-section";
import { CTASection } from "@/components/cta-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Building2,
  Users,
  Recycle,
  Sofa,
  Car,
  Laptop,
  BookOpen,
  ShirtIcon,
  TreePine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services de Débarras Corse | Particuliers & Professionnels",
  description:
    "Tous nos services de débarras en Corse : particuliers, professionnels, syndrome de Diogène. Tri, recyclage, devis gratuit 48h.",
  keywords: [
    "services débarras Corse",
    "débarras complet Corse",
    "types de débarras",
    "prestations débarras",
    "débarras tout en un",
    "solutions débarras Corse",
    "débarras maison Corse",
    "débarras entreprise Corse",
    "débarras Diogène Corse",
  ],
  authors: [{ name: "Ò Débarras" }],
  creator: "Ò Débarras",
  publisher: "Ò Débarras",
  openGraph: {
    title: "Services de Débarras Corse | Ò Débarras",
    description:
      "Découvrez toutes nos prestations de débarras : particuliers, professionnels, syndrome de Diogène.",
    url: "https://www.odebarras-corse.fr/services",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Ò Débarras - Services de débarras en Corse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services de Débarras Corse | Ò Débarras",
    description:
      "Tous nos services de débarras en Corse : particuliers, professionnels, syndrome de Diogène.",
    images: ["/logo-2.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Home,
      title: "Débarras pour les Particuliers",
      description:
        "Nous intervenons chez les particuliers pour tous types de débarras : appartements, maisons, caves, greniers, garages. Notre équipe prend en charge l'intégralité du processus, du tri au transport, en passant par le recyclage responsable.",
      features: [
        "Intervention rapide sous 48h",
        "Devis gratuit et sans engagement",
        "Tri et recyclage systématique",
        "Nettoyage après débarras",
        "Respect de votre intimité",
      ],
    },
    {
      icon: Users,
      title: "Syndrome de Diogène & Syllogomanie",
      description:
        "Nous sommes spécialisés dans la prise en charge des situations complexes liées au syndrome de Diogène et à la syllogomanie. Notre approche est empreinte de respect, de discrétion et de professionnalisme pour accompagner les personnes concernées et leurs proches.",
      features: [
        "Équipe formée et sensibilisée",
        "Discrétion absolue garantie",
        "Accompagnement psychologique possible",
        "Intervention progressive et respectueuse",
        "Coordination avec les services sociaux",
      ],
    },
    {
      icon: Building2,
      title: "Débarras pour les Professionnels",
      description:
        "Nous accompagnons les entreprises, commerces, bureaux et locaux professionnels dans leurs projets de débarras. Que ce soit pour un déménagement, une fermeture, une rénovation ou une simple réorganisation, nous adaptons nos services à vos contraintes professionnelles.",
      features: [
        "Intervention hors horaires d'ouverture",
        "Gestion des archives et destruction sécurisée",
        "Débarras de matériel informatique",
        "Certificats de destruction",
        "Respect des normes RGPD",
      ],
    },
  ];

  const itemsWeHandle = [
    {
      icon: Sofa,
      name: "Mobiliers et bibelots",
      description: "Tous types de meubles et objets décoratifs",
    },

    {
      icon: Laptop,
      name: "Électroménager & Informatique",
      description: "Appareils électriques et électroniques",
    },
    {
      icon: BookOpen,
      name: "Livres & Archives",
      description: "Documentation, livres, archives professionnelles",
    },
    {
      icon: ShirtIcon,
      name: "Linge & Textiles",
      description: "Vêtements, rideaux, tissus d'ameublement",
    },
    {
      icon: TreePine,
      name: "Gravats & Déchets verts",
      description: "Matériaux de construction, végétaux",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Nos Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Des Solutions Complètes de Débarras en Corse
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Débarras vous accompagne dans tous vos projets de débarras avec
              professionnalisme, efficacité et discrétion. De la simple
              évacuation de meubles aux situations les plus complexes, nous
              avons la solution adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Que Débarrassons-Nous ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre mission est de débarrasser tous types de logements et locaux
              en Corse, en prenant en charge une variété d'objets avec
              professionnalisme et discrétion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsWeHandle.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recycling Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Recycle className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">
                  Notre Engagement Environnemental
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Chez Ò Débarras, nous sommes profondément engagés dans une
                démarche éco-responsable. Chaque intervention est l'occasion de
                trier, recycler et valoriser un maximum d'objets et de
                matériaux.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Tri Systématique</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous séparons les objets réutilisables, recyclables et les
                    déchets ultimes pour optimiser leur traitement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Partenariats Locaux</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous travaillons avec des associations et recycleries corses
                    pour donner une seconde vie aux objets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Traçabilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous vous fournissons des certificats de traitement et de
                    recyclage pour une transparence totale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
