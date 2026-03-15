"use client";

export default function PlanSteps() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section plan has-dot-grid" id="how-it-works">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Three steps to a health plan that actually works.</h2>
        </div>

        <div className="plan-steps">
          <div className="plan-step reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
              alt="Business conversation"
            />
            <div className="step-number">1</div>
            <h3>Schedule a Conversation</h3>
            <p>Tell us what&rsquo;s not working. No pitch, no pressure &mdash; just a real conversation.</p>
          </div>
          <div className="plan-step reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
              alt="Custom plan design"
            />
            <div className="step-number">2</div>
            <h3>Get a Custom Plan Design</h3>
            <p>
              Our physician-steward team designs a plan around your workforce: $0 copays, $0
              deductibles, zero pre-authorization requirements.
            </p>
          </div>
          <div className="plan-step reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&q=80"
              alt="Happy people"
            />
            <div className="step-number">3</div>
            <h3>Take Control of Your Health Plan</h3>
            <p>
              Costs stabilize. Employees access benefits without barriers. Physicians focus
              on medicine.
            </p>
          </div>
        </div>

        <div className="plan-cta reveal">
          <button className="btn btn-coral btn-lg" onClick={() => scrollTo("schedule")}>
            Schedule Your Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
