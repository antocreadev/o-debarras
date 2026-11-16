import type { Metadata } from "next";
import { VHeader } from "@/components/v/header";
import { getSiteData } from "@/lib/v/data";
import { HeroVideo, ProofBar } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

export const metadata: Metadata = {
  title: "Ò Débarras · Version 2",
  robots: { index: false, follow: false },
};

export const revalidate = 300;

export default async function Version2() {
  const site = await getSiteData();
  return (
    <div data-v="2" className="vsite pb-20 md:pb-0" style={{ ["--v-font-head" as string]: "'Sora'", ["--v-font-body" as string]: "'Inter'" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" precedence="default" />
      <VHeader overlay phone={site.phone} phoneHref={site.phoneHref} />
      <main>
        <HeroVideo />
        <ProofBar dark />
        <Services />
        <Process dark />
        <Realisations />
        <Reviews />
        <Audiences />
        <Engagement />
        <Zones />
        <Social />
        <ContactBand />
      </main>
      <VFooter />
      <MobileCallBar />
    </div>
  );
}
