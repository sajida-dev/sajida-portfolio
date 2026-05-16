import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1120",
          borderRadius: "8px",
          border: "2px solid rgba(6, 182, 212, 0.5)",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            background: "linear-gradient(to right, #7C3AED, #06B6D4)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-1px",
          }}
        >
          SJ
        </div>
      </div>
    ),
    { ...size }
  );
}
