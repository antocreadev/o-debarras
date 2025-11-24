"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  Home,
  Archive,
  Warehouse,
  Users,
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
    icon: Home,
    title: "Maisons & Appartements",
    description:
      "Débarras complet de votre logement, avec tri et évacuation de tous les encombrants.",
  },
  {
    icon: Archive,
    title: "Caves & Greniers",
    description: "Nettoyage et vidage de vos espaces de stockage encombrés.",
  },
  {
    icon: Warehouse,
    title: "Garages",
    description:
      "Libérez de l'espace en évacuant tout ce qui encombre votre garage.",
  },
  {
    icon: Users,
    title: "Succession",
    description:
      "Accompagnement professionnel lors du débarras d'une succession.",
  },
];

export default function ParticuliersPage() {
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
                  Services Particuliers
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6">
                  Débarras pour{" "}
                  <span className="text-primary">Particuliers</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Nous prenons en charge tous vos encombrants avec
                  professionnalisme. Débarras de maisons, appartements, caves,
                  greniers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Devis Gratuit
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
                Nos Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Des solutions adaptées à tous vos besoins de débarras
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
                  Notre Approche
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Que vous ayez besoin de vider une maison entière, de
                    débarrasser une cave encombrée ou de libérer un grenier,
                    notre équipe professionnelle intervient rapidement et
                    efficacement.
                  </p>
                  <p>
                    Nous comprenons que chaque situation est unique. C'est
                    pourquoi nous adaptons notre intervention à vos besoins
                    spécifiques, tout en respectant vos biens et votre espace.
                  </p>
                  <p>
                    Notre service comprend le tri, l'évacuation, et le recyclage
                    dans le respect de l'environnement. Nous nous occupons de
                    tout, de A à Z.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="mt-12">
                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Pourquoi nous choisir ?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>Devis gratuit et sans engagement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>Intervention rapide dans toute la Corse</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>Respect de l'environnement et recyclage</span>
                    </li>
                  </ul>
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
                Nos Réalisations
              </h2>
              <p className="text-xl text-muted-foreground">
                Découvrez quelques exemples de nos interventions
              </p>
            </AnimatedSection>

            <div className="grid gap-12 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    Grenier encombré
                  </h3>
                  <BeforeAfterSlider
                    beforeImage="/grenier-1.png"
                    afterImage="/grenier-1-1.png"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    Cave transformée
                  </h3>
                  <BeforeAfterSlider
                    beforeImage="/cave-1-1.png"
                    afterImage="/cave-1.png"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    Logement nettoyé
                  </h3>
                  <BeforeAfterSlider
                    beforeImage="/particulier-1.png"
                    afterImage="/particulier-1-1.png"
                  />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.4} className="text-center mt-12">
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
                Besoin d'un débarras ?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour un devis gratuit et sans
                engagement
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Obtenir un Devis
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
