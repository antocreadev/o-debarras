"use client";

import {
  Phone,
  FileText,
  CheckCircle,
  Calendar,
  Truck,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact & Devis",
    description:
      "Contactez-nous par téléphone ou email. Nous établissons un devis gratuit et sans engagement sous 24h",
    icon: Phone,
  },
  {
    number: "02",
    title: "Validation & Planification",
    description:
      "Vous validez le devis et nous planifions ensemble l'intervention selon vos disponibilités",
    icon: Calendar,
  },
  {
    number: "03",
    title: "Intervention & Finalisation",
    description:
      "Notre équipe intervient rapidement, assure le tri, le recyclage et laisse les lieux impeccables",
    icon: Truck,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Notre Processus
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Un processus simple et transparent en 3 étapes pour votre
            tranquillité d'esprit
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Timeline for desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 gpu-accelerated h-full"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-4xl font-black text-primary">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Cards for mobile/tablet */}
          <div className="lg:hidden grid grid-cols-1 gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 gpu-accelerated"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-black text-primary mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
