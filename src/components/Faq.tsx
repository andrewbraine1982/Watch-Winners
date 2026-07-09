"use client";
import "./Faq.css";
import { useState } from "react";

const faqs = [
  {
    question: "How do I enter a competition?",
    answer:
      "Choose your watch, select your number of entries, answer the skill-based challenge correctly and complete secure checkout. Once payment is confirmed, your entries are automatically included in the live draw.",
  },
  {
    question: "Why is there a skill-based challenge?",
    answer:
      "Watch Winners operates as a prize competition rather than a lottery. Every entrant must correctly answer a watch-related question before qualifying for the live draw.",
  },
  {
    question: "Are the watches authentic?",
    answer:
      "Yes. Every prize is a genuine luxury watch sourced from trusted suppliers. Authenticity is verified before every competition.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Every eligible entry is assigned a unique number. Winners are selected during a live draw using an independently verified random number generator.",
  },
  {
    question: "Is every draw streamed live?",
    answer:
      "Yes. Every draw is broadcast live so entrants can watch the winning number being selected in real time.",
  },
  {
    question: "What happens if a competition doesn't sell out?",
    answer:
      "If a competition doesn't reach its required entry level, the closing date may be extended in accordance with our Terms & Conditions. Any changes are communicated clearly before the draw.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. Payments are processed securely using Stripe with industry-standard SSL encryption. We never store your card details.",
  },
  {
    question: "Who can enter?",
    answer:
      "Entrants must be at least 18 years old and comply with the eligibility requirements set out in our Terms & Conditions.",
  },
  {
    question: "Can I choose the cash alternative?",
    answer:
      "Where advertised, winners may choose the stated cash alternative instead of the watch prize.",
  },
  {
    question: "Is there a limit on entries?",
    answer:
      "Each competition has its own maximum entry limit, which is displayed on the competition page.",
  },
  {
    question: "Who are Watch Winners?",
    answer:
      "Watch Winners is a trading name of Winners Collective Ltd, a UK company created to make luxury watch ownership more accessible through transparent prize competitions.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">

      <div className="section-header">

        <span>EVERYTHING YOU NEED TO KNOW</span>

        <h2>
          Questions?
          <br />
          We've got answers.
        </h2>

      </div>

      <div className="faq-list">

        {faqs.map((faq, index) => (

          <div
            key={faq.question}
            className={`faq-item ${open === index ? "active" : ""}`}
          >

            <button
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              <span>{faq.question}</span>

              <strong>
                {open === index ? "−" : "+"}
              </strong>

            </button>

            {open === index && (

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}
