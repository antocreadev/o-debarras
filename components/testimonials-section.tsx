"use client";

import { AnimatedSection } from "./animated-section";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export function TestimonialsSection() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Charger le script uniquement côté client pour éviter les problèmes d'hydratation
    if (!scriptLoaded.current) {
      const script = document.createElement("script");
      script.src = "https://widget.taggbox.com/embed.min.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      scriptLoaded.current = true;

      return () => {
        // Nettoyage si nécessaire
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Témoignages
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance flex items-center justify-center gap-3">
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Avis Google
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Découvrez les retours de nos clients sur Google
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-border bg-card">
            {/* Widget Taggbox pour les avis Google */}
            <div
              className="taggbox"
              style={{ width: "100%", overflow: "auto" }}
              data-widget-id="305648"
              data-website="1"
            />
          </div>

          {/* Bouton pour voir tous les avis */}
          <div className="text-center mt-8">
            <a
              href="https://share.google/9YV6aX2d34jUUCAcZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Voir tous nos avis sur Google
              <Star className="w-5 h-5 fill-current" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
