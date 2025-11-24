import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { corsicaRegions } from "@/lib/corsica-data";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return corsicaRegions.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = corsicaRegions.find((r) => r.slug === slug);

  if (!region) {
    return {
      title: "Région non trouvée",
    };
  }

  return {
    title: `Débarras ${region.name} (${region.corseName}) | O'Débarras`,
    description: `Service de débarras professionnel en ${region.name}. ${region.description}. Intervention rapide dans toutes les communes.`,
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = corsicaRegions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/zones"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors mr-2"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Retour aux zones
            </Link>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              {region.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 text-balance">
              Débarras en {region.name}
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6 italic">
              {region.corseName}
            </p>
            <p className="text-xl text-muted-foreground text-pretty mb-4">
              {region.description}
            </p>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Nous intervenons dans toute la Corse, de Bastia à Bonifacio, pour
              tous vos besoins de débarras.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+33784717301">
                  <Phone className="w-5 h-5 mr-2" />
                  Appelez-nous
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Villes Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
              Villes desservies en {region.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {region.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/zones/villes/${city.slug}`}
                  className="group p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {city.corseName}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
