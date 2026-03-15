export default function FinalCTA() {
  return (
    <section className="section final-cta" id="schedule" aria-label="Schedule a call with Vxtra Health">
      <div className="section-divider-top section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,60 C360,10 1080,10 1440,60 L1440,0 L0,0 Z" fill="var(--white)" />
        </svg>
      </div>
      <div className="container">
        <div className="reveal">
          <span className="section-label final-cta-label">
            Now Launching in Augusta &amp; Gainesville, GA
          </span>
          <h2 className="section-title">
            Be the reason your company finally has a health plan it can be proud of.
          </h2>
          <p className="final-cta-sub">
            No pitch, no pressure &mdash;
            just an honest conversation about whether Vxtra is the right fit for your team.
          </p>
          <div className="final-cta-actions">
            <a
              href="mailto:info@vxtrahealth.com?subject=Schedule%20a%20Call%20-%20Vxtra%20Health"
              className="btn-white-solid"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:info@vxtrahealth.com?subject=Request%20Plan%20Overview%20-%20Vxtra%20Health"
              className="btn btn-white-outline btn-lg"
            >
              Request Our Overview
            </a>
          </div>
          <p className="final-cta-email">
            Or email us directly at{" "}
            <a
              href="mailto:info@vxtrahealth.com"
              className="final-cta-email-link"
            >
              info@vxtrahealth.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
