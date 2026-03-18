import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Vxtra Health privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="inner-hero" style={{ background: "linear-gradient(135deg, var(--teal-darkest) 0%, var(--ink) 100%)", minHeight: "320px" }}>
        <div className="inner-hero-content container">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="inner-hero-sub">
            Your privacy matters to us. This policy outlines how Vxtra Health handles your information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section-title">Information We Collect</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            When you interact with Vxtra Health — through our website, contact forms, or services — we may collect
            personal information such as your name, email address, phone number, company name, and role. We also
            collect standard usage data such as browser type, pages visited, and referring URLs through analytics tools.
          </p>

          <h2 className="section-title">How We Use Your Information</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            We use the information we collect to respond to your inquiries, provide and improve our services,
            communicate updates about our health plan offerings, and comply with applicable laws. We do not sell
            your personal information to third parties.
          </p>

          <h2 className="section-title">Data Protection</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            We implement appropriate technical and organizational measures to safeguard your personal information.
            Access to personal data is restricted to authorized personnel who need it to perform their duties.
          </p>

          <h2 className="section-title">Your Rights</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8, marginBottom: "32px" }}>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us at{" "}
            <a href="mailto:info@vxtrahealth.com" style={{ color: "var(--teal)", fontWeight: 600 }}>
              info@vxtrahealth.com
            </a>.
          </p>

          <h2 className="section-title">Contact Us</h2>
          <p style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.8 }}>
            If you have questions about this privacy policy, please contact us at{" "}
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
