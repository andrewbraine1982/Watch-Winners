const steps = [
  {
    number: "01",
    title: "Choose Your Watch",
    text: "Browse our live luxury watch competitions and select the prize you want to win.",
  },
  {
    number: "02",
    title: "Secure Your Tickets",
    text: "Purchase your entries securely online and receive instant confirmation.",
  },
  {
    number: "03",
    title: "Watch The Live Draw",
    text: "Every draw is streamed live with real winners announced publicly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how">

      <div className="section-header">

        <span>HOW IT WORKS</span>

        <h2>
          Three simple steps to your dream watch.
        </h2>

      </div>

      <div className="steps">

        {steps.map((step) => (
          <article
            key={step.number}
            className="step-card"
          >
            <span className="step-number">
              {step.number}
            </span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </article>
        ))}

      </div>

    </section>
  );
}
