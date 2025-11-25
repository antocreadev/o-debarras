"use client";

import { AnimatedSection } from "./animated-section";
import { Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FacebookSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Réseaux Sociaux
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Facebook className="w-10 h-10 text-[#1877F2]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              Suivez-nous sur Facebook
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Retrouvez nos dernières réalisations, nos actualités et nos
              conseils sur notre page Facebook officielle.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                href="https://www.facebook.com/people/%C3%B2-d%C3%A9barras/61580426932164/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Rejoindre la communauté
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
