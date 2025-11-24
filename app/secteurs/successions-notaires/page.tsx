import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  FileText,
  Lock,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Débarras Succession & Notaires en Corse | Après Décès | Ò Débarras",
  description:
    "Service de débarras pour successions en Corse. Débarras après décès avec respect et empathie. Tri, inventaire, coordination notaires. Discrétion absolue. Accompagnement des familles.",
  keywords: [
    "débarras succession Corse",
    "débarras après décès Corse",
    "notaire débarras Corse",
    "vide maison succession",
    "inventaire succession débarras",
    "débarras héritage",
    "mise en vente après succession",
    "accompagnement famille débarras",
  ],
  openGraph: {
    title: "Débarras Succession & Notaires | Ò Débarras",
    description:
      "Accompagnement respectueux des familles et notaires pour débarras de successions en Corse.",
    type: "website",
  },
  alternates: {
    canonical: "/secteurs/successions-notaires",
  },
};

export default function SuccessionsNotairesPage() {
  const services = [
    {
      title: "Débarras Après Décès",
      description:
        "Nous prenons en charge l'intégralité du débarras d'un logement après un décès, avec respect et discrétion absolue.",
    },
    {
      title: "Tri et Inventaire",
      description:
        "Tri méticuleux des biens avec identification des objets de valeur, documents importants et souvenirs familiaux.",
    },
    {
      title: "Coordination avec Notaires",
      description:
        "Habitude de travailler en lien avec les études notariales pour respecter les procédures de succession.",
    },
    {
      title: "Mise en Vente",
      description:
        "Préparation du bien pour la vente : débarras complet, nettoyage approfondi, petites réparations si nécessaire.",
    },
  ];

  const advantages = [
    {
      icon: Heart,
      title: "Empathie et Respect",
      description:
        "Nous comprenons la charge émotionnelle de ces moments et agissons avec la plus grande délicatesse.",
    },
    {
      icon: Lock,
      title: "Discrétion Absolue",
      description:
        "Confidentialité totale sur la situation familiale et les biens découverts.",
    },
    {
      icon: FileText,
      title: "Documentation Précise",
      description:
        "Inventaires détaillés, photos, certificats pour faciliter les démarches notariales.",
    },
    {
      icon: Clock,
      title: "Respect des Délais",
      description:
        "Intervention rapide pour respecter les contraintes de succession et de vente.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Successions</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras de Successions & Notaires
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Debarras accompagne les familles et les notaires dans les
              débarras de successions avec empathie, professionnalisme et
              discrétion.
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
                  <Heart className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Un Accompagnement Humain dans les Moments Difficiles
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Le débarras d'un logement après un décès est une étape
                  douloureuse pour les familles. Entre le deuil, les démarches
                  administratives et les contraintes de temps, cette tâche peut
                  sembler insurmontable.
                </p>
                <p className="text-muted-foreground">
                  Ò Debarras vous soulage de cette charge en prenant en main
                  l'intégralité du processus. Notre équipe, formée à ces
                  situations sensibles, intervient avec respect, empathie et
                  professionnalisme pour vous permettre de vous concentrer sur
                  l'essentiel : votre famille.
                </p>
                <p className="text-muted-foreground">
                  Nous travaillons régulièrement avec les études notariales de
                  Corse et connaissons parfaitement les procédures et délais à
                  respecter dans le cadre d'une succession.
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
              Un accompagnement complet pour les successions et débarras après
              décès
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
              Pourquoi Nous Faire Confiance ?
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
                  title: "Premier Contact",
                  description:
                    "Échange téléphonique pour comprendre votre situation et vos besoins. Prise de rendez-vous pour une visite.",
                },
                {
                  step: "2",
                  title: "Visite et Devis",
                  description:
                    "Visite du logement avec vous ou le notaire. Établissement d'un devis détaillé et transparent.",
                },
                {
                  step: "3",
                  title: "Tri et Mise de Côté",
                  description:
                    "Tri méticuleux avec identification des objets de valeur, documents importants et souvenirs à conserver.",
                },
                {
                  step: "4",
                  title: "Débarras et Nettoyage",
                  description:
                    "Évacuation des biens avec tri pour recyclage. Nettoyage complet du logement pour le rendre présentable.",
                },
                {
                  step: "5",
                  title: "Remise des Clés",
                  description:
                    "Remise du logement propre et vide avec tous les documents nécessaires (inventaire, photos, certificats).",
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

      {/* Special Attention */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Une Attention Particulière
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Présence Familiale</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous pouvez être présent ou non lors du débarras, selon
                    votre souhait.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Objets de Valeur</h3>
                  <p className="text-sm text-muted-foreground">
                    Identification et mise de côté systématique des objets
                    précieux et souvenirs.
                  </p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Documents Importants</h3>
                  <p className="text-sm text-muted-foreground">
                    Recherche et conservation de tous les documents
                    administratifs et personnels.
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
