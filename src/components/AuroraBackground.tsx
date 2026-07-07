export function AuroraBackground() {
  return (
    <>
      <div className="grain-layer" aria-hidden="true" />
      <div className="grid-overlay pointer-events-none fixed inset-0" aria-hidden="true" />
      <div className="aurora-layer" aria-hidden="true">
          <div
            className="aurora-blob animate-aurora-drift"
            style={{
              top: "-12%",
              left: "-8%",
              width: "46vw",
              height: "46vw",
              background:
                "radial-gradient(circle, hsl(var(--glow-1) / 0.55), transparent 65%)",
            }}
          />
          <div
            className="aurora-blob animate-aurora-drift"
            style={{
              top: "6%",
              right: "-12%",
              width: "40vw",
              height: "40vw",
              background:
                "radial-gradient(circle, hsl(var(--glow-2) / 0.5), transparent 65%)",
              animationDelay: "-7s",
            }}
          />
          <div
            className="aurora-blob animate-aurora-drift"
            style={{
              bottom: "-18%",
              left: "28%",
              width: "38vw",
              height: "38vw",
              background:
                "radial-gradient(circle, hsl(var(--accent) / 0.32), transparent 68%)",
              animationDelay: "-14s",
            }}
          />
      </div>
    </>
  );
}
