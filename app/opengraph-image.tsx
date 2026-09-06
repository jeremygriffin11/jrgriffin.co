import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marine Street";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%", width: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", background: "#1a2a3a", padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span style={{ color: "#ffffff", fontSize: 34, fontWeight: 700, letterSpacing: -2 }}>{"///"}</span>
          <span style={{ color: "#ffffff", fontSize: 24, fontWeight: 600, letterSpacing: 8 }}>MARINE STREET</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div style={{ color: "#ffffff", fontSize: 62, lineHeight: 1.18, letterSpacing: -1.5 }}>
            Solving complexity for companies that touch real estate.
          </div>
          <div style={{ color: "#a0aec0", fontSize: 26, marginTop: 26 }}>
            Real estate strategy, technology, and capital.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 2, background: "#c9a96e" }} />
          <span style={{ color: "#a0aec0", fontSize: 20, letterSpacing: 3 }}>
            ADVISE · BUILD · INVEST
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
