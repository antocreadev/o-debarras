"use client";

import { BeforeAfterSlider } from "./before-after-slider";
import { AnimatedSection } from "./animated-section";

export function BeforeAfterShowcase() {
  const showcases = [
    {
      before: "/images/before-1.png",
      after: "/images/after-1.png",
      title: "Débarras de garage complet",
      description:
        "Transformation complète d'un garage encombré en espace propre et fonctionnel",
    },
    {
      before: "/images/before-2.png",
      after: "/images/after-2.png",
      title: "Nettoyage après sinistre",
      description: "Remise en état d'un local après dégâts des eaux",
    },
    {
      before: "/images/before-3.png",
      after: "/images/after-3.png",
      title: "Débarras d'appartement",
      description: "Vidage complet et nettoyage d'un appartement",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Réalisations
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Avant / Après
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez la transformation spectaculaire de nos interventions.
            Glissez pour comparer.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.08}
              className="space-y-4"
            >
              <div className="gpu-accelerated">
                <BeforeAfterSlider
                  beforeImage={showcase.before}
                  afterImage={showcase.after}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {showcase.title}
                </h3>
                <p className="text-muted-foreground">{showcase.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
