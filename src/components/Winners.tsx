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
  name: "Richard F.",
  town: "Southampton",
  watch: "Rolex Yacht-Master",
  image: "/images/winners/richard-f.jpg",
  quote:
    "I still can't believe it! I am so delighted! Andrew at Watch Winners was so helpful and professional.",
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
      <div className="winner-cta">
  <h3>The next winner hasn't entered... yet.</h3>

  <p>
    Every watch is authentic. Every draw is independently verified.
    Every winner starts with a single entry.
  </p>

  <a href="#competitions" className="winner-cta-button ww-nav-cta">
    View Live Competitions →
  </a>
</div>
    </section>
  );
}
