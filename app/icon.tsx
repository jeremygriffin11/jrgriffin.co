import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex",
          alignItems: "center", justifyContent: "center",
          background: "#1a2a3a", color: "#c9a96e",
          fontSize: 40, fontWeight: 700, letterSpacing: -4,
          fontFamily: "sans-serif",
        }}
      >
        {"///"}
      </div>
    ),
    { ...size }
  );
}
