const trustItems = [
  {
    title: "Live Draws",
    text: "Every competition is streamed live so every entry is completely transparent.",
  },
  {
    title: "Verified Winners",
    text: "Every winner is contacted, verified and celebrated across our platforms.",
  },
  {
    title: "Secure Payments",
    text: "Fast, encrypted checkout with trusted UK payment providers.",
  },
  {
    title: "UK Company",
    text: "Run professionally with clear terms, transparent draws and real prizes.",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="trust"
    >
      <div className="section-header">

        <span>WHY WATCH WINNERS</span>

        <h2>
          Fair.
          <br />
          Transparent.
          <br />
          Trusted.
        </h2>

        <p>
          Built around trust from day one. Every draw is genuine,
          every prize is real, and every winner is announced publicly.
        </p>

      </div>

      <div className="trust-grid">

        {trustItems.map((item) => (
          <article
            key={item.title}
            className="trust-card"
          >
            <div className="trust-icon">
              ✓
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </article>
        ))}

      </div>
    </section>
  );
}
