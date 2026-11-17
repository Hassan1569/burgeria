import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBSESSION | Not Just A Burger",
  description: "An obsession with the perfect sear, the freshest layers, and the ultimate bite. A premium cinematic burger experience.",
  keywords: ["burger", "premium burger", "food design", "scroll animation", "creative website"],
  authors: [{ name: "Obsession Burger" }],
  openGraph: {
    title: "OBSESSION | Not Just A Burger",
    description: "A cinematic scroll-driven burger experience.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}