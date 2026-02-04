import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greenflow.example"),
  title: {
    default: "Greenflow — Global payments, built for modern teams",
    template: "%s · Greenflow",
  },
  description:
    "Issue cards, open IBAN accounts, and move money worldwide from one regulated platform—crypto-friendly rails included.",
  applicationName: "Greenflow",
  keywords: [
    "global payments",
    "IBAN",
    "card issuing",
    "payment gateway",
    "digital wallet",
    "fintech",
    "compliance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Greenflow — Payments, made simpler.",
    description:
      "A clean, regulated fintech platform for cross-border payments, IBANs, cards, and a crypto-friendly wallet.",
    siteName: "Greenflow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenflow — Payments, made simpler.",
    description:
      "Global payments, IBANs, cards, and a crypto-friendly wallet—built for modern teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
