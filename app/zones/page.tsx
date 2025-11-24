import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { corsicaRegions, allCities } from "@/lib/corsica-data";

export const metadata: Metadata = {
  title: "Zones d'Intervention en Corse | O'Débarras",
  description:
    "O'Débarras intervient dans toute la Corse pour vos besoins de débarras. Découvrez toutes nos zones d'intervention.",
};

export default function ZonesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              Nos Zones d'Intervention
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
              Présents partout en Corse
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              Du Cap Corse à Bonifacio, de la Balagne à la Côte Orientale, nous
              intervenons sur l'ensemble du territoire insulaire.
            </p>
          </div>
        </div>
      </section>

      {/* Régions Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">
              Nos Territoires d'Intervention
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {corsicaRegions.map((region) => (
                <Card
                  key={region.slug}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <Link href={`/zones/${region.slug}`} className="group block">
                    <div className="flex items-start justify-between mb-4">
                      <MapPin className="w-6 h-6 text-primary shrink-0" />
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      {region.corseName}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {region.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.slice(0, 3).map((city) => (
                        <span
                          key={city.slug}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {city.name}
                        </span>
                      ))}
                      {region.cities.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{region.cities.length - 3}
                        </span>
                      )}
                    </div>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Principales Villes */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
                Principales Villes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/zones/villes/${city.slug}`}
                    className="group p-4 bg-muted/50 rounded-lg hover:bg-primary/10 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/30"
                  >
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-xs text-muted-foreground italic">
                      {city.corseName}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
              Une question sur notre zone d'intervention ?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contactez-nous pour savoir si nous intervenons dans votre commune
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+33784717301">
                  <Phone className="w-5 h-5 mr-2" />
                  07 84 71 73 01
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:odebarras2b@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
