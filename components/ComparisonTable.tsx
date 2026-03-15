export default function ComparisonTable() {
  const rows = [
    { bad: "Copays on every visit", good: "$0 copays" },
    { bad: "High deductibles", good: "$0 deductibles" },
    { bad: "Pre-authorization required", good: "No pre-authorization" },
    { bad: "Months-old data", good: "Transparent data visibility" },
    { bad: "Misaligned incentives", good: "Physician-aligned care" },
    { bad: "7-10% annual increases", good: "Hundreds per employee per month in savings" },
    { bad: "Employees avoid care", good: "Employees get care" },
    { bad: "Compliance risk from new mandates", good: "Full federal transparency compliance" },
  ];

  return (
    <section className="section difference">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Traditional Plans vs. Vxtra Health</span>
          <h2 className="section-title">This is what &ldquo;better&rdquo; looks like.</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Traditional plans vs. the Vxtra Health approach.
          </p>
        </div>

        <div className="comparison-table reveal">
          <div className="comparison-row comparison-header">
            <div className="comp-cell">Traditional Plans</div>
            <div className="comp-cell">Vxtra Health</div>
          </div>
          {rows.map((row, i) => (
            <div className="comparison-row" key={i}>
              <div className="comp-cell">
                <span className="comp-icon bad">&times;</span> {row.bad}
              </div>
              <div className="comp-cell">
                <span className="comp-icon good">&#10003;</span> {row.good}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
