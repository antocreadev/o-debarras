import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";
import { contact, proofs } from "@/lib/v/content";
import { GhostButton, PrimaryButton } from "./sections";

function GoogleBadge({ light }: { light?: boolean }) {
  return (
    <div className={"flex items-center gap-3 " + (light ? "text-white" : "")}>
      <span className="flex gap-0.5" aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#f4b400] text-[#f4b400]" aria-hidden />
        ))}
      </span>
      <span className={"text-sm " + (light ? "text-white/85" : "text-[var(--v-muted)]")}>5,0 · 23 avis Google</span>
    </div>
  );
}

/* V1 : texte à gauche, vidéo réelle de chantiers à droite, bandeau de preuves */
export function HeroSplit() {
  return (
    <section id="top" className="pt-[72px]">
      <div className="v-wrap grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--v-alt)] px-3.5 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-[var(--v-accent)]" /> Débarras professionnel en Corse
          </p>
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] sm:text-[3.6rem] lg:text-[4rem]">
            On vide, on trie, on vous rend des lieux propres.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--v-muted)]">
            Maisons, appartements, caves, successions, locaux professionnels. Intervention rapide, discrète et respectueuse dans toute la Corse.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact">
              Devis gratuit <ArrowRight className="h-4 w-4" aria-hidden />
            </PrimaryButton>
            <GhostButton href={contact.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden /> {contact.phone}
            </GhostButton>
          </div>
          <div className="mt-8">
            <GoogleBadge />
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-[30rem] overflow-hidden rounded-[var(--v-radius)] bg-[var(--v-alt)] shadow-[0_30px_60px_-30px_rgba(22,32,26,0.45)]">
            <video className="h-full w-full object-cover" src="/v/hero-portrait.mp4" poster="/v/hero-portrait.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Extraits de nos chantiers en Corse" />
          </div>
          <div className="absolute -bottom-6 left-0 hidden rounded-[var(--v-radius)] bg-[var(--v-bg)] p-4 shadow-xl ring-1 ring-[var(--v-line)] sm:block lg:-left-8">
            <p className="text-2xl font-extrabold">19 camions</p>
            <p className="text-sm text-[var(--v-muted)]">évacués à Borgo, plus de 200 m³</p>
          </div>
        </div>
      </div>
      <ProofBar />
    </section>
  );
}

export function ProofBar({ dark }: { dark?: boolean }) {
  return (
    <div className={dark ? "bg-[var(--v-brand)] text-white" : "border-y border-[var(--v-line)] bg-[var(--v-alt)]"}>
      <ul className="v-wrap grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {proofs.map((p) => (
          <li key={p.label}>
            <p className="text-2xl font-extrabold sm:text-3xl">{p.value}</p>
            <p className={"text-sm " + (dark ? "text-white/70" : "text-[var(--v-muted)]")}>{p.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* V2 : vidéo plein écran, voile vert, texte blanc */
export function HeroVideo() {
  return (
    <section id="top" className="relative flex min-h-[88svh] items-end overflow-hidden bg-[var(--v-brand)] text-white">
      <video className="absolute inset-0 h-full w-full object-cover" src="/v/hero-paysage.mp4" poster="/v/hero-paysage.jpg" autoPlay muted loop playsInline preload="metadata" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a12]/95 via-[#0f1a12]/60 to-[#0f1a12]/35" />
      <div className="v-wrap relative pb-16 pt-32 sm:pb-24">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--v-accent)]">Débarras · Corse</p>
        <h1 className="max-w-3xl text-[2.6rem] font-bold leading-[1.05] sm:text-[3.8rem] lg:text-[4.6rem]">
          Le débarras en Corse, sans stress et sans surprise.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          De la simple machine à laver au syndrome de Diogène, nous intervenons partout en Corse, rapidement et avec discrétion.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/contact" light>
            Demander un devis gratuit <ArrowRight className="h-4 w-4" aria-hidden />
          </PrimaryButton>
          <GhostButton href={contact.phoneHref} light>
            <Phone className="h-4 w-4" aria-hidden /> {contact.phone}
          </GhostButton>
        </div>
        <div className="mt-8">
          <GoogleBadge light />
        </div>
      </div>
    </section>
  );
}

/* V3 : éditorial classique, grande photo et titre serif */
export function HeroEditorial() {
  return (
    <section id="top" className="pt-[72px]">
      <div className="v-wrap py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <h1 className="text-[2.8rem] leading-[1.02] sm:text-[4rem] lg:text-[5rem]">
            Débarras et vide-maison, partout en Corse.
          </h1>
          <div>
            <p className="text-lg leading-relaxed text-[var(--v-muted)]">
              Ò Débarras intervient chez les particuliers et les professionnels, de Bastia à Bonifacio : tri, évacuation, recyclage et lieux rendus propres.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact">Devis gratuit sous 24 h</PrimaryButton>
              <GhostButton href={contact.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden /> {contact.phone}
              </GhostButton>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-[2fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--v-radius)] sm:aspect-auto sm:min-h-[26rem]">
            <video className="absolute inset-0 h-full w-full object-cover" src="/v/hero-paysage.mp4" poster="/v/hero-paysage.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Extraits de nos chantiers en Corse" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--v-radius)]">
              <Image src="/v/meria-avant.webp" alt="Une maison de Meria, dans le Cap Corse, avant débarras" fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" priority />
              <span className="absolute left-2 top-2 bg-white px-2 py-0.5 text-xs font-semibold text-black">Avant</span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--v-radius)]">
              <Image src="/v/meria-apres.webp" alt="La même maison de Meria après débarras" fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" priority />
              <span className="absolute left-2 top-2 bg-white px-2 py-0.5 text-xs font-semibold text-black">Après</span>
            </div>
          </div>
        </div>
      </div>
      <ProofBar />
    </section>
  );
}
