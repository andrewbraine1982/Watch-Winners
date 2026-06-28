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

{[
  { entries: 1, price: 14.99, badge: "" },
  { entries: 5, price: 74.95, badge: "MOST POPULAR" },
  { entries: 10, price: 149.90, badge: "BEST VALUE" },
].map((ticket) => (

  <div
    key={ticket.entries}
    className={`entry-card ${
      selectedEntries === ticket.entries ? "selected" : ""
    }`}
    onClick={() => setSelectedEntries(ticket.entries)}
  >

    {ticket.badge && (
      <span className="entry-badge">
        {ticket.badge}
      </span>
    )}

    <span className="entry-number">
      {ticket.entries}
    </span>

    <small>
      £{ticket.price.toFixed(2)}
    </small>

  </div>

))}
</div>        

   

 

</section>

    </main>
  );
}
