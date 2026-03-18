import Image from "next/image";
import Link from "next/link";

export default function AudienceRouting() {
  return (
    <section className="section audience has-dot-grid" id="who-we-help" aria-label="Who Vxtra Health serves">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">
            Employees, Physicians, Employers &amp; Brokers
          </span>
          <h2 className="section-title">
            Built for everyone who touches the health plan.
          </h2>
        </div>

        <div className="audience-grid audience-grid-4">
          <Link href="/employees" className="audience-card emphasized reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="/audience-employees.png"
                alt="Employees receiving care from local physicians with zero out-of-pocket costs"
                width={600}
                height={450}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>For Employees</h3>
              <p>
                Local doctors who know your name. $0 copays, $0 deductibles, and no insurance runaround. Just great care.
              </p>
              <span className="audience-card-link">Learn More &rarr;</span>
            </div>
          </Link>
          <Link href="/physicians" className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="/audience-physicians.png"
                alt="Physician partnering directly with local employers"
                width={600}
                height={450}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>For Physicians</h3>
              <p>
                Practice medicine your way. Partner directly with employers, backed by tech that handles claims and data.
              </p>
              <span className="audience-card-link">Learn More &rarr;</span>
            </div>
          </Link>
          <Link href="/employers" className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="/audience-employers.png"
                alt="Employer reviewing transparent health plan cost data"
                width={600}
                height={450}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                </svg>
              </div>
              <h3>For Employers</h3>
              <p>
                Transparent data, local physicians, and costs you control. Better care at hundreds less per employee per month.
              </p>
              <span className="audience-card-link">Learn More &rarr;</span>
            </div>
          </Link>
          <Link href="/brokers" className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="/audience-brokers.png"
                alt="Broker presenting a differentiated health plan to clients"
                width={600}
                height={450}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
              </div>
              <h3>For Brokers</h3>
              <p>
                A plan no competitor can match. Real savings for clients, a protected book of business, and easy renewals.
              </p>
              <span className="audience-card-link">Learn More &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
