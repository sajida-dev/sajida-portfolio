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
          background: "#0F172A",
          borderRadius: "8px",
          border: "2px solid #10B981",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            color: "#10B981",
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
