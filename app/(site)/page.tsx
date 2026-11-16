import { ModernHero } from "@/components/modern-hero";
import { StatsSection } from "@/components/stats-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { InstagramSection } from "@/components/instagram-section";
import { FacebookSection } from "@/components/facebook-section";
import { TargetAudienceSection } from "@/components/target-audience-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { StructuredData } from "@/components/structured-data";
import { CorsicaCoverageSection } from "@/components/corsica-coverage-section";
import { RealisationsPreviewSection } from "@/components/realisations-preview-section";
import { getSiteData } from "@/lib/v/data";

export const revalidate = 300;

export default async function Home() {
  const site = await getSiteData();
  const a = site.accueil;
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navigation />
      <ModernHero titre={a.heroTitre} texte={a.heroTexte} boutonDevis={a.boutonDevis} boutonContact={a.boutonContact} phoneHref={site.phoneHref} photo={a.heroPhoto} />
      {/* <StatsSection /> */}
      <ProcessSection titre={a.etapesTitre} texte={a.etapesTexte} etapes={a.etapes} />
      <ServicesSection titre={a.servicesTitre} texte={a.servicesTexte} items={site.services} />
      <RealisationsPreviewSection titre={a.realisationsTitre} texte={a.realisationsTexte} encadreTitre={a.realisationsEncadreTitre} encadreTexte={a.realisationsEncadre} />
      <TargetAudienceSection titre={a.publicsTitre} texte={a.publicsTexte} publics={a.publics} />
      <TestimonialsSection titre={a.avisTitre} texte={a.avisTexte} avis={site.avis} lien={site.googleReviews} />
      <CorsicaCoverageSection titre={a.zonesTitre} texte={a.zonesTexte} zones={site.zones} />
      <FacebookSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
