/* eslint-disable @next/next/no-img-element */
"use client";

/** Encadré « Où ça apparaît sur le site » : capture de la section + lien. */
export function OuCaApparait({ image, texte, lien = "/" }: { image: string; texte: string; lien?: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 260px) minmax(0, 1fr)",
        gap: 18,
        alignItems: "center",
        padding: 16,
        marginBottom: 24,
        borderRadius: 12,
        background: "var(--theme-elevation-50)",
        border: "1px solid var(--theme-elevation-150)",
      }}
      className="ou-ca-apparait"
    >
      <a href={lien} target="_blank" rel="noopener noreferrer" style={{ display: "block", borderRadius: 8, overflow: "hidden", border: "3px solid #e0a32e" }}>
        <img src={image} alt="Aperçu de l'endroit modifié sur le site" style={{ display: "block", width: "100%", height: "auto" }} />
      </a>
      <div>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#b07a12" }}>Où ça apparaît sur le site</p>
        <p style={{ margin: "6px 0 12px", fontSize: 15, lineHeight: 1.5 }}>{texte}</p>
        <a
          href={lien}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--style-secondary btn--size-small"
          style={{ margin: 0, display: "inline-flex", textDecoration: "none" }}
        >
          Voir sur le site ↗
        </a>
      </div>
      <style>{`@media (max-width: 640px){ .ou-ca-apparait{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
