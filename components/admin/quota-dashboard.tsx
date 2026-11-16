"use client";

import { useCallback, useEffect, useState } from "react";

type Usage = {
  medias: { utilise: number; limite: number; fichiers: number };
  base: { utilise: number; limite: number };
  majLe: string;
};

const ALERTE = 0.8;
const BLOCAGE = 0.95;
const DEV = { nom: "Anthony Menghi", telephone: "07 83 26 75 95" };

function octets(n: number) {
  if (n < 1e3) return `${n} o`;
  if (n < 1e6) return `${(n / 1e3).toFixed(0)} Ko`;
  if (n < 1e9) return `${(n / 1e6).toFixed(1)} Mo`;
  return `${(n / 1e9).toFixed(2)} Go`;
}

function Jauge({ titre, aide, utilise, limite, detail }: { titre: string; aide: string; utilise: number; limite: number; detail?: string }) {
  const ratio = limite ? utilise / limite : 0;
  const pct = Math.min(100, Math.round(ratio * 1000) / 10);
  const etat = ratio >= BLOCAGE ? "plein" : ratio >= ALERTE ? "alerte" : "ok";
  const couleur = etat === "plein" ? "#c62828" : etat === "alerte" ? "#e08a00" : "#2e7d32";
  return (
    <div style={{ border: "1px solid var(--theme-elevation-150)", borderRadius: 10, padding: 18, background: "var(--theme-elevation-0)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
        <h3 style={{ margin: 0, fontSize: 17 }}>{titre}</h3>
        <span style={{ fontWeight: 700, color: couleur }}>
          {octets(utilise)} / {octets(limite)} · {pct} %
        </span>
      </div>
      <div style={{ marginTop: 12, height: 12, borderRadius: 99, background: "var(--theme-elevation-100)", overflow: "hidden" }} aria-hidden>
        <div style={{ width: `${pct}%`, height: "100%", background: couleur, transition: "width .6s ease" }} />
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 13, color: "var(--theme-elevation-600)" }}>
        {aide}
        {detail ? ` ${detail}` : ""}
      </p>
      {etat !== "ok" ? (
        <p style={{ margin: "10px 0 0", fontSize: 14, color: couleur, fontWeight: 600 }}>
          {etat === "plein"
            ? "Limite gratuite atteinte : les nouveaux ajouts sont bloqués."
            : "Attention : vous approchez de la limite gratuite."}{" "}
          Supprimez des éléments inutiles ou envoyez des fichiers plus légers. Pour augmenter la capacité, contactez {DEV.nom} au {DEV.telephone}.
        </p>
      ) : null}
    </div>
  );
}

export function QuotaDashboard() {
  const [usage, setUsage] = useState<Usage | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  const charger = useCallback(async () => {
    try {
      const r = await fetch("/api/quota", { credentials: "include", cache: "no-store" });
      if (!r.ok) throw new Error(String(r.status));
      setUsage(await r.json());
      setErreur(null);
    } catch {
      setErreur("Impossible de lire l'utilisation pour le moment.");
    }
  }, []);

  useEffect(() => {
    charger();
    const t = setInterval(charger, 20_000);
    const onFocus = () => charger();
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(t);
      window.removeEventListener("focus", onFocus);
    };
  }, [charger]);

  return (
    <section style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ margin: 0 }}>Bonjour</h2>
          <p style={{ margin: "6px 0 0", color: "var(--theme-elevation-600)" }}>
            Ajoutez vos chantiers, vos avis et vos photos : le site se met à jour tout seul en moins d'une minute.
          </p>
        </div>
        <button type="button" onClick={charger} className="btn btn--style-secondary btn--size-small" style={{ margin: 0 }}>
          Actualiser
        </button>
      </div>

      <h3 style={{ margin: "26px 0 12px", fontSize: 15, color: "var(--theme-elevation-600)" }}>Espace gratuit utilisé (en temps réel)</h3>
      {erreur ? <p style={{ color: "#c62828" }}>{erreur}</p> : null}
      {usage ? (
        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Jauge
            titre="Photos et vidéos"
            aide="Vercel Blob, offre gratuite. Les photos sont optimisées automatiquement à l'envoi."
            detail={`${usage.medias.fichiers} fichier${usage.medias.fichiers > 1 ? "s" : ""}.`}
            utilise={usage.medias.utilise}
            limite={usage.medias.limite}
          />
          <Jauge titre="Base de données" aide="Neon, offre gratuite. Textes, avis, chantiers et zones." utilise={usage.base.utilise} limite={usage.base.limite} />
        </div>
      ) : !erreur ? (
        <p style={{ color: "var(--theme-elevation-600)" }}>Chargement…</p>
      ) : null}

      <div style={{ marginTop: 14, fontSize: 13, color: "var(--theme-elevation-600)", lineHeight: 1.6 }}>
        <strong>Bon à savoir.</strong> Mise à jour automatique toutes les 20 secondes. L'envoi est bloqué à 95 % de chaque limite
        pour ne jamais payer. Le trafic mensuel des images (10 Go gratuits) n'est pas mesurable ici : il reste largement suffisant
        grâce à l'optimisation automatique. Besoin de plus de place ? Contactez {DEV.nom} au {DEV.telephone}.
        {usage ? ` Dernière mesure : ${new Date(usage.majLe).toLocaleTimeString("fr-FR")}.` : ""}
      </div>
    </section>
  );
}
