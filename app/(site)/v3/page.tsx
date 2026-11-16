import type { Metadata } from "next";
import { VHeader } from "@/components/v/header";
import { getSiteData } from "@/lib/v/data";
import { HeroEditorial } from "@/components/v/heroes";
import { Audiences, ContactBand, Engagement, MobileCallBar, Process, Realisations, Reviews, Services, Social, VFooter, Zones } from "@/components/v/sections";

export const metadata: Metadata = {
  title: "Ò Débarras · Version 3",
  robots: { index: false, follow: false },
};

export const revalidate = 300;

export default async function Version3() {
  const site = await getSiteData();
  return (
    <div data-v="3" className="vsite pb-20 md:pb-0" style={{ ["--v-font-head" as string]: "'DM Serif Display'", ["--v-font-body" as string]: "'DM Sans'" }}>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap" precedence="default" />
      <VHeader phone={site.phone} phoneHref={site.phoneHref} />
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
