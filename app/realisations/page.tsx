"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { motion } from "framer-motion";

const realisations = [
  {
    id: 1,
    title: "Cave encombrée",
    before: "/cave-1.png",
    after: "/cave-1-1.png",
    description: "Transformation complète d'une cave encombrée",
  },
  {
    id: 2,
    title: "Situation Diogène",
    before: "/diogene-1.png",
    after: "/diogene-1-1.png",
    description: "Intervention spécialisée avec accompagnement",
  },
  {
    id: 3,
    title: "Débarras particulier",
    before: "/particulier-1.png",
    after: "/particulier-1-1.png",
    description: "Nettoyage complet d'un logement",
  },
  {
    id: 4,
    title: "Local professionnel",
    before: "/pro-1.png",
    after: "/pro-1-1.png",
    description: "Débarras de local commercial",
  },
  {
    id: 5,
    title: "Grenier encombré",
    before: "/grenier-1.png",
    after: "/grenier-1-1.png",
    description: "Vidage et nettoyage de grenier",
  },
  {
    id: 6,
    title: "Exemple 1",
    before: "/images/before-1.png",
    after: "/images/after-1.png",
    description: "Débarras complet",
  },
  {
    id: 7,
    title: "Exemple 2",
    before: "/images/before-2.png",
    after: "/images/after-2.png",
    description: "Transformation d'espace",
  },
  {
    id: 8,
    title: "Exemple 3",
    before: "/images/before-3.png",
    after: "/images/after-3.png",
    description: "Nettoyage professionnel",
  },
  {
    id: 9,
    title: "Exemple 4",
    before: "/images/before-4.png",
    after: "/images/after-4.png",
    description: "Vidage complet",
  },
];

export default function RealisationsPage() {
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
                  Portfolio
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6">
                  Nos <span className="text-primary">Réalisations</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Découvrez nos transformations avant/après et la qualité de
                  notre travail
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-16 max-w-7xl mx-auto">
              {realisations.map((realisation, index) => (
                <AnimatedSection key={realisation.id} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                        {realisation.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {realisation.description}
                      </p>
                    </div>
                    <BeforeAfterSlider
                      beforeImage={realisation.before}
                      afterImage={realisation.after}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
