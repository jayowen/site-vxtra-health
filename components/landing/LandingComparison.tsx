import { ComparisonRow } from "./types";

interface LandingComparisonProps {
  sectionLabel: string;
  headline: string;
  subhead: string;
  headerBefore: string;
  headerAfter: string;
  rows: ComparisonRow[];
}

export default function LandingComparison({
  sectionLabel,
  headline,
  subhead,
  headerBefore,
  headerAfter,
  rows,
}: LandingComparisonProps) {
  return (
    <section className="section difference" aria-label="Comparison">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">{sectionLabel}</span>
          <h2 className="section-title">{headline}</h2>
          <p className="section-subtitle section-subtitle-centered">{subhead}</p>
        </div>
        <div className="comparison-table reveal" role="table" aria-label="Plan comparison">
          <div className="comparison-row comparison-header" role="row">
            <div className="comp-cell" role="columnheader">{headerBefore}</div>
            <div className="comp-cell" role="columnheader">{headerAfter}</div>
          </div>
          {rows.map((row, i) => (
            <div className="comparison-row" role="row" key={i}>
              <div className="comp-cell" role="cell">
                <span className="comp-icon bad" aria-hidden="true">&times;</span>
                {row.before}
              </div>
              <div className="comp-cell" role="cell">
                <span className="comp-icon good" aria-hidden="true">&#10003;</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
