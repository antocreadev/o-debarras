import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { VHeader } from "@/components/v/header";
import { HeroSplit } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--v-font" });

export const metadata: Metadata = {
  title: "Ò Débarras · Version 1",
  robots: { index: false, follow: false },
};

export default function Version1() {
  return (
    <div data-v="1" className={`vsite ${font.variable} pb-20 md:pb-0`} style={{ ["--v-font-head" as string]: "var(--v-font)", ["--v-font-body" as string]: "var(--v-font)" }}>
      <VHeader />
      <main>
        <HeroSplit />
        <Services />
        <Process />
        <Realisations />
        <Audiences />
        <Reviews />
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
