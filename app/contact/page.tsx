import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vxtra Health. Schedule a conversation about physician-steward health plans for your organization. No pitch, no pressure — just an honest conversation.",
  alternates: { canonical: "/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Vxtra Health",
  description:
    "Get in touch with Vxtra Health. Schedule a conversation about physician-steward health plans for your organization.",
  url: "https://vxtrahealth.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Vxtra Health",
    email: "info@vxtrahealth.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2700 Cumberland Parkway, Suite 140",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      postalCode: "30339",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <section className="hero landing-hero contact-hero" aria-label="Contact">
        <div className="hero-bg-shape" />
        <div className="container hero-inner landing-hero-split">
          <div className="hero-content">
            <div className="hero-label">
              <span /> Get in Touch
            </div>
            <h1>
              No pitch, no pressure. <em>Just a conversation.</em>
            </h1>
            <p className="hero-sub">
              Whether you&rsquo;re an employer, broker, or physician — we&rsquo;d love to hear
              what you&rsquo;re dealing with.
            </p>
          </div>
          <div className="landing-hero-visual">
            <div className="landing-hero-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Friendly professional ready for a conversation"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" aria-label="Contact Form">
        <div className="container">
          <div className="contact-grid reveal">
            <div className="contact-info">
              <h2>Let&rsquo;s Talk</h2>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" stroke="var(--teal)" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@vxtrahealth.com">info@vxtrahealth.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" stroke="var(--teal)" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Address</strong>
                  <span>2700 Cumberland Parkway<br />Suite 140<br />Atlanta, GA 30339</span>
                </div>
              </div>
              <div className="contact-detail">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" stroke="var(--teal)" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <strong>Response Time</strong>
                  <span>We typically respond within one business day.</span>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formspree.io/f/xyzgwqkb"
              method="POST"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="employees">Employee Count</label>
                  <select id="employees" name="employees">
                    <option value="">Select range</option>
                    <option value="under-200">Under 200</option>
                    <option value="200-500">200 - 500</option>
                    <option value="500-1000">500 - 1,000</option>
                    <option value="1000-2000">1,000 - 2,000</option>
                    <option value="2000+">2,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="role">I am a...</label>
                <select id="role" name="role">
                  <option value="">Select your role</option>
                  <option value="employer">Employer / HR Leader</option>
                  <option value="broker">Benefits Broker</option>
                  <option value="physician">Physician</option>
                  <option value="employee">Employee</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you're dealing with or what questions you have..."
                />
              </div>
              <button type="submit" className="btn btn-coral btn-lg contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
