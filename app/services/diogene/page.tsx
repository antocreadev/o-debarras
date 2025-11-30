import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Shield,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { StructuredDataComponent } from "@/components/structured-data-component";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/seo-utils";

const features = [
  {
    icon: Heart,
    title: "Accompagnement personnalisé",
    description:
      "Une approche humaine et bienveillante adaptée à chaque situation.",
  },
  {
    icon: Shield,
    title: "Discrétion absolue",
    description: "Intervention discrète et respectueuse de la vie privée.",
  },
  {
    icon: Users,
    title: "Équipe formée",
    description: "Professionnels spécialement formés aux situations sensibles.",
  },
  {
    icon: Award,
    title: "Mandataires judiciaires",
    description: "Collaboration avec les services sociaux et mandataires.",
  },
];

export const metadata: Metadata = {
  title: "Syndrome de Diogène Corse | Intervention Spécialisée Discrète",
  description:
    "Intervention spécialisée syndrome de Diogène et syllogomanie en Corse. Équipe formée, discrétion absolue, accompagnement respectueux.",
  keywords: [
    "syndrome de Diogène Corse",
    "syllogomanie Corse",
    "débarras Diogène",
    "nettoyage insalubrité Corse",
    "accumulation compulsive",
    "intervention Diogène discrète",
    "débarras situations complexes",
    "accompagnement psychologique débarras",
    "services sociaux débarras",
    "mandataires judiciaires Corse",
    "débarras Diogène Ajaccio",
    "débarras Diogène Bastia",
  ],
  authors: [{ name: "Ò Débarras" }],
  creator: "Ò Débarras",
  publisher: "Ò Débarras",
  openGraph: {
    title: "Syndrome de Diogène Corse | Ò Débarras",
    description:
      "Intervention spécialisée et discrète pour syndrome de Diogène en Corse. Équipe formée et sensibilisée.",
    url: "https://www.odebarras-corse.fr/services/diogene",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Ò Débarras - Intervention Syndrome de Diogène en Corse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syndrome de Diogène Corse | Ò Débarras",
    description:
      "Intervention spécialisée et discrète pour syndrome de Diogène en Corse.",
    images: ["/logo-2.png"],
  },
  alternates: {
    canonical: "/services/diogene",
  },
};

export default function DiogenePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Syndrome de Diogène", url: "/services/diogene" },
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Intervention Syndrome de Diogène et Syllogomanie",
    description:
      "Intervention spécialisée pour syndrome de Diogène et syllogomanie en Corse. Équipe formée, discrétion absolue, accompagnement respectueux.",
    url: "/services/diogene",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Qu'est-ce que le syndrome de Diogène ?",
      answer:
        "Le syndrome de Diogène est un trouble comportemental caractérisé par une accumulation excessive d'objets et un défaut d'hygiène. Notre équipe est formée pour intervenir avec discrétion et respect dans ces situations complexes.",
    },
    {
      question: "Comment se déroule une intervention Diogène ?",
      answer:
        "Notre intervention est progressive et respectueuse. Nous travaillons en collaboration avec les services sociaux et mandataires judiciaires. La discrétion absolue est garantie.",
    },
    {
      question: "Intervenez-vous dans toute la Corse ?",
      answer:
        "Oui, nous intervenons dans toute la Corse pour les cas de syndrome de Diogène et syllogomanie. Contactez-nous au 07 84 71 73 01 pour une évaluation confidentielle.",
    },
  ]);

  return (
    <>
      <StructuredDataComponent
        data={[breadcrumbSchema, serviceSchema, faqSchema]}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Intervention Spécialisée
                </div>
                <div className="flex items-center justify-center gap-6 mb-6 flex-col md:flex-row">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
                    <Image
                      src="/logo-2.svg"
                      alt="Logo Ò Débarras - Spécialiste Syndrome de Diogène Corse"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                    Syndrome de <span className="text-primary">Diogène</span>
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Intervention spécialisée avec discrétion et respect pour les
                  cas de syndrome de Diogène et syllogomanie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Confidentiel
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6"
                  >
                    <Link href="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Demander un Devis
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Notre Engagement
              </h2>
              <p className="text-xl text-muted-foreground">
                Une approche professionnelle et humaine
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                  Comprendre le Syndrome de Diogène
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Le syndrome de Diogène est un trouble du comportement
                    caractérisé par une accumulation excessive d'objets et un
                    isolement social. Cette situation nécessite une intervention
                    professionnelle et respectueuse.
                  </p>
                  <p>
                    Notre équipe est spécialement formée pour intervenir dans
                    ces situations sensibles. Nous travaillons en étroite
                    collaboration avec les services sociaux, les familles et les
                    mandataires judiciaires pour assurer une prise en charge
                    globale et respectueuse de la personne.
                  </p>
                  <p>
                    Chaque intervention est menée avec une discrétion absolue,
                    dans le respect de la dignité et de l'intimité des personnes
                    concernées. Nous comprenons la complexité émotionnelle de
                    ces situations.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-12">
                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Notre Processus d'Intervention
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <strong className="text-foreground">
                          Évaluation confidentielle :
                        </strong>{" "}
                        Premier contact pour comprendre la situation et établir
                        un plan d'action.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <strong className="text-foreground">
                          Coordination :
                        </strong>{" "}
                        Collaboration avec les services sociaux, familles et
                        professionnels de santé si nécessaire.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                        3
                      </div>
                      <div>
                        <strong className="text-foreground">
                          Intervention respectueuse :
                        </strong>{" "}
                        Débarras progressif et organisé avec tri méticuleux des
                        objets.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                        4
                      </div>
                      <div>
                        <strong className="text-foreground">
                          Nettoyage complet :
                        </strong>{" "}
                        Remise en état du logement avec nettoyage approfondi et
                        désinfection.
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mt-12">
                <div className="bg-card border-2 border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Confidentialité & Respect
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous garantissons une discrétion totale lors de nos
                    interventions. Notre équipe travaille en tenue discrète et
                    utilise des véhicules banalisés. Chaque membre de notre
                    équipe est tenu au secret professionnel et formé à la
                    gestion de situations sensibles.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Nos Interventions
              </h2>
              <p className="text-xl text-muted-foreground">
                Exemples d'interventions menées avec discrétion et
                professionnalisme
              </p>
            </AnimatedSection>

            <div className="grid gap-12 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    Intervention spécialisée
                  </h3>
                  <BeforeAfterSlider
                    beforeImage="/diogene-1-1.png"
                    afterImage="/diogene-1.png"
                  />
                  <BeforeAfterSlider
                    beforeImage="/dio-avant.jpg"
                    afterImage="/dio-apres.jpg"
                  />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/realisations">
                  Voir toutes nos réalisations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Besoin d'aide ?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous en toute confidentialité. Nous sommes là pour
                vous aider avec professionnalisme et bienveillance.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Confidentiel
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
