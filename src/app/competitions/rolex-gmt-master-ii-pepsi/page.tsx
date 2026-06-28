"use client";

import "../competition.css";
import { useState } from "react";

import Navbar from "../../components/Navbar";

const competition = {
  title: "Rolex GMT-Master II Pepsi",
  image: "/images/watches/RolexPepsi.png",
  price: 14.99,
  totalEntries: 299,
  soldEntries: 184,
  tag: "LIVE COMPETITION",
  description: [
    "One authentic Rolex.",
    "One verified winner.",
    "Your chance starts with a single entry."
  ]
};

const ticketOptions = [
  { entries: 1, badge: "" },
  { entries: 5, badge: "MOST POPULAR" },
  { entries: 10, badge: "BEST VALUE" }
];

export default function CompetitionPage() {

  const [selectedEntries, setSelectedEntries] = useState(5);

  const total = (
    selectedEntries * competition.price
  ).toFixed(2);

  const soldPercent =
    (competition.soldEntries /
      competition.totalEntries) *
    100;

  const progress =
    selectedEntries === 1
      ? 20
      : selectedEntries === 5
      ? 60
      : 100;

  const progressMessage =
    selectedEntries === 1
      ? "Every winner starts with a single entry."
      : selectedEntries === 5
      ? "Building your entry."
      : "Ready for the live draw.";

return (

    <>

      <Navbar />

      <main className="competition-page">

      <div className="competition-layout">

        {/* LEFT COLUMN */}

        <aside className="competition-sidebar">

          <div className="sticky-panel">

        <div className="watch-stage">

<div className="gold-orbs">

  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>

</div>

  <img
    src={competition.image}
    alt={competition.title}
    className="competition-watch"
  />

</div>

            <div className="watch-details">

              <span className="competition-tag">
                {competition.tag}
              </span>

              <h1>
                {competition.title}
              </h1>

              <p className="competition-description">

                {competition.description.map(
                  (line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  )
                )}

              </p>

              <div className="watch-info">

                <div className="info-row">
                  <span>Entries Sold</span>

                  <strong>
                    {competition.soldEntries}/
                    {competition.totalEntries}
                  </strong>
                </div>

                <div className="progress-track">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${soldPercent}%`
                    }}
                  />

                </div>

                <ul>

                  <li>
                    ✓ Authentic Rolex
                  </li>

                  <li>
                    ✓ Winner verified live
                  </li>

                  <li>
                    ✓ Fully insured delivery
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </aside>

        {/* RIGHT COLUMN */}

        <section className="competition-content">

          <section className="entry-selector">

            <h2>
              Choose Your Entries
            </h2>

            <div className="entry-progress">

              <p className="progress-message">
                {progressMessage}
              </p>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`
                  }}
                />

              </div>

            </div>

            <div className="entry-grid">

              {ticketOptions.map((ticket) => (

                <div
                  key={ticket.entries}
                  className={`entry-card ${
                    selectedEntries ===
                    ticket.entries
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedEntries(
                      ticket.entries
                    )
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
                    {competition.title}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>Total</span>
                  <strong>
                    £{total}
                  </strong>
                </div>

                <ul className="summary-list">
                  <li>✓ Secure checkout</li>
                  <li>✓ Winner verified live</li>
                  <li>✓ Authentic Rolex guaranteed</li>
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

    </>

  );
}
