const winners = [
  {
   name: "Raj S.",
town: "Leeds",
watch: "Rolex Datejust",
   image: "/images/winners/winner1.avif",
    quote:
      "I genuinely thought it was a prank until the Rolex arrived the next morning.",
  },
  {
 name: "Michael H.",
town: "Manchester",
watch: "Rolex Daytona",
   image: "/images/winners/winner2.jpg",
    quote:
      "Everything was transparent from start to finish. I still can't believe I won.",
  },
  {
  name: "Stephen R.",
town: "Bristol",
watch: "Rolex GMT-Master II Pepsi",
   image: "/images/winners/winner3.jpg",
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
          <div className="winner-image">
    <img
        src={winner.image}
        alt={winner.name}
    />

    <div className="winner-badge">
        ✓ VERIFIED WINNER
    </div>
</div>

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
