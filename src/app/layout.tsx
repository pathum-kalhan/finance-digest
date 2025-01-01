import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { BlottLogo } from "@/components/header/blott-logo";
import { Title } from "@/components/header/title";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Digest",
  description:
    "Finance Digest is a news website that provides the latest news on finance, business, and economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable}
         antialiased`}
      >
        <BlottLogo />
        <Title />
        {children}
      </body>
    </html>
  );
}
