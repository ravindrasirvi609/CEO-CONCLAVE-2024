import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ceo.opf.org.in"),
  title: {
    default:
      "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
    template: "%s | CEO Conclave 2024",
  },
  description:
    "Join the CEO Conclave 2024, organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation. Shape the future of the pharmaceuticals industry through innovation and excellence.",
  keywords: [
    "CEO Conclave 2024",
    "Pharmaceuticals Industry",
    "DPU of Pharmacy",
    "Operant Pharmacy Federation",
    "Pharmacy Innovation",
    "Pharmaceutical Excellence",
    "Industry Leadership",
    "Pharmacy Trends",
    "Healthcare Innovation",
    "Pharmaceutical Business Strategy",
  ],
  authors: [{ name: "Operant Pharmacy Federation" }],
  creator: "Operant Pharmacy Federation",
  publisher: "DPU of Pharmacy",
  openGraph: {
    title: "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
    description:
      "Join the CEO Conclave 2024, organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation. Shape the future of the pharmaceuticals industry through innovation and excellence.",
    url: "https://ceo.opf.org.in",
    siteName: "CEO Conclave 2024",
    images: [
      {
        url: "https://ceo.opf.org.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CEO Conclave 2024 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEO Conclave 2024: Building a Culture of Innovation and Excellence",
    description:
      "Join the CEO Conclave 2024, organized by DPU of Pharmacy and hosted by the Operant Pharmacy Federation. Shape the future of the pharmaceuticals industry through innovation and excellence.",
    images: ["https://ceo.opf.org.in/twitter-image.jpg"],
    creator: "@OPF_Official",
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
  alternates: {
    canonical: "https://ceo.opf.org.in",
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
