"use client";

import { useState } from "react";

export default function CompetitionPage() {
  const [selectedEntries, setSelectedEntries] = useState(5);

  const tickets = [
    { entries: 1, price: 14.99, badge: "" },
    { entries: 5, price: 74.95, badge: "MOST POPULAR" },
    { entries: 10, price: 149.9, badge: "BEST VALUE" },
  ];

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
          <span className="competition-tag">LIVE COMPETITION</span>

          <h1>Rolex GMT-Master II Pepsi</h1>

          <p className="competition-subtitle">
            One authentic Rolex.
            <br />
            One verified winner.
            <br />
            Your chance starts with a single entry.
          </p>
        </div>
      </section>

     <section className="competition-configurator">

<div className="config-left">

  <div className="sticky-watch">

    <img
      src="/images/watches/RolexPepsi.png"
      alt="Rolex GMT-Master II Pepsi"
      className="competition-watch"
    />

  </div>

</div>

<div className="config-right">

<section className="entry-selector">
        <h2>Choose Your Entries</h2>
        <div className="entry-progress">

  <p className="progress-message">
    {selectedEntries === 1 &&
      "Every winner starts with a single entry."}

    {selectedEntries === 5 &&
      "Building your entry."}

    {selectedEntries === 10 &&
      "Ready for the live draw."}
  </p>

  <div className="progress-track">

    <div
      className="progress-fill"
      style={{
        width:
          selectedEntries === 1
            ? "20%"
            : selectedEntries === 5
            ? "60%"
            : "100%"
      }}
    />

  </div>

</div>

        <div className="entry-grid">
          {tickets.map((ticket) => (
            <div
              key={ticket.entries}
              className={`entry-card ${
                selectedEntries === ticket.entries ? "selected" : ""
              }`}
              onClick={() => setSelectedEntries(ticket.entries)}
            >
              {ticket.badge && (
                <span className="entry-badge">{ticket.badge}</span>
              )}

              <span className="entry-number">{ticket.entries}</span>

              <small>£{ticket.price.toFixed(2)}</small>
            </div>
          ))}
        </div>
        <div className="entry-summary">

  <div className="summary-card">

    <p className="summary-label">YOUR ENTRY</p>

    <h3>{selectedEntries} Entries</h3>

    <div className="summary-row">
      <span>Competition</span>
      <strong>Rolex GMT-Master II Pepsi</strong>
    </div>

    <div className="summary-row">
      <span>Total</span>
      <strong>£{(selectedEntries * 14.99).toFixed(2)}</strong>
    </div>

    <ul className="summary-list">
      <li>✓ Secure checkout</li>
      <li>✓ Winner verified live</li>
      <li>✓ Authentic Rolex guaranteed</li>
    </ul>

    <button className="summary-button">
      Secure {selectedEntries} {selectedEntries === 1 ? "Entry" : "Entries"} →
    </button>

  </div>

</div>
      </section>

</div>

</section>

</main>
  );
}
