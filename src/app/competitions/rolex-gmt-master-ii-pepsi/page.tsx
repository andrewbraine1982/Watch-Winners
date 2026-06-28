"use client";
import { useState } from "react";
export default function CompetitionPage() {
  const [selectedEntries, setSelectedEntries] = useState(5);
  return (
    <main className="competition-page">

      <section className="competition-hero">

       <div className="competition-left">
  <img
    src="/images/watches/RolexPepsi.png"
    alt="Rolex GMT-Master II Pepsi"
    className="competition-watch"
  />
</div>

        <div className="competition-right">

          <span className="competition-tag">
            LIVE COMPETITION
          </span>

          <h1>
            Rolex GMT-Master II Pepsi
          </h1>

          <p className="competition-subtitle">
            One authentic Rolex.
            One verified winner.
            Your chance starts with a single entry.
          </p>

        </div>

      </section>
      <section className="entry-selector">

  <h2>Choose Your Entries</h2>

  <div className="entry-grid">

    <div className="entry-card active">
      <span className="entry-number">1</span>
      <small>£14.99</small>
    </div>

    <div className="entry-card popular">
      <span className="entry-badge">
        MOST POPULAR
      </span>

      <span className="entry-number">5</span>

      <small>£74.95</small>
    </div>

    <div className="entry-card premium">
      <span className="entry-badge">
        BEST VALUE
      </span>

      <span className="entry-number">10</span>

      <small>£149.90</small>
    </div>

  </div>

</section>

    </main>
  );
}
