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

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navigation />
      <ModernHero />
      {/* <StatsSection /> */}
      <ProcessSection />
      <ServicesSection />
      <RealisationsPreviewSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <CorsicaCoverageSection />
      <FacebookSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
