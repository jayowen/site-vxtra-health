import Image from "next/image";

export default function ProblemCards() {
  return (
    <section className="section problem" id="the-problem" aria-label="The problem with traditional health plans">
      <div className="section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
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

        <div className="problem-grid problem-grid-4">
          <div className="problem-card reveal">
            <div className="problem-card-image">
              <Image
                src="/problem-employees.png"
                alt="Employee overwhelmed by confusing medical bills"
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="problem-card-body">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="problem-card-type">For Employees</div>
              <h3>Healthcare is confusing and way too expensive</h3>
              <p>
                People avoid care because they fear the bill. Small problems become expensive emergencies.
              </p>
            </div>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-image">
              <Image
                src="/problem-physicians.png"
                alt="Physician buried under insurance paperwork"
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="problem-card-body">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="problem-card-type">For Physicians</div>
              <h3>Insurance companies have stripped doctors of their agency</h3>
              <p>
                Pre-auths, denials, and admin overhead keep physicians from practicing medicine.
              </p>
            </div>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-image">
              <Image
                src="/problem-employers.png"
                alt="Employer watching healthcare costs rise steeply"
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="problem-card-body">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <polyline points="17 6 12 1 7 6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </div>
              <div className="problem-card-type">For Employers</div>
              <h3>Costs rise every year for plans built for insurer profits</h3>
              <p>
                Premiums climb 7&ndash;10% annually. Your spend doubles in a decade with no better outcomes.
              </p>
            </div>
          </div>
          <div className="problem-card reveal">
            <div className="problem-card-image">
              <Image
                src="/problem-brokers.png"
                alt="Identical briefcases representing undifferentiated broker offerings"
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="problem-card-body">
              <div className="problem-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 15s1.5-2 4-2 4 2 4 2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div className="problem-card-type">For Brokers</div>
              <h3>Every broker sells the same plans &mdash; standing out is hard</h3>
              <p>
                60% of brokers are PE-owned and won&rsquo;t innovate. Independents need a different product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
