import type { Metadata } from "next";
import { VHeader } from "@/components/v/header";
import { HeroSplit } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

export const metadata: Metadata = {
  title: "Ò Débarras · Version 4",
  robots: { index: false, follow: false },
};

export default function Version4() {
  return (
    <div data-v="4" className="vsite pb-20 md:pb-0" style={{ ["--v-font-head" as string]: "'Archivo'", ["--v-font-body" as string]: "'Archivo'" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap" precedence="default" />
      <VHeader />
      <main>
        <HeroSplit title="Débarras en Corse. Rapide, propre, partout." badge="Basés à Bastia, intervention dans toute l'île" />
        <Realisations />
        <Services />
        <Process />
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
