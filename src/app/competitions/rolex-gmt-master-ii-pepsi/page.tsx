"use client";

import "../competition.css";
import { useState } from "react";


import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const competition = {
  title: "Rolex GMT-Master II Pepsi",
  image: "/images/watches/RolexPepsi.png",
  price: 14.99,
  retailValue: "£18,000",
cashAlternative: "£16,500",
drawDate: "30 June 2026",
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

<div className="competition-meta">

  <div className="meta-item">
    <span>Retail Value</span>
    <strong>{competition.retailValue}</strong>
  </div>

  <div className="meta-item">
    <span>Cash Alternative</span>
    <strong>{competition.cashAlternative}</strong>
  </div>

  <div className="meta-item">
    <span>Draw Date</span>
    <strong>{competition.drawDate}</strong>
  </div>

</div>          


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
    <button
      key={ticket.entries}
      className={`entry-card ${
        selectedEntries === ticket.entries ? "active" : ""
      }`}
      onClick={() => setSelectedEntries(ticket.entries)}
    >
      {ticket.badge && (
        <span className="entry-badge">
          {ticket.badge}
        </span>
      )}

      <h3>{ticket.entries}</h3>

      <p>
        {ticket.entries === 1 ? "Entry" : "Entries"}
      </p>

      <strong>
        £{(ticket.entries * competition.price).toFixed(2)}
      </strong>
    </button>
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

     
<a
  href={`/checkout?watch=pepsi&entries=${selectedEntries}`}
  className="summary-button"
>
  Complete My Entry →
</a>

              </div>
            </div>

          </section>
        </section>

      </div>

      </main>

      <Footer />
    </>
  );
}
