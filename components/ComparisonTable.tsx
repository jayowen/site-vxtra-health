export default function ComparisonTable() {
  const rows = [
    { bad: "Copays on every visit", good: "$0 copays" },
    { bad: "High deductibles", good: "$0 deductibles" },
    { bad: "Pre-authorization required", good: "No pre-authorization" },
    { bad: "Months-old data", good: "Transparent, real-time data" },
    { bad: "Misaligned incentives", good: "Physician-aligned care" },
    { bad: "7-10% annual increases", good: "Hundreds per employee per month in savings" },
    { bad: "Employees avoid care", good: "Employees get care early" },
    { bad: "Compliance risk from new mandates", good: "Full federal transparency compliance" },
  ];

  return (
    <section className="section difference" aria-label="Comparison of traditional plans versus Vxtra Health">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">Traditional Plans vs. Vxtra Health</span>
          <h2 className="section-title">This is what &ldquo;better&rdquo; looks like.</h2>
          <p className="section-subtitle section-subtitle-centered">
            Side-by-side: what you have now versus what&rsquo;s possible.
          </p>
        </div>

        <div className="comparison-table reveal" role="table" aria-label="Plan comparison">
          <div className="comparison-row comparison-header" role="row">
            <div className="comp-cell" role="columnheader">Traditional Plans</div>
            <div className="comp-cell" role="columnheader">Vxtra Health</div>
          </div>
          {rows.map((row, i) => (
            <div className="comparison-row" key={i} role="row">
              <div className="comp-cell" role="cell">
                <span className="comp-icon bad" aria-hidden="true">&times;</span> {row.bad}
              </div>
              <div className="comp-cell" role="cell">
                <span className="comp-icon good" aria-hidden="true">&#10003;</span> {row.good}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
