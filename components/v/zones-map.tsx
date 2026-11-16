"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { ZoneData } from "@/lib/v/data";
import { interventions, towns } from "@/lib/v/content";
import { CORSE_H, CORSE_PATH, CORSE_W, projectCorse } from "@/lib/v/corse-map";

const COLORS: Record<string, string> = {
  "cap-corse": "#3d7ea6",
  "pays-bastiais": "#c0533a",
  "castagniccia-casinca": "#7a9a3a",
  "calvi-balagne": "#d19a2a",
  "centre-corse": "#8a5a9e",
  "fiumorbu-castellu": "#2e9a86",
  "ouest-corse": "#d1703c",
  "pays-ajaccien": "#4b6cc1",
  "sartenais-valinco": "#a0784a",
  "sud-corse": "#c4487a",
};

const PALETTE = Object.values(COLORS);

export function ZonesMap({ zones }: { zones: ZoneData[] }) {
  const regions = zones;
  const couleur = (slug: string, i = regions.findIndex((r) => r.slug === slug)) => COLORS[slug] ?? PALETTE[(i < 0 ? 0 : i) % PALETTE.length];
  const communes = regions.flatMap((r) =>
    r.cities.filter((c) => c.lat != null && c.lon != null).map((c) => ({ slug: c.slug, name: c.name, region: r.slug, lat: c.lat as number, lon: c.lon as number })),
  );
  const [sel, setSel] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const region = regions.find((r) => r.slug === sel) ?? null;
  const total = useMemo(() => new Set(regions.flatMap((r) => r.cities.map((c) => c.slug))).size, [regions]);
  const pins = useMemo(() => {
    const seen = new Set<string>();
    return interventions.filter((p) => {
      const k = `${p.lon.toFixed(2)}${p.lat.toFixed(2)}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, []);
  const hovered = communes.find((c) => c.slug === hover);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      {/* Carte */}
      <div className="mx-auto w-full max-w-[30rem] lg:sticky lg:top-24">
        <div className="relative">
          <svg
            viewBox={`-90 -20 ${CORSE_W + 180} ${CORSE_H + 40}`}
            className="h-auto w-full"
            role="img"
            aria-label="Carte de la Corse : nos zones d'intervention et toutes les communes desservies"
          >
            <path d={CORSE_PATH} fill="var(--v-alt)" stroke="var(--v-line)" strokeWidth={2} />
            {communes.map((c) => {
              const { x, y } = projectCorse(c.lon, c.lat);
              const active = !sel || c.region === sel;
              return (
                <g key={c.slug + c.region}>
                  <circle
                    cx={x}
                    cy={y}
                    r={active && sel ? 6 : 4.5}
                    fill={couleur(c.region)}
                    opacity={active ? 1 : 0.18}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r={12}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => setSel(c.region)}
                    onMouseEnter={() => setHover(c.slug)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <title>{c.name}</title>
                  </circle>
                </g>
              );
            })}
            {pins.map((p) => {
              const { x, y } = projectCorse(p.lon, p.lat);
              return <circle key={p.name} cx={x} cy={y} r={9} fill="none" stroke="var(--v-ink)" strokeWidth={2.5} pointerEvents="none" />;
            })}
            {towns.map((t) => {
              const { x, y } = projectCorse(t.lon, t.lat);
              const right = (t.lon > 9.2 && t.name !== "Saint-Florent") || t.name === "Corte";
              return (
                <text
                  key={t.name}
                  x={right ? x + 12 : x - 12}
                  y={y + 6}
                  textAnchor={right ? "start" : "end"}
                  fontSize="18"
                  fontWeight="700"
                  fill="var(--v-ink)"
                  stroke="var(--v-bg)"
                  strokeWidth="5"
                  paintOrder="stroke"
                  pointerEvents="none"
                >
                  {t.name}
                </text>
              );
            })}
          </svg>
          {hovered ? (
            <p className="pointer-events-none absolute left-2 top-2 rounded-md bg-[var(--v-bg)] px-3 py-1.5 text-sm font-semibold shadow ring-1 ring-[var(--v-line)]">
              {hovered.name}
            </p>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--v-muted)]">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[var(--v-muted)]" /> {total} communes desservies</span>
          <span className="flex items-center gap-2"><span className="h-3.5 w-3.5 rounded-full border-2 border-[var(--v-ink)]" /> Chantiers publiés</span>
        </div>
      </div>

      {/* Zones et communes */}
      <div>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="Zones d'intervention">
          <li className="sm:col-span-2">
            <button
              type="button"
              onClick={() => setSel(null)}
              aria-pressed={!sel}
              className={
                "flex w-full items-center justify-between rounded-[calc(var(--v-radius)*0.7)] border px-4 py-3 text-left font-semibold transition-colors " +
                (!sel ? "border-[var(--v-ink)] bg-[var(--v-alt)]" : "border-[var(--v-line)] hover:border-[var(--v-ink)]")
              }
            >
              Toute la Corse <span className="text-sm font-normal text-[var(--v-muted)]">{total} communes</span>
            </button>
          </li>
          {regions.map((r) => (
            <li key={r.slug}>
              <button
                type="button"
                onClick={() => setSel(sel === r.slug ? null : r.slug)}
                aria-pressed={sel === r.slug}
                className={
                  "flex w-full items-center gap-3 rounded-[calc(var(--v-radius)*0.7)] border px-4 py-3 text-left transition-colors " +
                  (sel === r.slug ? "border-[var(--v-ink)] bg-[var(--v-alt)]" : "border-[var(--v-line)] hover:border-[var(--v-ink)]")
                }
              >
                <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ background: couleur(r.slug) }} />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-tight">{r.name}</span>
                  <span className="block text-sm italic text-[var(--v-muted)]">{r.corse}</span>
                </span>
                <span className="text-sm text-[var(--v-muted)]">{r.cities.length}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-[var(--v-radius)] border border-[var(--v-line)] p-5">
          {region ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <span className="h-3.5 w-3.5 rounded-full" style={{ background: couleur(region.slug) }} />
                  {region.name} · {region.cities.length} communes
                </h3>
                <Link href={`/zones/${region.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--v-brand)] hover:underline">
                  Voir la zone <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <ul className="mt-4 columns-2 gap-4 text-[0.95rem] sm:columns-3">
                {region.cities.map((c) => (
                  <li key={c.slug} className="break-inside-avoid py-1">
                    <Link href={`/zones/villes/${c.slug}`} className="hover:underline">{c.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="flex items-start gap-3 text-[var(--v-muted)]">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--v-accent)]" aria-hidden />
              Choisissez une zone (ou touchez un point sur la carte) pour voir toutes ses communes. Nous intervenons dans chacune d'elles, même dans les villages isolés.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
