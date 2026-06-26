export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-rating">
          ★ Rated Excellent • 4.9/5 Trustpilot
        </div>

        <h1>
          Win the
          <br />
          Rolex of
          <br />
          your dreams.
        </h1>

        <p>
          Luxury watch competitions with verified winners,
          live draws and premium prizes delivered across the UK.
        </p>

        <div className="hero-buttons">

          <a
            href="#competitions"
            className="hero-primary"
          >
            Enter from £14.99
          </a>

          <span>
            Next Live Draw • Sunday 8PM
          </span>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/images/watches/hero-watch.jpg"
          alt="Rolex GMT Master II"
        />

        <div className="hero-card">

          <small>CURRENT DRAW</small>

          <h3>
            Rolex GMT-Master II
          </h3>

          <p>
            Retail £11,950
          </p>

          <div className="hero-card-row">

            <div>

              <strong>187</strong>

              <span>Tickets Left</span>

            </div>

            <div>

              <strong>£14.99</strong>

              <span>Entry</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
