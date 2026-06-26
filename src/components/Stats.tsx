const stats = [
  {
    value: "£24M+",
    label: "Prizes Awarded",
  },
  {
    value: "8,700+",
    label: "Verified Winners",
  },
  {
    value: "100%",
    label: "Live Draws",
  },
  {
    value: "4.9★",
    label: "Trustpilot",
  },
];

export default function Stats() {
  return (
    <section className="stats">

      <div className="stats-container">

        {stats.map((item) => (
          <div
            className="stat"
            key={item.label}
          >
            <h2>{item.value}</h2>

            <p>{item.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}
