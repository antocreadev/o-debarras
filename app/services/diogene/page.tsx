"use client";

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
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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

export default function DiogenePage() {
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
                  Intervention Spécialisée
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6">
                  Syndrome de <span className="text-primary">Diogène</span>
                </h1>
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
              </motion.div>
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
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
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
