import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Newsreader, Archivo } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display-src",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-src",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Marine Street",
  description:
    "Marine Street solves complexity for companies that touch real estate. Real estate strategy, technology, and capital.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
