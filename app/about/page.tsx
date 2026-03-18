import type { Metadata } from "next";
import Image from "next/image";
import OurTownModel from "@/components/OurTownModel";

export const metadata: Metadata = {
  title: "About Vxtra Health",
  description:
    "Vxtra Health was built by healthcare operators with 30+ years of experience — on every side of the table. Learn about our leadership, our mission, and the Our Town methodology.",
  alternates: { canonical: "/about" },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vxtra Health",
  description:
    "Vxtra Health was built by healthcare operators with 30+ years of experience — on every side of the table.",
  url: "https://vxtrahealth.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Vxtra Health",
    url: "https://vxtrahealth.com",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
    },
  },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Page Header */}
      <section className="hero landing-hero" aria-label="About">
        <div className="hero-bg-shape" />
        <div className="hero-accent-dot" />
        <div className="hero-accent-dot" />
        <div className="container hero-inner landing-hero-split">
          <div className="hero-content">
            <div className="hero-label">
              <span /> About Vxtra Health
            </div>
            <h1>
              We&rsquo;ve been on every side of this table.
            </h1>
            <p className="hero-sub">
              Built by healthcare operators who&rsquo;ve spent decades managing costs, processing
              claims, and watching insurance companies extract value from the people they were
              supposed to serve.
            </p>
          </div>
          <div className="landing-hero-visual">
            <div className="landing-hero-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Healthcare leadership team in discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section guide" aria-label="Leadership">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Built by people who&rsquo;ve lived it.</h2>
          </div>

          <div className="guide-quote reveal">
            <div className="guide-photo-placeholder">
              <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Photo Coming Soon</span>
            </div>
            <div>
              <blockquote>
                &ldquo;When you finish talking to somebody, they have to not only accept the dream,
                they have to believe the dream.&rdquo;
              </blockquote>
              <cite>Larry Hightower, Co-Founder &amp; CEO</cite>
            </div>
          </div>

          <div className="about-leaders reveal">
            <div className="about-leader-card">
              <div className="about-leader-photo-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Professional executive portrait"
                  width={120}
                  height={120}
                  className="about-leader-photo"
                />
              </div>
              <h3>Larry Hightower</h3>
              <p className="about-leader-role">Co-Founder &amp; CEO</p>
              <p>
                40+ years in healthcare and business operations. Sold companies at 22x and 15x
                earnings. Grew a urology practice from 30 to 100 physicians.
              </p>
            </div>
            <div className="about-leader-card">
              <div className="about-leader-photo-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                  alt="Healthcare operations professional"
                  width={120}
                  height={120}
                  className="about-leader-photo"
                />
              </div>
              <h3>Sandra &amp; Andrew</h3>
              <p className="about-leader-role">Operations</p>
              <p>
                30+ years in health plan processing, claims, contracts, and sales. They know
                exactly where the current system fails everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - visual split */}
      <section className="section about-mission" aria-label="Mission">
        <div className="container">
          <div className="about-mission-grid reveal">
            <div className="about-mission-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                alt="Community healthcare setting in a secondary market"
                width={560}
                height={400}
                className="about-mission-img"
              />
            </div>
            <div className="about-mission-text">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Lower costs. Better care. Transparent data.</h2>
              <p>
                Every self-insured employer deserves the same caliber of technology and
                physician-led care that Fortune 100 companies have had for years.
              </p>
              <p>
                We&rsquo;re building health plans for communities across the Southeast, South,
                and Midwest — not for insurance company shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Town Model */}
      <OurTownModel />

      {/* Technology - visual split */}
      <section className="section" aria-label="Technology">
        <div className="container">
          <div className="about-mission-grid about-mission-reverse reveal">
            <div className="about-mission-text">
              <span className="section-label">Technology</span>
              <h2 className="section-title">Fortune 100 tools for mid-market employers.</h2>
              <p>
                Powered by JudyHealth (Capital Rx) — the first platform to process medical and
                prescription claims together.
              </p>
              <div className="about-stat-row">
                <div className="about-stat">
                  <strong>7 Days</strong>
                  <span>Data visibility</span>
                </div>
                <div className="about-stat">
                  <strong>vs. 120 Days</strong>
                  <span>Industry standard</span>
                </div>
              </div>
            </div>
            <div className="about-mission-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data analytics dashboard showing transparent health plan metrics"
                width={560}
                height={400}
                className="about-mission-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section" style={{ background: "var(--light-gray)" }} aria-label="Location">
        <div className="container">
          <div className="reveal text-center">
            <span className="section-label">Our Location</span>
            <h2 className="section-title">Based in Atlanta. Building for communities.</h2>
            <p className="section-subtitle section-subtitle-centered">
              2700 Cumberland Parkway, Suite 140 &middot; Atlanta, GA 30339
            </p>
            <p className="section-subtitle section-subtitle-centered" style={{ marginTop: "12px", color: "var(--teal)", fontWeight: 600 }}>
              Now launching in Augusta &amp; Gainesville, GA — 24 markets identified.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
