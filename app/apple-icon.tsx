import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
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
          borderRadius: "40px",
          border: "4px solid rgba(6, 182, 212, 0.5)",
        }}
      >
        <div
          style={{
            fontSize: "90px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            background: "linear-gradient(to right, #7C3AED, #06B6D4)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-4px",
          }}
        >
          SJ
        </div>
      </div>
    ),
    { ...size }
  );
}
