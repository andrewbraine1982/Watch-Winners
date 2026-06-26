import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#">
          <span className={styles.crown}>◆</span>
          <span className={styles.brandText}>
            WATCH
            <br />
            WINNERS
          </span>
        </a>

        <nav>
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className={styles.navButton} href="#competitions">
          Enter Now
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.trustBadge}>★ 4.9/5 Trustpilot · 8,700+ winners</div>

          <h1>
            Win the
            <br />
            Rolex of
            <br />
            your dreams.
          </h1>

          <p>
            Enter verified luxury watch competitions from £14.99. Live draws,
            real winners and premium timepieces delivered nationwide.
          </p>

          <div className={styles.heroActions}>
            <a href="#competitions" className={styles.goldButton}>
              Enter from £14.99
            </a>
            <span>Next live draw closes soon</span>
          </div>

          <div className={styles.countdown}>
            <div>
              <strong>05</strong>
              <span>Hours</span>
            </div>
            <div>
              <strong>42</strong>
              <span>Minutes</span>
            </div>
            <div>
              <strong>17</strong>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <img src="/images/watches/hero-watch.jpg" alt="Rolex GMT-Master II" />
          <div className={styles.prizeCard}>
            <span>Current Prize</span>
            <strong>Rolex GMT-Master II</strong>
            <small>Retail value £11,950</small>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>£24M+</strong>
          <span>Worth of watches given away</span>
        </div>
        <div>
          <strong>8,700+</strong>
          <span>Verified winners</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Live & transparent draws</span>
        </div>
      </section>

      <section id="competitions" className={styles.competitions}>
        <div className={styles.sectionHeading}>
          <span>Live Competitions</span>
          <h2>Choose your next luxury watch.</h2>
        </div>

        <div className={styles.grid}>
          {[
            ["Rolex Daytona", "£22,500", "£19.99", "daytona.jpg"],
            ["Rolex Submariner", "£10,800", "£9.99", "submariner.jpg"],
            ["Rolex Datejust", "£8,950", "£7.99", "datejust.jpg"],
          ].map(([title, value, price, image]) => (
            <article className={styles.card} key={title}>
              <img src={`/images/watches/${image}`} alt={title} />
              <h3>{title}</h3>
              <p>Retail value {value}</p>
              <div className={styles.progress}>
                <div />
              </div>
              <div className={styles.cardBottom}>
                <strong>From {price}</strong>
                <button>Enter Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className={styles.trust}>
        <h2>Fair. Transparent. Trusted.</h2>
        <p>
          Every winner is announced publicly. Every draw is independently verified.
          Every prize is real.
        </p>
      </section>

      <footer className={styles.footer}>© Watch Winners. Play responsibly.</footer>
    </main>
  );
}
