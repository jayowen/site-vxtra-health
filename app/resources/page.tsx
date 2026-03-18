import type { Metadata } from "next";
import { resources } from "@/data/resources";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Guides, FAQs, and resources for employers, brokers, physicians, and employees exploring physician-steward health plans with Vxtra Health.",
  alternates: { canonical: "/resources" },
};

function ResourceIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a4 4 0 0 0-8 0v2" /></>,
    handshake: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>,
    stethoscope: <><path d="M4.8 2.62a2 2 0 0 1 1.4-.6h.01a2 2 0 0 1 1.4.58L12 7l4.4-4.4a2 2 0 0 1 1.4-.58h.01a2 2 0 0 1 1.4.6" /><path d="M18 13v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3" /></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
    book: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  };
  return (
    <div className="resource-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon] || icons.book}</svg>
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "Vxtra Health Resources & FAQ",
  url: "https://vxtrahealth.com/resources",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ResourcesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="inner-hero" style={{ background: "linear-gradient(135deg, var(--ink) 0%, #0f1c2e 60%, #112233 100%)" }} aria-label="Resources">
        <div className="inner-hero-content container">
          <div className="hero-label" style={{ justifyContent: "center" }}>
            <span /> Resources &amp; Guides
          </div>
          <h1>
            Everything you need to <em>make an informed decision.</em>
          </h1>
          <p className="inner-hero-sub">
            Guides, frequently asked questions, and key statistics about physician-steward
            health plans and the Vxtra Health model.
          </p>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section" aria-label="Downloadable Resources">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">Downloadable Resources</span>
            <h2 className="section-title">Guides for every audience.</h2>
          </div>
          <div className="resource-grid">
            {resources.map((r, i) => (
              <div className="resource-card reveal" key={i}>
                <ResourceIcon icon={r.icon} />
                <span className="resource-tag">{r.audience}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                {r.available ? (
                  <button className="btn btn-teal-outline resource-btn">Download</button>
                ) : (
                  <span className="resource-badge">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">Common questions, clear answers.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details className="faq-item reveal" key={i}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section" style={{ background: "var(--ink)" }} aria-label="Key Statistics">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label" style={{ color: "var(--teal)" }}>Key Statistics</span>
            <h2 className="section-title" style={{ color: "var(--white)" }}>The numbers that matter.</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal">
              <span className="stat-value">40-70%</span>
              <span className="stat-label">Savings vs. hospital systems</span>
              <p>Independent physicians provide the same treatment at 40-70% less than hospital-based care.</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-value">$0</span>
              <span className="stat-label">Copays &amp; deductibles</span>
              <p>Every visit, every time. No surprise bills, no fine print for members.</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-value">7 Days</span>
              <span className="stat-label">Data visibility</span>
              <p>Transparent claims data in 7 days — vs. the industry standard of 120 days.</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-value">30+</span>
              <span className="stat-label">Years of experience</span>
              <p>Three decades on every side of healthcare — physicians, employers, operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
