import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { VHeader } from "@/components/v/header";
import { HeroEditorial } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

const head = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--v-head" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--v-body" });

export const metadata: Metadata = {
  title: "Ò Débarras · Version 3",
  robots: { index: false, follow: false },
};

export default function Version3() {
  return (
    <div data-v="3" className={`vsite ${head.variable} ${body.variable} pb-20 md:pb-0`} style={{ ["--v-font-head" as string]: "var(--v-head)", ["--v-font-body" as string]: "var(--v-body)" }}>
      <VHeader />
      <main>
        <HeroEditorial />
        <Services />
        <Realisations />
        <Process />
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
