import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Clock,
  FileCheck,
  Shield,
  Zap,
  Users,
} from "lucide-react";

export default function SinistresAssurancesPage() {
  const situations = [
    {
      title: "Incendie",
      description:
        "Débarras après incendie avec évacuation des biens endommagés, nettoyage des résidus et préparation pour les travaux de rénovation.",
    },
    {
      title: "Dégât des Eaux",
      description:
        "Intervention rapide pour évacuer les biens détériorés par l'eau et prévenir les dommages supplémentaires (moisissures, etc.).",
    },
    {
      title: "Catastrophes Naturelles",
      description:
        "Débarras suite à inondations, tempêtes ou autres événements climatiques avec gestion des débris et matériaux endommagés.",
    },
    {
      title: "Squats et Dégradations",
      description:
        "Remise en état de biens occupés illégalement ou vandalisés, avec évacuation complète et nettoyage approfondi.",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Intervention d'Urgence",
      description:
        "Disponibilité 7j/7 pour les situations urgentes. Intervention possible sous 24h.",
    },
    {
      icon: FileCheck,
      title: "Documentation Complète",
      description:
        "Photos avant/après, inventaires détaillés, certificats pour vos dossiers d'assurance et expertises.",
    },
    {
      icon: Users,
      title: "Coordination avec Experts",
      description:
        "Habitude de travailler avec les experts d'assurance et les professionnels du bâtiment.",
    },
    {
      icon: Shield,
      title: "Assurance Décennale",
      description:
        "Couverture complète pour intervenir en toute sécurité sur les sinistres.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Sinistres</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras Après Sinistre & Assurances
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Face à un sinistre, chaque minute compte. Ò Debarras intervient
              rapidement pour débarrasser et sécuriser vos biens, en
              coordination avec votre assurance.
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
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Votre Partenaire en Situation de Crise
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Un sinistre (incendie, dégât des eaux, catastrophe naturelle)
                  est toujours un moment difficile. Au- delà du choc émotionnel,
                  il faut agir vite pour limiter les dégâts, sécuriser les lieux
                  et entamer les démarches avec votre assurance.
                </p>
                <p className="text-muted-foreground">
                  Ò Debarras est votre allié dans ces moments critiques. Nous
                  intervenons rapidement pour débarrasser les biens endommagés,
                  documenter l'état des lieux pour votre assurance, et préparer
                  le terrain pour la remise en état.
                </p>
                <div className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium">
                    Intervention d'urgence disponible 24h/24 et 7j/7 partout en
                    Corse
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Situations d'Intervention
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons sur tous types de sinistres nécessitant un
              débarras professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {situations.map((situation, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{situation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {situation.description}
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
              Nos Atouts
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

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Notre Processus d'Intervention
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Appeler maintenant",
                  description:
                    "Contactez-nous 24h/24. Nous évaluons la situation et planifions une intervention rapide.",
                },
                {
                  step: "2",
                  title: "État des Lieux",
                  description:
                    "Documentation photographique complète et inventaire détaillé pour votre dossier d'assurance.",
                },
                {
                  step: "3",
                  title: "Débarras Sécurisé",
                  description:
                    "Évacuation des biens endommagés avec tri (récupérable/non récupérable) et mise en sécurité des lieux.",
                },
                {
                  step: "4",
                  title: "Documentation Finale",
                  description:
                    "Remise de tous les documents nécessaires pour votre assurance : photos, inventaires, certificats.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Partenaires Assurances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Nous travaillons régulièrement avec les principales compagnies
                d'assurance présentes en Corse
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["AXA", "MAIF", "MACIF", "Groupama", "Allianz", "MMA"].map(
                  (company) => (
                    <Badge
                      key={company}
                      variant="outline"
                      className="text-base px-4 py-2"
                    >
                      {company}
                    </Badge>
                  )
                )}
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
