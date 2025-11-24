import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  FileText,
  Lock,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Débarras pour Mandataires Judiciaires en Corse | Saisies & Procédures | Ò Débarras",
  description:
    "Service de débarras pour mandataires judiciaires en Corse. Biens saisis, expulsions, inventaires détaillés, destruction sécurisée. Confidentialité et documentation rigoureuse.",
  keywords: [
    "débarras mandataires judiciaires Corse",
    "débarras biens saisis",
    "expulsion débarras Corse",
    "inventaire judiciaire",
    "sécurisation lieux après débarras",
    "destruction documents confidentiels",
    "procédures judiciaires débarras",
    "saisie immobilière débarras",
  ],
  openGraph: {
    title: "Débarras pour Mandataires Judiciaires | Ò Débarras",
    description:
      "Partenaire des mandataires judiciaires en Corse pour débarras de biens saisis et procédures légales.",
    type: "website",
  },
  alternates: {
    canonical: "/secteurs/mandataires-judiciaires",
  },
};

export default function MandatairesJudiciairesPage() {
  const services = [
    {
      title: "Débarras de Biens Saisis",
      description:
        "Évacuation complète de biens immobiliers saisis dans le cadre de procédures judiciaires (saisies immobilières, expulsions).",
    },
    {
      title: "Inventaires Détaillés",
      description:
        "Établissement d'inventaires précis et documentés (photos, descriptions) pour les besoins de la justice.",
    },
    {
      title: "Mise en Sécurité",
      description:
        "Sécurisation des lieux après débarras pour éviter les squats et dégradations en attente de vente ou de restitution.",
    },
    {
      title: "Destruction Sécurisée",
      description:
        "Destruction confidentielle de documents sensibles avec certificat de destruction conforme aux normes légales.",
    },
  ];

  const advantages = [
    {
      icon: Scale,
      title: "Connaissance Juridique",
      description:
        "Compréhension des procédures judiciaires et respect strict des cadres légaux.",
    },
    {
      icon: FileText,
      title: "Documentation Rigoureuse",
      description:
        "Inventaires détaillés, photos horodatées, certificats pour vos dossiers judiciaires.",
    },
    {
      icon: Lock,
      title: "Confidentialité Absolue",
      description:
        "Discrétion totale sur les situations et respect du secret professionnel.",
    },
    {
      icon: Shield,
      title: "Assurances Adaptées",
      description:
        "Couverture d'assurance spécifique pour les interventions dans un cadre judiciaire.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Justice</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras pour Mandataires Judiciaires
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Debarras accompagne les mandataires judiciaires dans leurs
              missions avec rigueur, confidentialité et respect des procédures
              légales.
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
                  <Scale className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Un Partenaire de Confiance pour la Justice
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Les mandataires judiciaires font face à des situations
                  complexes nécessitant des interventions de débarras dans un
                  cadre légal strict : saisies immobilières, expulsions,
                  liquidations judiciaires, tutelles, curatelles...
                </p>
                <p className="text-muted-foreground">
                  Ò Debarras comprend les enjeux et contraintes de ces missions.
                  Nous intervenons avec la rigueur et la confidentialité
                  requises, en respectant scrupuleusement les procédures
                  judiciaires et en fournissant toute la documentation
                  nécessaire.
                </p>
                <p className="text-muted-foreground">
                  Notre expérience avec les mandataires judiciaires corses nous
                  permet d'anticiper vos besoins et de vous proposer un service
                  adapté à chaque situation.
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
              Des prestations adaptées aux exigences du cadre judiciaire
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

      {/* Situations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Situations d'Intervention
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Saisies Immobilières",
                  description:
                    "Débarras complet de biens saisis pour permettre leur mise en vente dans les meilleures conditions.",
                },
                {
                  title: "Expulsions",
                  description:
                    "Évacuation des biens laissés sur place après une expulsion, avec inventaire et stockage si nécessaire.",
                },
                {
                  title: "Liquidations Judiciaires",
                  description:
                    "Débarras de locaux professionnels dans le cadre de liquidations, avec tri et valorisation des actifs.",
                },
                {
                  title: "Tutelles et Curatelles",
                  description:
                    "Accompagnement dans le débarras de logements de personnes sous protection juridique, avec respect et empathie.",
                },
                {
                  title: "Successions Conflictuelles",
                  description:
                    "Intervention neutre et documentée dans les successions complexes nécessitant l'intervention de la justice.",
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

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              Notre Processus d'Intervention
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Réception du Mandat",
                  description:
                    "Réception de votre demande avec les documents juridiques nécessaires (ordonnance, jugement, etc.).",
                },
                {
                  step: "2",
                  title: "Visite et Devis",
                  description:
                    "Visite des lieux avec établissement d'un devis détaillé conforme aux procédures judiciaires.",
                },
                {
                  step: "3",
                  title: "Inventaire Contradictoire",
                  description:
                    "Établissement d'un inventaire détaillé avec photos horodatées, en présence d'un huissier si nécessaire.",
                },
                {
                  step: "4",
                  title: "Débarras et Tri",
                  description:
                    "Évacuation des biens avec tri (objets de valeur, documents, biens recyclables) et traçabilité complète.",
                },
                {
                  step: "5",
                  title: "Documentation Finale",
                  description:
                    "Remise de tous les documents requis : inventaires, photos, certificats, bordereaux de suivi des déchets.",
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

      {/* Guarantees */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Nos Garanties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Respect des Délais</h3>
                  <p className="text-sm text-muted-foreground">
                    Intervention dans les délais imposés par les procédures
                    judiciaires.
                  </p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Traçabilité Totale</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentation complète de chaque étape pour vos dossiers.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Assurances Complètes</h3>
                  <p className="text-sm text-muted-foreground">
                    Couverture adaptée aux interventions judiciaires.
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
