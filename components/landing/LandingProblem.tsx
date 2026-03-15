import { ProblemCard } from "./types";

function ProblemIcon({ icon }: { icon: ProblemCard["icon"] }) {
  const icons: Record<ProblemCard["icon"], JSX.Element> = {
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
    heartPulse: <><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a4 4 0 0 0-8 0v2" /></>,
    handshake: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>,
  };
  return (
    <div className="problem-card-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">{icons[icon]}</svg>
    </div>
  );
}

interface LandingProblemProps {
  sectionLabel: string;
  headline: string;
  cards: ProblemCard[];
}

export default function LandingProblem({ sectionLabel, headline, cards }: LandingProblemProps) {
  return (
    <section className="section problem" aria-label="The Problem">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
        </div>
        <div className={`problem-grid${cards.length >= 4 ? " problem-grid-4" : ""}`}>
          {cards.map((card, i) => (
            <div className="problem-card reveal" key={i}>
              <ProblemIcon icon={card.icon} />
              <span className="problem-card-type">{card.type}</span>
              <h3>{card.headline}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="var(--warm-white)" />
        </svg>
      </div>
    </section>
  );
}
