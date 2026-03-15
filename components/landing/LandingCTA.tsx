interface LandingCTAProps {
  sectionLabel: string;
  headline: string;
  body: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}

export default function LandingCTA({
  sectionLabel,
  headline,
  body,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
}: LandingCTAProps) {
  return (
    <section className="section final-cta" id="schedule" aria-label="Call to Action">
      <div className="section-divider-top section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C360,10 1080,10 1440,60 L1440,0 L0,0 Z" fill="var(--coral-light)" />
        </svg>
      </div>
      <div className="container">
        <span className="section-label final-cta-label">{sectionLabel}</span>
        <h2 className="section-title">{headline}</h2>
        <p className="final-cta-sub">{body}</p>
        <div className="final-cta-actions">
          <a href={ctaPrimaryHref} className="btn-white-solid">
            {ctaPrimary}
          </a>
          <a href={ctaSecondaryHref} className="btn btn-white-outline btn-lg">
            {ctaSecondary}
          </a>
        </div>
        <p className="final-cta-email">
          Or email us directly at{" "}
          <a href="mailto:info@vxtrahealth.com" className="final-cta-email-link">
            info@vxtrahealth.com
          </a>
        </p>
      </div>
    </section>
  );
}
