const watches = [
  {
    title: "Rolex Daytona",
    value: "£22,500",
    price: "£19.99",
    sold: 82,
    image: "/images/watches/daytona.jpg",
  },
  {
    title: "Rolex Submariner",
    value: "£10,800",
    price: "£9.99",
    sold: 71,
    image: "/images/watches/submariner.jpg",
  },
  {
    title: "Rolex Datejust",
    value: "£8,950",
    price: "£7.99",
    sold: 64,
    image: "/images/watches/datejust.jpg",
  },
];

export default function Competitions() {
  return (
    <section
      id="competitions"
      className="competitions"
    >
      <div className="section-header">
        <span>LIVE COMPETITIONS</span>

        <h2>
          Choose your next
          <br />
          luxury timepiece.
        </h2>
      </div>

      <div className="competition-grid">
        {watches.map((watch) => (
          <article
            key={watch.title}
            className="competition-card"
          >
            <img
              src={watch.image}
              alt={watch.title}
            />

            <div className="competition-content">
              <h3>{watch.title}</h3>

              <p>Retail Value {watch.value}</p>

              <div className="progress">
                <div
                  style={{
                    width: `${watch.sold}%`,
                  }}
                />
              </div>

              <div className="competition-footer">
                <strong>
                  From {watch.price}
                </strong>

                <button>
                  Enter Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
