"use client";

import { AnimatedSection } from "./animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function RealisationsPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-left">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  Nos Réalisations
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance">
                  Notre expertise en action
                </h2>
              </div>
            </div>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Découvrez nos interventions de débarras en Corse. Avant/après,
              chaque projet raconte une histoire.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="p-12 md:p-16 bg-gradient-to-br from-primary/5 to-primary/10 border-2 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    Des projets réussis
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Particuliers, professionnels, syndrome de Diogène... Nous
                    avons l'expérience pour gérer tous types de débarras avec
                    professionnalisme et discrétion.
                  </p>
                  <Button size="lg" asChild className="shadow-xl">
                    <Link href="/realisations">
                      Voir toutes nos réalisations
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="relative w-full md:w-1/3 h-64 md:h-80">
                  <Image
                    src="/logo-2.svg"
                    alt="Ò Débarras - Mascotte gorille avec balai"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
