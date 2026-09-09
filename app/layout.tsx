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

const shareImageUrl = new URL(restaurantConfig.banner, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: restaurantConfig.name,
  description: restaurantConfig.description,
  openGraph: {
    title: restaurantConfig.name,
    description: restaurantConfig.description,
    url: siteUrl,
    type: "website",
    locale: "ar_EG",
    images: [
      {
        url: shareImageUrl,
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
    images: [shareImageUrl],
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
