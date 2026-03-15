export default function SuccessCards() {
  return (
    <section className="section success has-dot-grid">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Better for Everyone</span>
          <h2 className="section-title">
            What happens when healthcare works the way it should.
          </h2>
        </div>

        <div className="success-grid">
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                alt="Happy diverse group"
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Employees</h3>
              <div className="card-subtitle">
                Be someone who actually uses their healthcare, without the stress
              </div>
              <p>
                $0 copays, $0 deductibles. A real relationship with their doctor. Care
                without dread.
              </p>
            </div>
          </div>
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"
                alt="Smiling physician"
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Physicians</h3>
              <div className="card-subtitle">
                Practice medicine the way you always intended to
              </div>
              <p>
                Agency restored. Community-centered care. Independent practice in a community
                that knows your name.
              </p>
            </div>
          </div>
          <div className="success-card reveal">
            <div className="success-card-photo-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="success-card-photo"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                alt="Confident business professional"
              />
            </div>
            <div className="success-card-body">
              <div className="success-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                </svg>
              </div>
              <h3>Employers</h3>
              <div className="card-subtitle">
                Be the reason your company finally has a health plan it can be proud of
              </div>
              <p>
                Predictable, lower costs. Transparent data. Hero status to the board. Full
                compliance with new mandates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
