import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/animated-section";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { StructuredDataComponent } from "@/components/structured-data-component";
import {
  generateBreadcrumbSchema,
  generateImageGallerySchema,
} from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "Réalisations Ò Débarras Corse | Photos Avant/Après",
  description:
    "Découvrez nos réalisations de débarras en Corse. Photos avant/après de caves, Diogène, locaux professionnels. Résultats garantis.",
  keywords: [
    "réalisations débarras Corse",
    "photos avant après débarras",
    "exemples débarras Corse",
    "portfolio débarras",
    "transformations débarras",
    "résultats débarras Corse",
    "interventions débarras",
    "photos débarras Ajaccio",
    "photos débarras Bastia",
  ],
  authors: [{ name: "Ò Débarras" }],
  creator: "Ò Débarras",
  publisher: "Ò Débarras",
  openGraph: {
    title: "Réalisations de Débarras en Corse | Ò Débarras",
    description:
      "Découvrez en images nos interventions de débarras réussies dans toute la Corse.",
    url: "https://www.odebarras-corse.fr/realisations",
    siteName: "Ò Débarras",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Ò Débarras - Réalisations de débarras en Corse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réalisations de Débarras en Corse | Ò Débarras",
    description:
      "Découvrez en images nos interventions de débarras réussies en Corse.",
    images: ["/logo-2.png"],
  },
  alternates: {
    canonical: "/realisations",
  },
};

const realisations = [
  {
    id: 1,
    title: "Cave encombrée",
    before: "/cave-1-1.png",
    after: "/cave-1.png",
    description: "Transformation complète d'une cave encombrée",
  },
  {
    id: 2,
    title: "Situation Diogène",
    before: "/diogene-1-1.png",
    after: "/diogene-1.png",
    description: "Intervention spécialisée avec accompagnement",
  },
  {
    id: 3,
    title: "Débarras particulier",
    before: "/particulier-1.png",
    after: "/particulier-1-1.png",
    description: "Nettoyage complet d'un logement",
  },
  {
    id: 4,
    title: "Local professionnel",
    before: "/pro-1-1.png",
    after: "/pro-1.png",
    description: "Débarras de local commercial",
  },
  {
    id: 5,
    title: "Grenier encombré",
    before: "/grenier-1.png",
    after: "/grenier-1-1.png",
    description: "Vidage et nettoyage de grenier",
  },
  {
    id: 6,
    title: "Débarras de garage complet",
    before: "/images/before-1.png",
    after: "/images/after-1.png",
    description:
      "Transformation complète d'un garage encombré en espace propre et fonctionnel",
  },
  {
    id: 7,
    title: "Nettoyage après sinistre",
    before: "/images/before-2.png",
    after: "/images/after-2.png",
    description: "Remise en état d'un local après dégâts des eaux",
  },
  {
    id: 8,
    title: "Débarras d'appartement",
    before: "/images/before-3.png",
    after: "/images/after-3.png",
    description: "Vidage complet et nettoyage d'un appartement",
  },
  {
    id: 9,
    title: "Syndrome de Diogène",
    before: "/dio-avant.jpg",
    after: "/dio-apres.jpg",
    description:
      "Intervention discrète et respectueuse pour syndrome de Diogène",
  },
  {
    id: 10,
    title: "Local Associatif",
    before: "/asso-avant.jpg",
    after: "/asso-apres.jpg",
    description: "Débarras et réorganisation d'un local associatif",
  },
];

export default function RealisationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Réalisations", url: "/realisations" },
  ]);

  const imageGallerySchema = generateImageGallerySchema(
    realisations.map((r) => ({
      url: r.after,
      caption: `${r.title} - ${r.description}`,
    }))
  );

  return (
    <>
      <StructuredDataComponent data={[breadcrumbSchema, imageGallerySchema]} />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-linear-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Portfolio
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6">
                  Nos <span className="text-primary">Réalisations</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Découvrez nos transformations avant/après et la qualité de
                  notre travail
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-16 max-w-7xl mx-auto">
              {realisations.map((realisation, index) => (
                <AnimatedSection key={realisation.id} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                        {realisation.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {realisation.description}
                      </p>
                    </div>
                    <BeforeAfterSlider
                      beforeImage={realisation.before}
                      afterImage={realisation.after}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
