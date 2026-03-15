import Image from "next/image";
import { PlanStep } from "./types";

const stepImages = [
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", alt: "Professional having a consultation conversation" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", alt: "Custom plan design review on desk" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Healthcare professional providing quality care" },
];

interface LandingPlanProps {
  sectionLabel: string;
  headline: string;
  steps: PlanStep[];
  ctaText: string;
  ctaHref: string;
}

export default function LandingPlan({
  sectionLabel,
  headline,
  steps,
  ctaText,
  ctaHref,
}: LandingPlanProps) {
  return (
    <section className="section plan" id="how-it-works" aria-label="How It Works">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
        </div>
        <div className="plan-steps">
          {steps.map((step, i) => (
            <div className="plan-step reveal" key={step.number}>
              <Image
                src={stepImages[i]?.src || stepImages[0].src}
                alt={stepImages[i]?.alt || ""}
                width={200}
                height={140}
                className="plan-step-photo"
              />
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <div className="plan-cta reveal">
          <a href={ctaHref} className="btn btn-coral btn-lg">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
