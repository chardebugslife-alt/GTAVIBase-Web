import { ImageResponse } from "next/og";
import { siteConfig, gameFacts } from "@/lib/site";

export const alt = "GTA VI Base — your information hub for Grand Theft Auto VI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default OG image used across the site. Built with the ImageResponse API so it
// renders at the edge without shipping a static asset.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#ffffff",
          color: "#0b0b0b",
          borderTop: "12px solid #e6007e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34 }}>
          <span style={{ fontWeight: 600 }}>GTA&nbsp;VI</span>
          <span style={{ marginLeft: 10, color: "#e6007e", fontStyle: "italic" }}>
            Base
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.038em",
              display: "flex",
            }}
          >
            Grand Theft Auto VI
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#3d3d3d", display: "flex" }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#c10068" }}>
          Release {gameFacts.releaseDateLabel} · PS5 · Xbox Series X|S
        </div>
      </div>
    ),
    { ...size },
  );
}
