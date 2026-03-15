export default function OurTownModel() {
  return (
    <section className="section our-town" id="our-town-model">
      <div className="section-divider-top section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,10 1080,10 1440,60 L1440,0 L0,0 Z" fill="var(--white)" />
        </svg>
      </div>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">The Our Town Model &amp; Methodology</span>
          <h2 className="section-title">
            Secondary markets across the Southeast, South, and Midwest are the opportunity.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Our methodology aggregates local employers and physicians &mdash; creating
            purchasing power and coordinated care that traditional plans can&rsquo;t match.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "var(--teal)",
              fontWeight: 600,
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            Now launching in Augusta &amp; Gainesville, GA.
          </p>
        </div>

        <div className="our-town-orbit">
          {/* Left: Employers */}
          <div className="our-town-spoke spoke-teal orbit-left reveal">
            <div className="our-town-spoke-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a4 4 0 0 0-8 0v2" />
              </svg>
            </div>
            <span className="our-town-spoke-label">Employers</span>
            <h3>Self-Insured Middle Market Employers</h3>
            <p>
              200&ndash;2,000 employee companies pool together for purchasing power and
              predictable costs.
            </p>
          </div>

          <div className="our-town-conn-h conn-left" />

          {/* Central Hub */}
          <div className="our-town-hub reveal">
            <div className="our-town-hub-ring" />
            <div className="our-town-hub-ring" />
            <div className="our-town-hub-inner">
              <svg viewBox="0 0 24 24" width="44" height="44">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  fill="rgba(255,255,255,0.9)"
                  stroke="none"
                />
              </svg>
              <span>Vxtra Health</span>
            </div>
          </div>

          <div className="our-town-conn-h conn-right" />

          {/* Right: Physicians */}
          <div className="our-town-spoke spoke-teal orbit-right reveal">
            <div className="our-town-spoke-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="our-town-spoke-label">Physicians</span>
            <h3>Local Physician Stewards</h3>
            <p>
              The best independent doctors in your community &mdash; same treatment,
              40&ndash;70% less than hospital systems.
            </p>
          </div>
        </div>

        {/* Bottom: Brokers */}
        <div className="our-town-bottom-area">
          <div className="our-town-conn-v" />
          <div className="our-town-spoke spoke-coral orbit-bottom reveal">
            <div className="our-town-spoke-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <span className="our-town-spoke-label">Brokers</span>
            <h3>Benefits Brokers</h3>
            <p>
              A differentiated product no competitor can match &mdash; protecting your book
              and winning new clients.
            </p>
          </div>
        </div>

        <div className="our-town-bottom-statement reveal">
          <p>
            <strong>The dots are closer together.</strong> Everyone knows everyone. Health
            plans that work for the people here &mdash; not insurance company shareholders.{" "}
            <strong>Together, you&rsquo;re better.</strong>
          </p>
        </div>
      </div>
      <div className="section-divider" style={{ zIndex: 5 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="var(--light-gray)"
          />
        </svg>
      </div>
    </section>
  );
}
