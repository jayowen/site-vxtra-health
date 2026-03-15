import Image from "next/image";

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

        <div className="audience-grid">
          <div className="audience-card emphasized reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80"
                alt="Happy employees celebrating access to affordable employer-sponsored healthcare"
                width={600}
                height={160}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Employees</h3>
              <p>
                Local physicians who actually know you, zero out-of-pocket costs, and none of the
                insurance runaround. Call your doctor, get seen, get care
                &mdash; no dreading the bill.
              </p>
            </div>
          </div>
          <div className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
                alt="Physician steward consulting directly with a patient in a community health setting"
                width={600}
                height={160}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Physicians</h3>
              <p>
                Back in charge of patient care. Work directly with local employers, supported
                by technology that handles claims and data. Your patients trust you &mdash;
                not a call center.
              </p>
            </div>
          </div>
          <div className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Employer team reviewing transparent health plan data and cost savings"
                width={600}
                height={160}
              />
            </div>
            <div className="audience-card-content">
              <div className="audience-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                </svg>
              </div>
              <h3>Employers</h3>
              <p>
                A physician-steward health plan with transparent data, local physicians, and
                costs you can actually control. Better care for your people, hundreds less
                per employee per month.
              </p>
            </div>
          </div>
          <div className="audience-card reveal">
            <div className="audience-card-photo-wrapper">
              <Image
                className="audience-card-photo"
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80"
                alt="Benefits broker closing a deal with a differentiated self-insured health plan"
                width={600}
                height={160}
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
              <h3>Brokers</h3>
              <p>
                A plan no competitor can match &mdash; built around employer, employee, and
                physician. Your clients save real money and your book of business is
                protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
