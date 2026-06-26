const winners = [
  {
    name: "Bradley S.",
    town: "Leeds",
    watch: "Rolex GMT-Master II",
    image: "/images/winners/bradley.jpg",
    quote:
      "I genuinely thought it was a prank until the Rolex arrived the next morning.",
  },
  {
    name: "James M.",
    town: "Manchester",
    watch: "Rolex Submariner",
    image: "/images/winners/james.jpg",
    quote:
      "Everything was transparent from start to finish. I still can't believe I won.",
  },
  {
    name: "Oliver T.",
    town: "Bristol",
    watch: "Rolex Datejust",
    image: "/images/winners/oliver.jpg",
    quote:
      "The live draw gave me complete confidence. Brilliant company.",
  },
];

export default function Winners() {
  return (
    <section
      id="winners"
      className="winners"
    >
      <div className="section-header">
        <span>REAL WINNERS</span>

        <h2>
          Luxury watches.
          <br />
          Real people.
        </h2>
      </div>

      <div className="winner-grid">
        {winners.map((winner) => (
          <article
            key={winner.name}
            className="winner-card"
          >
            <img
              src={winner.image}
              alt={winner.name}
            />

            <div className="winner-content">
              <h3>{winner.name}</h3>

              <small>
                {winner.town} • {winner.watch}
              </small>

              <p>
                "{winner.quote}"
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
