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

const DESCRIPTION =
  "Marine Street solves complexity for companies that touch real estate. Advisory, technology, and capital for owners, operators, investors and companies with real estate exposure.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marine-street.com"),
  title: {
    default: "Marine Street — Advise. Build. Invest.",
    template: "%s | Marine Street",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://marine-street.com",
    siteName: "Marine Street",
    title: "Marine Street — Advise. Build. Invest.",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine Street — Advise. Build. Invest.",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
