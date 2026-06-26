const faqs = [
  {
    question: "How are winners chosen?",
    answer:
      "Every competition concludes with a live draw streamed publicly for complete transparency.",
  },
  {
    question: "When do I receive my prize?",
    answer:
      "Most winners receive their watch within a few working days after identity verification.",
  },
  {
    question: "Can I watch the draw live?",
    answer:
      "Yes. Every draw is broadcast live and remains available to watch afterwards.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. The ticket price displayed is the total amount you pay to enter.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <span>FAQ</span>

        <h2>
          Questions?
          <br />
          We've got answers.
        </h2>
      </div>

      <div className="faq-grid">
        {faqs.map((faq) => (
          <article key={faq.question} className="faq-card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
