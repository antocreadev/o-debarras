import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  CheckCircle2,
  FileText,
  Users,
  Clock,
  Shield,
} from "lucide-react";

export default function CollectivitesAdministrationsPage() {
  const services = [
    {
      title: "Débarras de Bâtiments Publics",
      description:
        "Écoles, mairies, centres sociaux, bibliothèques : nous intervenons dans tous types de bâtiments publics pour des débarras complets ou partiels.",
    },
    {
      title: "Gestion des Encombrants",
      description:
        "Collecte et traitement des encombrants déposés par les administrés, avec tri et recyclage systématique.",
    },
    {
      title: "Débarras d'Urgence",
      description:
        "Intervention rapide en cas de sinistre, squat, ou situation nécessitant une remise en état urgente des locaux.",
    },
    {
      title: "Destruction d'Archives",
      description:
        "Destruction sécurisée et confidentielle des archives administratives avec certificat de destruction conforme aux normes.",
    },
  ];

  const advantages = [
    {
      icon: FileText,
      title: "Procédures Administratives Simplifiées",
      description:
        "Nous connaissons les contraintes administratives et adaptons nos procédures en conséquence.",
    },
    {
      icon: Clock,
      title: "Flexibilité Horaire",
      description:
        "Interventions possibles hors horaires d'ouverture pour ne pas perturber le service public.",
    },
    {
      icon: Shield,
      title: "Assurances Complètes",
      description:
        "Couverture d'assurance adaptée aux interventions dans les bâtiments publics.",
    },
    {
      icon: Users,
      title: "Équipes Formées",
      description:
        "Personnel sensibilisé aux spécificités du secteur public et aux règles de sécurité.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-linear-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Secteur Public</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Débarras pour Collectivités & Administrations
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ò Debarras accompagne les collectivités locales et administrations
              corses dans leurs projets de débarras avec une expertise adaptée
              aux contraintes du secteur public.
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
                  <Building2 className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">
                    Un Partenaire de Confiance pour le Secteur Public
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Les collectivités territoriales et administrations publiques
                  font face à des besoins spécifiques en matière de débarras :
                  respect des procédures administratives, gestion budgétaire
                  rigoureuse, traçabilité des opérations, et respect des normes
                  environnementales.
                </p>
                <p className="text-muted-foreground">
                  Fort de notre expérience avec les acteurs publics corses, nous
                  proposons des solutions adaptées qui répondent à ces exigences
                  tout en garantissant efficacité et réactivité.
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
              Des prestations complètes adaptées aux besoins des collectivités
              et administrations
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
                  title: "Demande et Devis",
                  description:
                    "Réception de votre demande et établissement d'un devis détaillé conforme aux procédures de marchés publics.",
                },
                {
                  step: "2",
                  title: "Planification",
                  description:
                    "Organisation de l'intervention en coordination avec vos services pour minimiser les perturbations.",
                },
                {
                  step: "3",
                  title: "Intervention",
                  description:
                    "Débarras professionnel avec tri systématique et respect des normes de sécurité et environnementales.",
                },
                {
                  step: "4",
                  title: "Traçabilité",
                  description:
                    "Remise de tous les documents nécessaires : bordereaux de suivi, certificats de recyclage, factures détaillées.",
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

      <CTASection />
      <Footer />
    </main>
  );
}
