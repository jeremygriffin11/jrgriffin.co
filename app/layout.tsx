import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeremy Griffin — Real Estate Investing + Advisory",
  description: "Real estate investing + advisory. Los Angeles-based with a national network. Flexible across equity and structured capital. Partnering with LPs, sponsors/operators, and brokers/advisors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

