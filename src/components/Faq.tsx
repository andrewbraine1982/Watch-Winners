"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I enter a competition?",
    answer:
      "Choose your competition, select your entries, answer the skill-based challenge correctly and complete secure checkout. Once payment is confirmed, your entries are automatically included in the live draw.",
  },
  {
    question: "Why is there a skill-based challenge?",
    answer:
      "Watch Winners operates as a skill-based competition rather than a lottery. Every entrant must correctly answer a watch-related question before entering the draw.",
  },
  {
    question: "Are the watches authentic?",
    answer:
      "Yes. Every prize is an authentic luxury timepiece. Each watch is verified before being offered as a prize.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Every eligible entry is entered into a live draw using an independently verified random number generator. Every valid entry has an equal chance of winning.",
  },
  {
    question: "Is every draw streamed live?",
    answer:
      "Yes. Every draw is streamed live so entrants can watch the winning ticket being selected in real time.",
  },
  {
    question: "How will I know if I've won?",
    answer:
      "We'll contact you directly using the email address and phone number provided during checkout. Winners are also announced on our website.",
  },
  {
    question: "What happens if a competition doesn't sell out?",
    answer:
      "If required, a competition may be extended in accordance with our Terms & Conditions. Any revised draw date will always be published.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. Payments are processed using secure encrypted payment technology. Watch Winners never stores your card details.",
  },
  {
    question: "Who can enter?",
    answer:
      "Entrants must be aged 18 or over and satisfy the eligibility requirements set out in our Terms & Conditions.",
  },
  {
    question: "Can I choose the cash alternative?",
    answer:
      "Where a cash alternative is offered, the winner may choose either the watch or the advertised cash prize.",
  },
  {
    question: "Is there a limit on entries?",
    answer:
      "Yes. Some competitions have a maximum number of entries per person. Any limits are clearly displayed on the competition page.",
  },
  {
    question: "Who are Watch Winners?",
    answer:
      "Watch Winners is a trading name of Winners Group Ltd, a UK registered company based in London, committed to running fair, transparent luxury watch competitions.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <span>FAQ</span>

        <h2>
          Everything you
          <br />
          need to know.
        </h2>
      </div>

      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <article
            key={faq.question}
            className={`faq-card ${open === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
