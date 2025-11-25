"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BeforeAfterImage } from "./before-after-image";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    color: "bg-green-900 border-2 border-green-900",
    link: "/services/particuliers",
    isDark: true,
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
    color: "bg-white border-2 border-green-900",
    link: "/services/diogene",
    isDark: false,
  },
  {
    beforeImage: "/pro-1-1.png",
    afterImage: "/pro-1.png",
    title: "Professionnels",
    description:
      "Débarras de locaux commerciaux, bureaux, entrepôts. Solutions adaptées aux entreprises et collectivités.",
    features: ["Locaux commerciaux", "Bureaux", "Entrepôts", "Collectivités"],
    color: "bg-green-900 border-2 border-green-900",
    link: "/services/professionnels",
    isDark: true,
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
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
              <Image
                src="/logo-2.svg"
                alt="Ò Débarras"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
              Des solutions pour tous
            </h2>
          </div>
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
                  className={`overflow-hidden h-full hover:shadow-2xl transition-all duration-300 ${service.color} relative group rounded-2xl p-0`}
                >
                  {/* Image Section - Full width at top */}
                  <div className="overflow-hidden rounded-t-2xl">
                    <BeforeAfterImage
                      beforeImage={service.beforeImage}
                      afterImage={service.afterImage}
                      alt={service.title}
                    />
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Content Section */}
                    <div className="px-8 py-8 pt-0">
                      <h3
                        className={cn(
                          "text-2xl font-black mb-4",
                          service.isDark ? "text-white" : "text-foreground"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mb-6 leading-relaxed",
                          service.isDark
                            ? "text-white/90"
                            : "text-muted-foreground"
                        )}
                      >
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "flex items-center gap-3 text-sm font-medium",
                              service.isDark ? "text-white" : "text-foreground"
                            )}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant="ghost"
                        className={cn(
                          "w-full group/btn transition-colors duration-200",
                          service.isDark
                            ? "bg-white/10 hover:bg-white/20 text-white"
                            : "bg-primary/10 hover:bg-primary/20"
                        )}
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
