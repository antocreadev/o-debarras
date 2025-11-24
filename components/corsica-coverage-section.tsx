"use client";

import { AnimatedSection } from "./animated-section";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { corsicaRegions } from "@/lib/corsica-data";
import { Button } from "@/components/ui/button";

export function CorsicaCoverageSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image de la Corse */}
          <AnimatedSection>
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/corse.png"
                alt="Carte de la Corse"
                fill
                className="object-contain"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Contenu */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Notre Zone d'Intervention
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance">
                Intervention dans toute la Corse
              </h2>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                De Bastia à Bonifacio, de Calvi à Porto-Vecchio, nous
                intervenons sur l'ensemble du territoire corse pour tous vos
                besoins de débarras.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {corsicaRegions.map((region, index) => (
                  <Link
                    key={region.slug}
                    href={`/zones/${region.slug}`}
                    className="group"
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {region.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">
                            {region.corseName}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="shadow-xl">
                  <Link href="/zones">
                    Voir toutes nos zones d'intervention
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
