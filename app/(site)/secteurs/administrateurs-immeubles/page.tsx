import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Clock,
  Users,
  Recycle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Débarras pour Administrateurs d'Immeubles & Syndics en Corse | Ò Débarras",
  description:
    "Service de débarras pour syndics et administrateurs de biens en Corse. Gestion parties communes, caves, greniers. Interventions planifiées et tarifs dégressifs pour copropriétés.",
  keywords: [
    "débarras syndics Corse",
    "débarras copropriété Corse",
    "administrateur biens débarras",
    "parties communes débarras",
    "caves greniers copropriété",
    "encombrants immeuble Corse",
    "gestion débarras régulier",
    "tarifs syndics Corse",
  ],
  openGraph: {
    title: "Débarras pour Syndics & Administrateurs | Ò Débarras",
    description:
      "Partenaire des syndics et administrateurs de biens pour la gestion des débarras en copropriété.",
    type: "website",
  },
  alternates: {
    canonical: "/secteurs/administrateurs-immeubles",
  },
};

export default function AdministrateursImmeubles() {
  const services = [
    {
      title: "Débarras de Parties Communes",
      description:
        "Évacuation des encombrants dans les halls, couloirs, caves communes, locaux vélos pour maintenir la propreté de l'immeuble.",
    },
    {
      title: "Débarras de Caves et Greniers",
      description:
        "Nettoyage des caves et greniers privatifs ou communs, avec tri et recyclage systématique.",
    },
    {
      title: "Débarras Après Départ de Locataire",
      description:
        "Remise en état rapide des appartements entre deux locataires pour le compte des propriétaires.",
    },
    {
      title: "Gestion des Encombrants",
      description:
        "Organisation de collectes régulières d'encombrants pour les résidents de la copropriété.",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Interventions Planifiées",
      description:
        "Organisation d'interventions régulières ou ponctuelles selon les besoins de la copropriété.",
    },
    {
      icon: Users,
      title: "Respect des Résidents",
      description:
        "Interventions discrètes et respectueuses de la tranquillité des copropriétaires.",
    },
    {
      icon: Recycle,
      title: "Tri et Recyclage",
      description:
        "Engagement environnemental avec tri systématique et valorisation des déchets.",
    },
    {
      icon: TrendingUp,
      title: "Tarifs Dégressifs",
      description:
        "Tarifs préférentiels pour les contrats annuels et interventions régulières.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Copropriétés</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras pour Administrateurs d'Immeubles
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Débarras accompagne les syndics et administrateurs de biens dans
              la gestion des débarras en copropriété avec réactivité et
              professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Un Partenaire pour la Gestion de Vos Copropriétés
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Les administrateurs de biens et syndics de copropriété font
                  face à des besoins récurrents en matière de débarras : parties
                  communes encombrées, caves et greniers à vider, appartements à
                  remettre en état entre deux locataires...
                </p>
                <p className="text-muted-foreground">
                  Ò Débarras propose un service adapté aux contraintes de la
                  gestion immobilière : réactivité, flexibilité horaire, respect
                  des résidents, et tarifs compétitifs pour les interventions
                  régulières.
                </p>
                <p className="text-muted-foreground">
                  Nous intervenons dans toute la{" "}
                  <span className="font-bold">Corse</span> sur tous types de
                  copropriétés, du petit immeuble résidentiel aux grandes
                  résidences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nos Services Dédiés
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des prestations complètes pour la gestion de vos copropriétés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Pourquoi Nous Choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Situations Courantes
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Encombrement des Parties Communes",
                  description:
                    "Des résidents laissent des objets dans les couloirs, halls ou locaux communs. Intervention rapide pour dégager les espaces.",
                },
                {
                  title: "Caves et Greniers Abandonnés",
                  description:
                    "Des caves ou greniers sont laissés à l'abandon par d'anciens propriétaires ou locataires. Débarras complet avec recherche du propriétaire si nécessaire.",
                },
                {
                  title: "Départ Précipité de Locataire",
                  description:
                    "Un locataire part en laissant ses affaires. Remise en état rapide de l'appartement pour le remettre en location.",
                },
                {
                  title: "Préparation d'Assemblée Générale",
                  description:
                    "Nettoyage des parties communes avant une AG pour présenter la copropriété sous son meilleur jour.",
                },
                {
                  title: "Travaux en Copropriété",
                  description:
                    "Débarras nécessaire avant des travaux de rénovation dans les parties communes ou privatives.",
                },
              ].map((situation, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {situation.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {situation.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
