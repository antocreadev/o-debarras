/* eslint-disable @next/next/no-img-element */
export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img src="/logo.svg" alt="" width={34} height={50} style={{ height: 50, width: "auto" }} />
      <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>Ò DÉBARRAS</span>
    </div>
  );
}

export function Icon() {
  return <img src="/logo.svg" alt="Ò Débarras" width={18} height={27} style={{ height: 27, width: "auto" }} />;
}
