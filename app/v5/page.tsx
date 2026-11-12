import type { Metadata } from "next";
import { VHeader } from "@/components/v/header";
import { HeroBrand } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

export const metadata: Metadata = {
  title: "Ò Débarras · Version 5",
  robots: { index: false, follow: false },
};

export default function Version5() {
  return (
    <div data-v="5" className="vsite pb-20 md:pb-0" style={{ ["--v-font-head" as string]: "'Montserrat'", ["--v-font-body" as string]: "'Montserrat'" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" precedence="default" />
      <VHeader />
      <main>
        <HeroBrand />
        <Process />
        <Services />
        <Realisations />
        <Audiences />
        <Reviews />
        <Zones />
        <Engagement />
        <Social />
        <ContactBand />
      </main>
      <VFooter />
      <MobileCallBar />
    </div>
  );
}
