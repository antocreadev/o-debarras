"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { contact, nav } from "@/lib/v/content";

/** En-tête classique. `overlay` : transparent sur la vidéo d'ouverture, puis plein au défilement. */
export function VHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clear = overlay && !scrolled && !open;

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (clear ? "bg-transparent text-white" : "border-b border-[var(--v-line)] bg-[var(--v-bg)]/95 text-[var(--v-ink)] backdrop-blur")
      }
    >
      <div className="v-wrap flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Ò Débarras, haut de page">
          <Image src="/logo.svg" alt="" width={30} height={45} className={"h-10 w-auto " + (clear ? "invert" : "v-logo")} priority />
          <span className="text-lg font-extrabold tracking-tight">Ò DÉBARRAS</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.95rem] font-medium opacity-85 hover:opacity-100">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className={
              "hidden h-11 items-center gap-2 rounded-[calc(var(--v-radius)*0.6)] px-4 text-[0.95rem] font-semibold sm:inline-flex " +
              (clear ? "bg-white text-[#223325]" : "bg-[var(--v-brand)] text-[var(--v-brand-ink)]")
            }
          >
            <Phone className="h-4 w-4" aria-hidden /> {contact.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[var(--v-line)] bg-[var(--v-bg)] lg:hidden" aria-label="Navigation mobile">
          <ul className="v-wrap py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-[var(--v-line)] py-4 text-lg font-semibold last:border-0">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
