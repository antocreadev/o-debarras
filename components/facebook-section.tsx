"use client";

import { AnimatedSection } from "./animated-section";
import { Facebook } from "lucide-react";

export function FacebookSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Suivez-nous
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
            <Facebook className="w-10 h-10 text-[#1877F2]" />
            Nos dernières actualités sur Facebook
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Restez informé de nos interventions et suivez notre actualité sur
            Facebook
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-border bg-card">
            <iframe
              src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25615438"
              width="100%"
              height="1000"
              className="w-full"
              title="Posts Facebook Ò Débarras"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
