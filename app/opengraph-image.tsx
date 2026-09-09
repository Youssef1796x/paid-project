import { ImageResponse } from "next/og";
import { restaurantConfig } from "@/src/data/restaurant";

export const alt = `${restaurantConfig.name} - ${restaurantConfig.tagline}`;
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
            fontSize: 30,
            color: "#F59E0B",
            marginBottom: 24,
          }}
        >
          {restaurantConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          {restaurantConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#D4D4D4",
            maxWidth: 900,
          }}
        >
          {restaurantConfig.description}
        </div>
      </div>
    ),
    size,
  );
}
