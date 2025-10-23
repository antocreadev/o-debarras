"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie L.",
    location: "Ajaccio",
    rating: 5,
    text: "Service impeccable ! L'équipe a été très professionnelle et discrète pour le débarras de la maison de ma mère. Je recommande vivement.",
  },
  {
    name: "Jean-Pierre M.",
    location: "Bastia",
    rating: 5,
    text: "Intervention rapide et efficace pour notre local commercial. Tarifs transparents et équipe sympathique. Merci !",
  },
  {
    name: "Sophie D.",
    location: "Porto-Vecchio",
    rating: 5,
    text: "Très satisfaite du service. Ponctualité, professionnalisme et respect. Tout était parfait du début à la fin.",
  },
  {
    name: "Antoine R.",
    location: "Corte",
    rating: 5,
    text: "Excellent travail pour le débarras de notre cave. L'équipe a tout géré de A à Z. Je recommande sans hésitation.",
  },
  {
    name: "Isabelle F.",
    location: "Calvi",
    rating: 5,
    text: "Merci pour votre accompagnement dans cette situation difficile. Votre discrétion et votre professionnalisme nous ont beaucoup aidés.",
  },
  {
    name: "Marc B.",
    location: "Propriano",
    rating: 5,
    text: "Service de qualité, devis clair et intervention dans les temps. Parfait pour notre débarras de succession.",
  },
];

export function TestimonialsSection() {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            La satisfaction de nos clients est notre plus belle récompense
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-full"
              >
                <Card className="p-6 border-2 border-border h-full hover:shadow-xl transition-all duration-300 bg-card relative overflow-hidden group">
                  {/* Quote icon decoration */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <Quote className="w-10 h-10 text-primary/30" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i}>
                          <Star className="w-5 h-5 fill-accent text-accent" />
                        </div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author info */}
                    <div className="border-t-2 border-border pt-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
