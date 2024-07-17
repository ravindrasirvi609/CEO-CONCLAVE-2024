import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
  description:
    "Join the CEO Conclave organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation to shape the future of the pharmaceuticals industry.",
  keywords: [
    "CEO Conclave",
    "Pharmaceuticals Industry",
    "DPU of Pharmacy",
    "Operant Pharmacy Federation",
    "Pharmaceuticals",
    "Pharmacy Industry",
    "Pharmacy Federation",
    "Pharmacy Conclave",
    "Pharmacy Innovation",
    "Pharmacy Excellence",
    "Pharmacy",
  ],
  openGraph: {
    title: "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
    description:
      "Join the CEO Conclave organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation to shape the future of the pharmaceuticals industry.",
    url: "https://ceo-conclave-2024.vercel.app/",
    siteName: "CEO Conclave 2024",
    images: [
      {
        url: "https://ceo-conclave-2024.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
    description:
      "Join the CEO Conclave organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation to shape the future of the pharmaceuticals industry.",
    images: ["https://ceo-conclave-2024.vercel.app/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          <StructuredData />
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
