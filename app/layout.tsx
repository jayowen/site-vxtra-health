import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vxtra Health | Physician-Steward Health Plans for Self-Insured Employers",
    template: "%s | Vxtra Health",
  },
  description:
    "Vxtra Health gives self-insured middle market employers a physician-steward health plan with $0 copays, $0 deductibles, and transparent data — powered by AI-enabled technology. Now launching in Augusta & Gainesville, GA.",
  keywords: [
    "self-insured health plan",
    "physician-steward",
    "employer health benefits",
    "health insurance alternative",
    "Augusta GA health plan",
    "Gainesville GA health plan",
    "middle market employer benefits",
    "transparent healthcare costs",
  ],
  openGraph: {
    title: "Vxtra Health | A Way Out of Rising Health Plan Costs",
    description:
      "Physician-steward health plans for self-insured middle market employers. $0 copays, $0 deductibles, transparent data. Now launching in Augusta & Gainesville, GA.",
    url: "https://vxtrahealth.com",
    siteName: "Vxtra Health",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vxtra Health | A Way Out of Rising Health Plan Costs",
    description:
      "Physician-steward health plans for self-insured middle market employers. $0 copays, $0 deductibles, transparent data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
