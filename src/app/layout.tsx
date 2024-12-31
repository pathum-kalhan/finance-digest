import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { NewsContainerTitle } from "@/components/news-container/news-container-title";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable}
         antialiased`}
      >
        <Header />
        <NewsContainerTitle />
        {children}
      </body>
    </html>
  );
}
