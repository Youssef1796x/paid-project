import { ImageResponse } from "next/og";

export const alt = "K & Runch";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#F59E0B",
            marginBottom: 24,
          }}
        >
          K & Runch
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
          }}
        >
          Egyptian Restaurant
        </div>
      </div>
    ),
    size,
  );
}
