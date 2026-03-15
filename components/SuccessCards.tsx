import Image from "next/image";

export default function SuccessCards() {
  return (
    <section className="section success has-dot-grid" aria-label="What success looks like with Vxtra Health">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">The Transformation</span>
          <h2 className="section-title">
            What happens when healthcare works the way it should.
          </h2>
        </div>

        <div className="success-grid">
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              <Image
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                alt="Diverse group of employees smiling, confident in their affordable health coverage"
                width={500}
                height={180}
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Employees</h3>
              <div className="card-subtitle">
                Use your healthcare without dreading the bill
              </div>
              <p>
                $0 copays, $0 deductibles. A real relationship with a local doctor who knows your name.
                Care you actually use &mdash; not care you avoid.
              </p>
            </div>
          </div>
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              <Image
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
                alt="Physician steward providing personalized care in a community medical practice"
                width={500}
                height={180}
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Physicians</h3>
              <div className="card-subtitle">
                Practice medicine the way you intended
              </div>
              <p>
                No pre-authorizations. No insurance company overrides. Community-centered
                care in a practice where patients trust you &mdash; not a call center.
              </p>
            </div>
          </div>
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              <Image
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                alt="Confident employer presenting predictable health plan costs and transparent data to their board"
                width={500}
                height={180}
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                </svg>
              </div>
              <h3>Employers</h3>
              <div className="card-subtitle">
                A health plan your company can finally be proud of
              </div>
              <p>
                Predictable, lower costs. Transparent data you can show the board. Full
                compliance with new federal mandates &mdash; and employees who stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
