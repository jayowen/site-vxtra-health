import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const poppinsHeading = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppinsBody = Poppins({
  weight: ["300", "400", "500"],
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
    "Vxtra Health delivers physician-steward health plans for self-insured employers — $0 copays, $0 deductibles, transparent data, and AI-enabled technology. Now launching in Augusta & Gainesville, GA.",
  keywords: [
    "self-insured health plan",
    "physician-steward",
    "employer health benefits",
    "health insurance alternative",
    "Augusta GA health plan",
    "Gainesville GA health plan",
    "middle market employer benefits",
    "transparent healthcare costs",
    "self-funded health plan",
    "employer health plan cost savings",
  ],
  metadataBase: new URL("https://vxtrahealth.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vxtra Health | A Way Out of Rising Health Plan Costs",
    description:
      "Physician-steward health plans for self-insured employers. $0 copays, $0 deductibles, transparent data. Now launching in Augusta & Gainesville, GA.",
    url: "https://vxtrahealth.com",
    siteName: "Vxtra Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/vxtrahealth-logo.png",
        width: 1200,
        height: 630,
        alt: "Vxtra Health — Physician-Steward Health Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vxtra Health | A Way Out of Rising Health Plan Costs",
    description:
      "Physician-steward health plans for self-insured employers. $0 copays, $0 deductibles, transparent data.",
    images: ["/vxtrahealth-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vxtrahealth.com/#organization",
      name: "Vxtra Health",
      url: "https://vxtrahealth.com",
      logo: "https://vxtrahealth.com/vxtrahealth-logo.png",
      description:
        "Physician-steward health plans for self-insured employers. AI-enabled technology, local physicians, transparent data.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2700 Cumberland Parkway, Suite 140",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        postalCode: "30339",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@vxtrahealth.com",
        contactType: "sales",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://vxtrahealth.com/#localbusiness",
      name: "Vxtra Health",
      url: "https://vxtrahealth.com",
      image: "https://vxtrahealth.com/vxtrahealth-logo.png",
      description:
        "Physician-steward health plans for self-insured employers in the Southeast, South, and Midwest.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2700 Cumberland Parkway, Suite 140",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        postalCode: "30339",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "Georgia" },
        { "@type": "AdministrativeArea", name: "Southeast United States" },
        { "@type": "AdministrativeArea", name: "South United States" },
        { "@type": "AdministrativeArea", name: "Midwest United States" },
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://vxtrahealth.com/#website",
      url: "https://vxtrahealth.com",
      name: "Vxtra Health",
      publisher: { "@id": "https://vxtrahealth.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsHeading.variable} ${poppinsBody.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body>
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
