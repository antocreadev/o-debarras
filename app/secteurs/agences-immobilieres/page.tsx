import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Clock,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Débarras pour Agences Immobilières en Corse | Avant Vente & Location | Ò Débarras",
  description:
    "Service de débarras rapide pour agences immobilières en Corse. Préparation biens avant vente/location. Intervention sous 48h. Valorisation et home staging. Tarifs professionnels.",
  keywords: [
    "débarras agence immobilière Corse",
    "débarras avant vente Corse",
    "préparation bien immobilier",
    "débarras avant location",
    "home staging débarras",
    "valorisation bien immobilier",
    "débarras urgence locataire",
    "partenaire agence immobilière",
  ],
  openGraph: {
    title: "Débarras pour Agences Immobilières | Ò Débarras",
    description:
      "Partenaire des agences immobilières corses pour préparer rapidement les biens à la vente ou location.",
    type: "website",
  },
  alternates: {
    canonical: "/secteurs/agences-immobilieres",
  },
};

export default function AgencesImmobilieresPage() {
  const services = [
    {
      title: "Débarras Avant Vente",
      description:
        "Préparation optimale des biens pour la vente : débarras complet, nettoyage approfondi pour valoriser le bien.",
    },
    {
      title: "Débarras Avant Location",
      description:
        "Remise en état rapide des logements entre deux locataires pour minimiser la vacance locative.",
    },
    {
      title: "Débarras d'Urgence",
      description:
        "Intervention rapide en cas de départ précipité de locataire ou de découverte d'un logement insalubre.",
    },
    {
      title: "Home Staging",
      description:
        "Débarras sélectif et réorganisation pour mettre en valeur le bien lors des visites (en partenariat).",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Réactivité",
      description:
        "Intervention sous 48h pour ne pas retarder vos ventes ou locations.",
    },
    {
      icon: Sparkles,
      title: "Valorisation",
      description:
        "Nettoyage professionnel pour présenter le bien sous son meilleur jour.",
    },
    {
      icon: TrendingUp,
      title: "Tarifs Professionnels",
      description:
        "Tarifs préférentiels pour les agences avec volume d'interventions régulier.",
    },
    {
      icon: Users,
      title: "Partenariat Durable",
      description:
        "Relation de confiance sur le long terme avec un interlocuteur dédié.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Immobilier</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras pour Agences Immobilières
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Débarras est le partenaire des agences immobilières corses pour
              préparer rapidement et efficacement les biens à la vente ou à la
              location.
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
                  <Home className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Votre Partenaire pour Valoriser Vos Biens
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Dans le secteur immobilier, le temps c'est de l'argent. Un
                  bien encombré ou mal présenté se vend moins vite et moins
                  cher. Un logement qui reste vide entre deux locataires
                  représente une perte de revenus.
                </p>
                <p className="text-muted-foreground">
                  Ò Débarras comprend ces enjeux et propose aux agences
                  immobilières corses un service de débarras rapide, efficace et
                  professionnel pour optimiser la mise en vente ou en location
                  de leurs biens.
                </p>
                <p className="text-muted-foreground">
                  Nous intervenons sur tous types de biens : appartements,
                  maisons, locaux commerciaux, caves, greniers, garages, partout
                  en Corse.
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
              Des solutions complètes pour préparer vos biens immobiliers
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

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Les Bénéfices pour Votre Agence
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Vente Plus Rapide",
                  description:
                    "Un bien vide et propre se vend en moyenne 30% plus vite qu'un bien encombré ou mal entretenu.",
                },
                {
                  title: "Meilleur Prix de Vente",
                  description:
                    "La présentation optimale du bien permet de justifier un prix de vente plus élevé et de réduire les négociations.",
                },
                {
                  title: "Réduction de la Vacance Locative",
                  description:
                    "Remise en état rapide entre deux locataires pour minimiser les périodes sans revenus locatifs.",
                },
                {
                  title: "Gain de Temps",
                  description:
                    "Vous vous concentrez sur votre cœur de métier pendant que nous gérons le débarras et la remise en état.",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
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
