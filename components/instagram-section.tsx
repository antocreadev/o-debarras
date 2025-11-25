"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { AnimatedSection } from "./animated-section";

export function InstagramSection() {
  useEffect(() => {
    // Charger le script embed Instagram
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Retraiter les embeds si le script est déjà chargé
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Nos Dernières Activités sur Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Suivez nos interventions et découvrez notre travail au quotidien
          </p>
        </AnimatedSection>

        {/* Grille Instagram Embed - Affiche automatiquement les derniers posts */}
        <AnimatedSection delay={0.2} className="max-w-5xl mx-auto mb-8">
          <div className="instagram-feed-wrapper">
            {/* Widget Instagram avec plusieurs posts récents */}
            <iframe
              src="https://www.instagram.com/odebarras/embed"
              className="w-full rounded-lg shadow-lg"
              style={{
                minHeight: "600px",
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              title="Instagram Feed - Ò Débarras"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent hover:bg-primary/10 transition-colors duration-200"
            asChild
          >
            <a
              href="https://www.instagram.com/odebarras/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Suivez-nous sur Instagram
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Déclaration TypeScript pour le script Instagram
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
