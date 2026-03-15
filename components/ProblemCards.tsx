export default function ProblemCards() {
  return (
    <section className="section problem" id="the-problem">
      <div className="section-divider" style={{ zIndex: 5 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="var(--warm-white)" />
        </svg>
      </div>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Why Health Plan Costs Keep Rising</span>
          <h2 className="section-title">
            You shouldn&rsquo;t have to choose between taking care of your people and
            protecting your bottom line.
          </h2>
        </div>

        <div className="problem-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="problem-card reveal">
            <div className="problem-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="problem-card-type">For Employees</div>
            <h3>Healthcare is confusing and too expensive</h3>
            <p>
              When people avoid care because of cost, small problems become expensive
              emergencies.
            </p>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-icon">
              <svg viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="problem-card-type">For Physicians</div>
            <h3>Insurance companies have stripped physicians of their agency</h3>
            <p>
              Pre-authorizations and administrative overhead stand between doctors and
              patients.
            </p>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-icon">
              <svg viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <polyline points="17 6 12 1 7 6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </div>
            <div className="problem-card-type">For Employers</div>
            <h3>Employers pay more every year for plans designed for insurance company profits</h3>
            <p>
              Premiums rise 7&ndash;10% annually. Your spend doubles in a decade &mdash; and
              new mandates add regulatory risk.
            </p>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <div className="problem-card-type">For Brokers</div>
            <h3>Every broker is selling the same plans</h3>
            <p>
              60% of brokers are PE-owned and won&rsquo;t innovate. Independent brokers need
              something different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
