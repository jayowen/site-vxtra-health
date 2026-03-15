export default function FinalCTA() {
  return (
    <section className="section final-cta" id="schedule">
      <div className="section-divider-top section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,10 1080,10 1440,60 L1440,0 L0,0 Z" fill="var(--white)" />
        </svg>
      </div>
      <div className="container">
        <div className="reveal">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>
            Now Launching in Augusta &amp; Gainesville, GA
          </span>
          <h2 className="section-title">
            Be the reason your company finally has a health plan it can be proud of.
          </h2>
          <p className="final-cta-sub">
            Now launching in Augusta and Gainesville, Georgia. No pitch, no pressure &mdash;
            just an honest conversation about whether Vxtra is the right fit.
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
              Download Our Overview
            </a>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "20px",
            }}
          >
            Or email us directly at{" "}
            <a
              href="mailto:info@vxtrahealth.com"
              style={{ color: "var(--white)", textDecoration: "underline" }}
            >
              info@vxtrahealth.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
