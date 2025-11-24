"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  Building2,
  Briefcase,
  Warehouse,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const services = [
  {
    icon: Building2,
    title: "Locaux commerciaux",
    description:
      "Débarras de boutiques, restaurants, hôtels et autres commerces.",
  },
  {
    icon: Briefcase,
    title: "Bureaux",
    description:
      "Évacuation de mobilier et équipements de bureaux professionnels.",
  },
  {
    icon: Warehouse,
    title: "Entrepôts",
    description:
      "Vidage et nettoyage d'entrepôts industriels et zones de stockage.",
  },
  {
    icon: Landmark,
    title: "Collectivités",
    description:
      "Services adaptés aux administrations et collectivités locales.",
  },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Services Professionnels
                </div>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                    Débarras <span className="text-primary">Professionnels</span>
                  </h1>
                  <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
                    <Image
                      src="/logo-2.svg"
                      alt="Ò Débarras"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Solutions adaptées aux entreprises et collectivités. Débarras
                  de locaux commerciaux, bureaux, entrepôts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Devis Professionnel
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
                      Nous Contacter
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Nos Services Professionnels
              </h2>
              <p className="text-xl text-muted-foreground">
                Des solutions sur mesure pour chaque type d'activité
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                  Partenaire de vos Projets Professionnels
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nous accompagnons les entreprises, commerces et
                    collectivités dans leurs projets de débarras et de
                    réaménagement. Que ce soit pour une fermeture, un
                    déménagement, une rénovation ou un simple besoin de libérer
                    de l'espace, nous proposons des solutions professionnelles
                    adaptées à votre activité.
                  </p>
                  <p>
                    Notre équipe est rodée aux contraintes professionnelles :
                    respect des délais, intervention en dehors des heures
                    d'ouverture si nécessaire, discrétion et efficacité maximale
                    pour minimiser l'impact sur votre activité.
                  </p>
                  <p>
                    Nous travaillons régulièrement avec des agences
                    immobilières, des administrateurs de biens, des notaires et
                    des mandataires judiciaires pour des missions de débarras de
                    locaux professionnels.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-12">
                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Avantages pour les Professionnels
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>
                        Intervention rapide et planifiée selon vos contraintes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>
                        Devis détaillé et transparent adapté aux professionnels
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>
                        Possibilité d'intervention en dehors des heures
                        d'ouverture
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>
                        Assurance responsabilité civile professionnelle
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>
                        Facturation avec mention légale pour déduction fiscale
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mt-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border-2 border-border rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🏢 Entreprises & Commerces
                    </h3>
                    <p className="text-muted-foreground">
                      Fermeture de magasin, rénovation, changement d'activité :
                      nous gérons l'évacuation complète de vos locaux
                      professionnels.
                    </p>
                  </div>
                  <div className="bg-card border-2 border-border rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      🏛️ Collectivités
                    </h3>
                    <p className="text-muted-foreground">
                      Services adaptés aux mairies, écoles, hôpitaux et autres
                      établissements publics avec respect des procédures
                      administratives.
                    </p>
                  </div>
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
                Nos Réalisations Professionnelles
              </h2>
              <p className="text-xl text-muted-foreground">
                Découvrez quelques exemples de nos interventions en milieu
                professionnel
              </p>
            </AnimatedSection>

            <div className="grid gap-12 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    Local professionnel
                  </h3>
                  <BeforeAfterSlider
                    beforeImage="/pro-1-1.png"
                    afterImage="/pro-1.png"
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
                Projet de débarras professionnel ?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis
                adapté
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Devis Professionnel
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
