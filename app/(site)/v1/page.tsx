import type { Metadata } from "next";
import { VHeader } from "@/components/v/header";
import { getSiteData } from "@/lib/v/data";
import { HeroSplit } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

export const metadata: Metadata = {
  title: "Ò Débarras · Version 1",
  robots: { index: false, follow: false },
};

export const revalidate = 300;

export default async function Version1() {
  const site = await getSiteData();
  return (
    <div data-v="1" className="vsite pb-20 md:pb-0" style={{ ["--v-font-head" as string]: "'Plus Jakarta Sans'", ["--v-font-body" as string]: "'Plus Jakarta Sans'" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" precedence="default" />
      <VHeader phone={site.phone} phoneHref={site.phoneHref} />
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
