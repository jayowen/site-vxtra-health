export default function StakesRisks() {
  const risks = [
    {
      title: "Premiums will keep rising",
      desc: "At 7%+ annually, your health plan spend doubles in a decade. The math doesn\u2019t get friendlier.",
    },
    {
      title: "Your best people will leave",
      desc: "68% of employees say benefits are a top factor in staying. Subpar coverage drives talent to competitors who offer more.",
    },
    {
      title: "Avoided care becomes expensive care",
      desc: "When employees skip the doctor, small problems become ER visits. You pay more \u2014 and your people suffer more.",
    },
    {
      title: "New mandates create real liability",
      desc: "Federal transparency regulations are in effect. Employers who don\u2019t modernize face fines and regulatory exposure.",
    },
  ];

  return (
    <section className="section failure" aria-label="The cost of inaction">
      <div className="container">
        <div className="reveal text-center">
          <span className="section-label">The Cost of Waiting</span>
          <h2 className="section-title">The cost of doing nothing keeps going up.</h2>
        </div>

        <div className="failure-risks">
          {risks.map((risk, i) => (
            <div className="risk-item reveal" key={i}>
              <div className="risk-number">{i + 1}</div>
              <div>
                <h3>{risk.title}</h3>
                <p>{risk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="failure-closing reveal">
          Every year of inaction is another year of 1,600% stock appreciation for insurance
          companies &mdash; funded by your premiums.
        </p>
      </div>
    </section>
  );
}
