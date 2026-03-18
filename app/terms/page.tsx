import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Vxtra Health terms of service — the terms governing your use of our website and services.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="inner-hero" style={{ background: "var(--ink)", minHeight: "320px" }}>
        <div className="inner-hero-content container">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Terms of Service</span>
          </div>
          <h1>Terms of Service</h1>
          <p className="inner-hero-sub">
            Please review the following terms that govern your use of the Vxtra Health website and services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section-title">Acceptance of Terms</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            By accessing or using the Vxtra Health website and services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="section-title">Use of Services</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            Vxtra Health provides information about physician-steward health plans for self-insured employers.
            The content on this website is for informational purposes only and does not constitute medical advice,
            insurance advice, or a binding offer. Specific plan details, coverage, and pricing are subject to
            individual agreements.
          </p>

          <h2 className="section-title">Intellectual Property</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            All content on this website — including text, graphics, logos, images, and software — is the property
            of Vxtra Health or its licensors and is protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works from this content without our written permission.
          </p>

          <h2 className="section-title">Limitation of Liability</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            Vxtra Health provides this website and its content on an &ldquo;as is&rdquo; basis. We make no warranties,
            express or implied, regarding the accuracy, completeness, or reliability of the information provided.
            To the fullest extent permitted by law, Vxtra Health shall not be liable for any damages arising from
            your use of this website.
          </p>

          <h2 className="section-title">Changes to These Terms</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            We may update these Terms of Service from time to time. Changes will be posted on this page with an
            updated effective date. Your continued use of our website after changes are posted constitutes your
            acceptance of the revised terms.
          </p>

          <h2 className="section-title">Contact Us</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8 }}>
            If you have questions about these terms, please contact us at{" "}
            <a href="mailto:info@vxtrahealth.com" style={{ color: "var(--teal)", fontWeight: 600 }}>
              info@vxtrahealth.com
            </a>{" "}
            or write to us at 2700 Cumberland Parkway, Suite 140, Atlanta, GA 30339.
          </p>
        </div>
      </section>
    </main>
  );
}
