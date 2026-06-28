"use client";

import { useState } from "react";

export default function CompetitionPage() {
  const competition = {
    name: "Rolex GMT-Master II Pepsi",
    image: "/images/watches/RolexPepsi.png",
    price: 14.99,
    tag: "LIVE COMPETITION",
    subtitle: [
      "One authentic Rolex.",
      "One verified winner.",
      "Your chance starts with a single entry."
    ]
  };

  const tickets = [
    { entries: 1, badge: "" },
    { entries: 5, badge: "MOST POPULAR" },
    { entries: 10, badge: "BEST VALUE" }
  ];

  const [selectedEntries, setSelectedEntries] = useState(5);

  const total = (selectedEntries * competition.price).toFixed(2);

  const progress =
    selectedEntries === 1
      ? 20
      : selectedEntries === 5
      ? 60
      : 100;

  const progressText =
    selectedEntries === 1
      ? "Every winner starts with a single entry."
      : selectedEntries === 5
      ? "Building your entry."
      : "Ready for the live draw.";

  return (
    <main className="competition-page">

      <div className="competition-layout">

        <aside className="competition-sidebar">

          <div className="sticky-watch">

            <img
              src={competition.image}
              alt={competition.name}
              className="competition-watch"
            />

          </div>

        </aside>

        <section className="competition-content">

          <section className="competition-hero">

            <span className="competition-tag">
              {competition.tag}
            </span>

            <h1>{competition.name}</h1>

            <p className="competition-subtitle">
              {competition.subtitle.map((line) => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </p>

          </section>

          <section className="entry-selector">

            <h2>Choose Your Entries</h2>

            <div className="progress-text">
              {progressText}
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              />

            </div>

            <div className="entry-grid">

              {tickets.map((ticket) => (
                <div
                  key={ticket.entries}
                  className={`entry-card ${
                    selectedEntries === ticket.entries
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedEntries(ticket.entries)
                  }
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
                    £{(
                      ticket.entries *
                      competition.price
                    ).toFixed(2)}
                  </small>
                </div>
              ))}

            </div>
                        <div className="entry-summary">

              <div className="summary-card">

                <p className="summary-label">
                  YOUR ENTRY
                </p>

                <h3>
                  {selectedEntries}{" "}
                  {selectedEntries === 1
                    ? "Entry"
                    : "Entries"}
                </h3>

                <div className="summary-row">
                  <span>Competition</span>
                  <strong>
                    {competition.name}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>Total</span>
                  <strong>£{total}</strong>
                </div>

                <ul className="summary-list">
                  <li>✓ Authentic Rolex</li>
                  <li>✓ Winner verified live</li>
                  <li>✓ Secure checkout</li>
                </ul>

                <button className="summary-button">
                  Complete My Entry →
                </button>

              </div>

            </div>

          </section>

        </section>

      </div>

    </main>
  );
}
