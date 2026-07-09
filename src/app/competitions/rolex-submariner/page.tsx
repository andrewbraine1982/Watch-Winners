"use client";

import "../competition.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

import SkillChallengeModal from "../../../components/SkillChallengeModal";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const competition = {
title: "Rolex Submariner",
image: "/images/watches/submariner.jpg",
price: 9.99,
retailValue: "£10,800",
cashAlternative: "£9,500",
drawDate: "14 July 2026",
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
  const router = useRouter();

  const [showSkillModal, setShowSkillModal] = useState(false);

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

               <button
  className="summary-button"
  onClick={() => setShowSkillModal(true)}
>
  Complete My Entry →
</button>
              </div>

            </div>

          </section>

        </section>

        </div>

</main>

<SkillChallengeModal
  open={showSkillModal}
  title={competition.title}
  image={competition.image}
  question="Which Rolex collection is shown?"
  answers={[
    "Daytona",
    "GMT-Master II",
    "Datejust",
    "Submariner",
  ]}
  correctAnswer="Submariner"
  onClose={() => setShowSkillModal(false)}
  onSuccess={() => {
    setShowSkillModal(false);

    router.push(
      `/checkout?watch=submariner&entries=${selectedEntries}`
    );
  }}
/>

<Footer />


    </>

  );
}
