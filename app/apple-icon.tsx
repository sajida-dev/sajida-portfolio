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
          background: "#0F172A",
          borderRadius: "40px",
          border: "4px solid #10B981",
        }}
      >
        <div
          style={{
            fontSize: "90px",
            fontWeight: 800,
            fontFamily: "sans-serif",
            color: "#10B981",
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
