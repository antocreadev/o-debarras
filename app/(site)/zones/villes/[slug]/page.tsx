import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { allCities } from "@/lib/corsica-data";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);

  if (!city) {
    return {
      title: "Ville non trouvée",
    };
  }

  return {
    title: `Débarras ${city.name} (${city.corseName}) | O'Débarras`,
    description: `Service de débarras professionnel à ${city.name} en Corse. Intervention rapide, devis gratuit. Particuliers et professionnels.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <Link
                href="/zones"
                className="hover:text-primary transition-colors"
              >
                Zones
              </Link>
              <span>/</span>
              <Link
                href={`/zones/${city.regionSlug}`}
                className="hover:text-primary transition-colors"
              >
                {city.region}
              </Link>
              <span>/</span>
              <span className="text-foreground">{city.name}</span>
            </div>

            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              {city.region}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 text-balance">
              Débarras à {city.name}
            </h1>

            <p className="text-2xl text-primary font-semibold mb-6 italic">
              {city.corseName}
            </p>

            <p className="text-xl text-muted-foreground text-pretty mb-4">
              Votre spécialiste du débarras à {city.name}. Intervention rapide,
              service professionnel et tarifs transparents pour particuliers et
              professionnels.
            </p>

            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Nous intervenons dans toute la Corse, de Bastia à Bonifacio, pour
              tous vos besoins de débarras.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+33784717301">
                  <Phone className="w-5 h-5 mr-2" />
                  07 84 71 73 01
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

      <CTASection />

      <Footer />
    </main>
  );
}
