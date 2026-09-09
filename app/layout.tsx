import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { restaurantConfig } from "@/src/data/restaurant";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: restaurantConfig.name,
  description: restaurantConfig.description,
  openGraph: {
    title: restaurantConfig.name,
    description: restaurantConfig.description,
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: restaurantConfig.banner,
        width: 960,
        height: 400,
        alt: restaurantConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: restaurantConfig.name,
    description: restaurantConfig.description,
    images: [restaurantConfig.banner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
