import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoLeo — Gamer · Creator · Explorer",
  description: "Digital identity for a new generation.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NeoLeo",
    description: "Gamer · Creator · Explorer",
    url: "https://neoleo.me",
    siteName: "NeoLeo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#020c1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}