import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { VHeader } from "@/components/v/header";
import { HeroVideo, ProofBar } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

const head = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--v-head" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--v-body" });

export const metadata: Metadata = {
  title: "Ò Débarras · Version 2",
  robots: { index: false, follow: false },
};

export default function Version2() {
  return (
    <div data-v="2" className={`vsite ${head.variable} ${body.variable} pb-20 md:pb-0`} style={{ ["--v-font-head" as string]: "var(--v-head)", ["--v-font-body" as string]: "var(--v-body)" }}>
      <VHeader overlay />
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
