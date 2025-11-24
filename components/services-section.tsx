"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BeforeAfterImage } from "./before-after-image";

const services = [
  {
    beforeImage: "/particulier-1.png",
    afterImage: "/particulier-1-1.png",
    title: "Particuliers",
    description:
      "Débarras de maisons, appartements, caves, greniers. Nous prenons en charge tous vos encombrants avec professionnalisme.",
    features: [
      "Maisons & Appartements",
      "Caves & Greniers",
      "Garages",
      "Succession",
    ],
    color: "from-blue-500/10 to-blue-600/10",
    link: "/services/particuliers",
  },
  {
    beforeImage: "/diogene-1-1.png",
    afterImage: "/diogene-1.png",
    title: "Syndrome de Diogène",
    description:
      "Intervention spécialisée avec discrétion et respect pour les cas de syndrome de Diogène et syllogomanie.",
    features: [
      "Accompagnement personnalisé",
      "Discrétion absolue",
      "Équipe formée",
      "Mandataires judiciaires",
    ],
    color: "from-rose-500/10 to-rose-600/10",
    link: "/services/diogene",
  },
  {
    beforeImage: "/pro-1-1.png",
    afterImage: "/pro-1.png",
    title: "Professionnels",
    description:
      "Débarras de locaux commerciaux, bureaux, entrepôts. Solutions adaptées aux entreprises et collectivités.",
    features: ["Locaux commerciaux", "Bureaux", "Entrepôts", "Collectivités"],
    color: "from-primary/10 to-primary/20",
    link: "/services/professionnels",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Des solutions pour tous
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Que vous soyez particulier ou professionnel, nous avons la solution
            adaptée à votre besoin
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-full"
              >
                <Card
                  className={`overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 border-border bg-gradient-to-br ${service.color} relative group`}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Image Section */}
                    <BeforeAfterImage
                      beforeImage={service.beforeImage}
                      afterImage={service.afterImage}
                      alt={service.title}
                    />

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-sm text-foreground font-medium"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant="ghost"
                        className="w-full group/btn hover:bg-primary/10 transition-colors duration-200"
                      >
                        <Link href={service.link}>
                          En savoir plus
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
          >
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
