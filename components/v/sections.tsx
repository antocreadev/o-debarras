import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Instagram, Facebook, Mail, MapPin, Phone, Star } from "lucide-react";
import {
  audiences,
  chantiers,
  contact,
  engagement,
  instagramPosts,
  interventions,
  regions,
  reviewCount,
  reviews,
  services,
  steps,
  towns,
} from "@/lib/v/content";
import { CORSE_H, CORSE_PATH, CORSE_W, projectCorse } from "@/lib/v/corse-map";

/* ---------- Petits éléments ---------- */

export function SectionTitle({ kicker, title, text, center }: { kicker?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker ? <p className="mb-3 text-sm font-semibold text-[var(--v-accent)]">{kicker}</p> : null}
      <h2 className="text-[2rem] font-bold leading-[1.1] sm:text-[2.6rem]">{title}</h2>
      {text ? <p className="mt-4 text-[1.0625rem] leading-relaxed text-[var(--v-muted)]">{text}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={
        "inline-flex h-12 items-center justify-center gap-2 rounded-[calc(var(--v-radius)*0.6)] px-6 text-[0.98rem] font-semibold transition-opacity hover:opacity-90 " +
        (light ? "bg-white text-[var(--v-brand)]" : "bg-[var(--v-brand)] text-[var(--v-brand-ink)]")
      }
    >
      {children}
    </a>
  );
}

export function GhostButton({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={
        "inline-flex h-12 items-center justify-center gap-2 rounded-[calc(var(--v-radius)*0.6)] border px-6 text-[0.98rem] font-semibold transition-colors " +
        (light ? "border-white/40 text-white hover:bg-white/10" : "border-[var(--v-line)] text-[var(--v-ink)] hover:border-[var(--v-ink)]")
      }
    >
      {children}
    </a>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={"flex gap-0.5 " + className} aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#f4b400] text-[#f4b400]" aria-hidden />
      ))}
    </span>
  );
}

/* ---------- Services ---------- */

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="v-wrap">
        <SectionTitle
          kicker="Nos services"
          title="Des solutions pour tous"
          text="Que vous soyez particulier ou professionnel, nous avons la solution adaptée à votre besoin, partout en Corse."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="flex flex-col overflow-hidden rounded-[var(--v-radius)] border border-[var(--v-line)] bg-[var(--v-bg)]">
              <div className="grid grid-cols-2">
                {[
                  ["Avant", s.avant],
                  ["Après", s.apres],
                ].map(([label, src]) => (
                  <div key={label} className="relative aspect-[3/4]">
                    <Image src={src} alt={`${s.title} : ${label.toLowerCase()} débarras`} fill sizes="(min-width: 768px) 16vw, 50vw" className="object-cover" />
                    <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--v-muted)]">{s.text}</p>
                <ul className="mt-4 space-y-1.5 text-[0.95rem]">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[var(--v-accent)]" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--v-brand)] hover:underline">
                  En savoir plus <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Comment ça marche ---------- */

export function Process({ dark }: { dark?: boolean }) {
  return (
    <section className={(dark ? "bg-[var(--v-brand)] text-white " : "bg-[var(--v-alt)] ") + "py-20 sm:py-28"}>
      <div className="v-wrap">
        <div className={dark ? "[&_p]:text-white/75" : ""}>
          <SectionTitle kicker="Notre processus" title="Comment ça marche ?" text="Un processus simple et transparent en 3 étapes pour votre tranquillité d'esprit." />
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={
                "rounded-[var(--v-radius)] p-7 " +
                (dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-[var(--v-bg)] ring-1 ring-[var(--v-line)]")
              }
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--v-accent)] font-bold text-[var(--v-accent-ink)]">{i + 1}</span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className={"mt-2 leading-relaxed " + (dark ? "text-white/75" : "text-[var(--v-muted)]")}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Réalisations ---------- */

export function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-20 py-20 sm:py-28">
      <div className="v-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Nos réalisations"
            title="Notre expertise en action"
            text="Quelques chantiers récents, avant et après, avec les chiffres publiés sur notre Instagram."
          />
          <GhostButton href="/realisations">
            Toutes nos réalisations <ArrowRight className="h-4 w-4" aria-hidden />
          </GhostButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chantiers.map((c) => (
            <article key={c.slug} className="overflow-hidden rounded-[var(--v-radius)] border border-[var(--v-line)] bg-[var(--v-bg)]">
              <div className="grid grid-cols-2 gap-px bg-[var(--v-line)]">
                {[
                  ["Avant", c.avant],
                  ["Après", c.apres],
                ].map(([label, src]) => (
                  <div key={label} className="relative aspect-[3/4] bg-[var(--v-alt)]">
                    <Image src={src} alt={`${c.lieu} : ${label.toLowerCase()}`} fill sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw" className="object-cover" />
                    <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">{label}</span>
                  </div>
                ))}
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-sm font-medium text-[var(--v-muted)]">
                  <MapPin className="h-4 w-4" aria-hidden /> {c.lieu}
                </p>
                <h3 className="mt-2 text-lg font-bold">{c.titre}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--v-muted)]">{c.texte}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.chiffres.map((x) => (
                    <span key={x} className="rounded-full bg-[var(--v-alt)] px-3 py-1 text-sm font-semibold">{x}</span>
                  ))}
                </div>
                <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--v-brand)] hover:underline">
                  <Instagram className="h-4 w-4" aria-hidden /> Voir la vidéo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- À qui s'adressent nos services ---------- */

export function Audiences() {
  return (
    <section className="bg-[var(--v-alt)] py-20 sm:py-28">
      <div className="v-wrap grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <SectionTitle
            kicker="Pour qui"
            title="À qui s'adressent nos services ?"
            text="Nous mettons notre expertise au service des particuliers comme des professionnels, des collectivités aux administrations, partout en Corse."
          />
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[var(--v-radius)]">
            <Image src="/v/equipe-toit.webp" alt="L'équipe Ò Débarras en tenue de protection sur un chantier à Bastia" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => {
            const inner = (
              <>
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-1 text-[0.95rem] text-[var(--v-muted)]">{a.text}</p>
              </>
            );
            return (
              <li key={a.title}>
                {a.href ? (
                  <Link href={a.href} className="block h-full rounded-[var(--v-radius)] bg-[var(--v-bg)] p-6 ring-1 ring-[var(--v-line)] transition-shadow hover:shadow-md">
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full rounded-[var(--v-radius)] bg-[var(--v-bg)] p-6 ring-1 ring-[var(--v-line)]">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Engagement anti-gaspi ---------- */

export function Engagement() {
  return (
    <section className="py-20 sm:py-28">
      <div className="v-wrap">
        <div className="grid gap-10 rounded-[var(--v-radius)] bg-[var(--v-deep)] p-8 text-white ring-1 ring-white/5 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[var(--v-accent)]">Anti-gaspi</p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.1] sm:text-[2.4rem]">Une seconde vie pour vos objets</h2>
            <blockquote className="mt-6 border-l-2 border-[var(--v-accent)] pl-4 text-lg italic text-white/85">« {engagement.quote} »</blockquote>
          </div>
          <ul className="grid gap-5">
            {engagement.points.map((p) => (
              <li key={p.title} className="rounded-[calc(var(--v-radius)*0.8)] bg-white/[0.07] p-5">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-1 text-white/75">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Avis Google ---------- */

export function Reviews() {
  return (
    <section id="avis" className="scroll-mt-20 bg-[var(--v-alt)] py-20 sm:py-28">
      <div className="v-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle kicker="Témoignages" title="Ce que disent nos clients" />
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">5,0</span>
            <div>
              <Stars />
              <p className="text-sm text-[var(--v-muted)]">{reviewCount} avis Google</p>
            </div>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="flex flex-col rounded-[var(--v-radius)] bg-[var(--v-bg)] p-6 ring-1 ring-[var(--v-line)]">
              <Stars />
              <p className="mt-4 flex-1 leading-relaxed">« {r.description} »</p>
              <p className="mt-5 text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-[var(--v-muted)]">{r.date}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <GhostButton href={contact.googleReviews}>Voir tous les avis sur Google</GhostButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Carte de la Corse ---------- */

export function CorsicaMap() {
  const seen = new Set<string>();
  const pins = interventions.filter((p) => {
    const k = `${p.lon.toFixed(2)}${p.lat.toFixed(2)}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return (
    <svg viewBox={`-100 -20 ${CORSE_W + 200} ${CORSE_H + 40}`} className="h-auto w-full" role="img" aria-label="Carte de la Corse : villes desservies et lieux de nos chantiers">
      <path d={CORSE_PATH} fill="var(--v-map)" />
      {pins.map((p) => {
        const { x, y } = projectCorse(p.lon, p.lat);
        return <circle key={p.name} cx={x} cy={y} r={7} fill="var(--v-accent)" stroke="var(--v-bg)" strokeWidth={2.5} />;
      })}
      {towns.map((t) => {
        const { x, y } = projectCorse(t.lon, t.lat);
        const right = t.lon > 9.2 || ["Bastia", "Corte", "Borgo"].includes(t.name);
        return (
          <g key={t.name}>
            <circle cx={x} cy={y} r={4} fill="#ffffff" />
            <text
              x={right ? x + 11 : x - 11}
              y={y + 6}
              textAnchor={right ? "start" : "end"}
              fontSize="19"
              fontWeight="600"
              fill="var(--v-ink)"
              stroke="var(--v-bg)"
              strokeWidth="5"
              paintOrder="stroke"
            >
              {t.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Zones() {
  return (
    <section id="zones" className="scroll-mt-20 py-20 sm:py-28">
      <div className="v-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="mx-auto w-full max-w-[26rem]">
          <CorsicaMap />
          <div className="mt-4 flex flex-wrap justify-center gap-5 text-sm text-[var(--v-muted)]">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[var(--v-accent)]" /> Nos chantiers récents</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full border border-[var(--v-ink)] bg-white" /> Villes desservies</span>
          </div>
        </div>
        <div>
          <SectionTitle
            kicker="Zone d'intervention"
            title="Intervention dans toute la Corse"
            text="De Bastia à Bonifacio, de Calvi à Porto-Vecchio, nous intervenons sur l'ensemble du territoire corse, y compris dans les villages isolés."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {regions.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/zones/${r.slug}`}
                  className="flex items-center justify-between gap-3 rounded-[calc(var(--v-radius)*0.7)] border border-[var(--v-line)] px-4 py-3 transition-colors hover:border-[var(--v-brand)]"
                >
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-sm italic text-[var(--v-muted)]">{r.corse}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--v-muted)]" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PrimaryButton href="/zones">
              Toutes nos zones d'intervention <ArrowRight className="h-4 w-4" aria-hidden />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Réseaux sociaux ---------- */

export function Social() {
  return (
    <section className="bg-[var(--v-alt)] py-20 sm:py-28">
      <div className="v-wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle kicker="@odebarras" title="Nos dernières interventions" text="Suivez nos chantiers au quotidien sur Instagram et Facebook." />
          <div className="flex gap-3">
            <PrimaryButton href={contact.instagram}>
              <Instagram className="h-4 w-4" aria-hidden /> Instagram
            </PrimaryButton>
            <GhostButton href={contact.facebook}>
              <Facebook className="h-4 w-4" aria-hidden /> Facebook
            </GhostButton>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {instagramPosts.map((p) => (
            <li key={p.id}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden rounded-[calc(var(--v-radius)*0.7)]">
                <Image src={p.image} alt={p.label} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-semibold text-white">{p.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function ContactBand() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="v-wrap">
        <div className="grid gap-10 rounded-[var(--v-radius)] border border-[var(--v-line)] p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-[2rem] font-bold leading-[1.1] sm:text-[2.6rem]">Besoin d'un débarras ?</h2>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--v-muted)]">
              Contactez-nous pour un devis gratuit et sans engagement. Intervention rapide dans toute la Corse.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={contact.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden /> {contact.phone}
              </PrimaryButton>
              <GhostButton href="/contact">Demander un devis</GhostButton>
            </div>
          </div>
          <ul className="space-y-4 text-[1.0625rem]">
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-[var(--v-accent)]" aria-hidden /> {contact.phone}</li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-[var(--v-accent)]" aria-hidden /> {contact.email}</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[var(--v-accent)]" aria-hidden /> Basés à {contact.city}, intervention dans toute la Corse</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pied de page ---------- */

export function VFooter() {
  const cols = [
    { title: "Services", links: services.map((s) => ({ label: s.title, href: s.href })) },
    {
      title: "Secteurs",
      links: [
        { label: "Successions & notaires", href: "/secteurs/successions-notaires" },
        { label: "Agences immobilières", href: "/secteurs/agences-immobilieres" },
        { label: "Mandataires judiciaires", href: "/secteurs/mandataires-judiciaires" },
        { label: "Sinistres & assurances", href: "/secteurs/sinistres-assurances" },
        { label: "Collectivités", href: "/secteurs/collectivites-administrations" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "Réalisations", href: "/realisations" },
        { label: "Nos valeurs", href: "/valeurs" },
        { label: "Zones d'intervention", href: "/zones" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];
  return (
    <footer className="bg-[#111712] text-white">
      <div className="v-wrap grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-xl font-bold">
            <Image src="/logo.svg" alt="" width={28} height={42} className="h-9 w-auto invert" /> Ò DÉBARRAS
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Votre partenaire de confiance pour tous vos besoins de débarras en Corse depuis 2020.
          </p>
          <p className="mt-4 text-sm text-white/80">{contact.phone}<br />{contact.email}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold text-white/50">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/85 hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="v-wrap flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Ò Débarras. Tous droits réservés.</span>
          <span className="flex gap-4"><Link href="/mentions-legales">Mentions légales</Link><Link href="/cgu">CGU</Link></span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Barre d'appel mobile ---------- */

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[var(--v-line)] bg-[var(--v-bg)]/95 p-3 backdrop-blur md:hidden">
      <a href={contact.phoneHref} className="flex h-12 items-center justify-center gap-2 rounded-[calc(var(--v-radius)*0.6)] bg-[var(--v-brand)] font-semibold text-[var(--v-brand-ink)]">
        <Phone className="h-4 w-4" aria-hidden /> Appeler
      </a>
      <a href="/contact" className="flex h-12 items-center justify-center rounded-[calc(var(--v-radius)*0.6)] border border-[var(--v-line)] font-semibold">
        Devis gratuit
      </a>
    </div>
  );
}
