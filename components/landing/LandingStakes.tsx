import { StakeItem } from "./types";

interface LandingStakesProps {
  sectionLabel: string;
  headline: string;
  items: StakeItem[];
  closing: string;
}

export default function LandingStakes({ sectionLabel, headline, items, closing }: LandingStakesProps) {
  return (
    <section className="section failure" aria-label="Stakes">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
        </div>
        <div className="failure-risks">
          {items.map((item, i) => (
            <div className="risk-item reveal" key={i}>
              <div className="risk-number">{i + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="failure-closing reveal">{closing}</p>
      </div>
    </section>
  );
}
