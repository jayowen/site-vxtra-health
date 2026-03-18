"use client";

import Image from "next/image";

export default function PlanSteps() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section plan has-dot-grid" id="how-it-works" aria-label="How Vxtra Health works">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Three steps to a health plan that actually works.</h2>
        </div>

        <div className="plan-steps">
          <div className="plan-step reveal">
            <Image
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
              alt="Employer and Vxtra Health advisor in an initial consultation about self-insured plan options"
              width={400}
              height={280}
            />
            <div className="step-number">1</div>
            <h3>Schedule a Conversation</h3>
            <p>Tell us what&rsquo;s not working. No pitch, no pressure &mdash; just a real conversation about your plan.</p>
          </div>
          <div className="plan-step reveal">
            <Image
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
              alt="Custom health plan design being reviewed with transparent cost data and physician network details"
              width={400}
              height={280}
            />
            <div className="step-number">2</div>
            <h3>Get a Custom Plan Design</h3>
            <p>
              We design a plan around your workforce &mdash; no deductibles, no
              pre-authorizations, and zero insurance runaround.
            </p>
          </div>
          <div className="plan-step reveal">
            <Image
              className="plan-step-photo"
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&q=80"
              alt="Employees enjoying affordable healthcare benefits with their families in a thriving workplace"
              width={400}
              height={280}
            />
            <div className="step-number">3</div>
            <h3>Take Control of Your Health Plan</h3>
            <p>
              Costs stabilize. Employees get care without barriers. Your physicians focus
              on medicine &mdash; not paperwork.
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
