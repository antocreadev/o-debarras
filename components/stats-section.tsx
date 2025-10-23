"use client";

import { StatsCounter } from "./stats-counter";
import { AnimatedSection } from "./animated-section";
import { Clock, Users, Truck, Award } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ò Débarras en chiffres
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Des années d'expérience au service de la Corse
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 text-white gap-8">
          <StatsCounter
            end={5}
            suffix="+"
            label="Années d'expérience"
            icon={<Award />}
          />
          {/* <StatsCounter end={500} suffix="+" label="Clients satisfaits" icon={<Users />} /> */}
          <StatsCounter
            end={100}
            suffix="+"
            label="Interventions réalisées"
            icon={<Truck />}
          />
          <StatsCounter
            end={24}
            suffix="h"
            label="Disponibilité"
            icon={<Clock />}
          />
        </div>
      </div>
    </section>
  );
}
