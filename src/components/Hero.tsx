export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-mark">WATCH WINNERS</div>

      <div className="hero-content">
        <p className="hero-rating">★ Rated Excellent · 4.9/5 Trustpilot</p>

        <h1>
          Win the watch
          <br />
          of your dreams.
        </h1>

        <p>
          Luxury watch competitions with verified winners, live draws and
          premium prizes delivered across the UK.
        </p>

        <div className="hero-buttons">
          <a href="#competitions" className="hero-primary">
            Enter Now
          </a>

          <a href="#competitions" className="hero-secondary">
            View Competitions
          </a>
        </div>

        <div className="hero-note">
          Next live draw · Sunday 8PM
        </div>
      </div>

      <div className="hero-showcase">
        <div className="hero-logo-stamp">
          <img src="/logo.png" alt="Watch Winners" />
        </div>

        <div className="hero-watch-wrap">
          <img
            src="/images/watches/hero-watch.jpg"
            alt="Rolex GMT-Master II"
            className="hero-watch"
          />
        </div>

        <div className="hero-prize-card">
          <span>Current Draw</span>

          <h3>Rolex GMT-Master II</h3>

          <p>Retail value £11,950</p>

          <div className="hero-card-line" />

          <div className="hero-card-row">
            <div>
              <strong>187</strong>
              <small>Tickets Left</small>
            </div>

            <div>
              <strong>£14.99</strong>
              <small>Entry</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
