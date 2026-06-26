import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="#" className={styles.brand}>
          <span className={styles.mark}>WW</span>
          <span>WATCH<br />WINNERS</span>
        </a>

        <nav>
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#competitions" className={styles.navButton}>Enter Now</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.badge}>★ Rated Excellent · 4.9/5 Trustpilot</p>

          <h1>
            Win the<br />
            Rolex of<br />
            your dreams.
          </h1>

          <p className={styles.intro}>
            Enter luxury watch competitions from £14.99. Verified draws, real winners and premium timepieces delivered nationwide.
          </p>

          <div className={styles.actions}>
            <a href="#competitions" className={styles.primary}>Enter Now</a>
            <span>Next live draw · Sunday 8PM</span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageFrame}>
            <img src="/images/watches/hero-watch.jpg" alt="Rolex GMT-Master II" />
          </div>

          <div className={styles.prizeCard}>
            <span>Current Prize</span>
            <strong>Rolex GMT-Master II</strong>
            <small>Retail value £11,950</small>

            <div className={styles.ticketRow}>
              <div>
                <b>187</b>
                <em>tickets left</em>
              </div>
              <div>
                <b>£14.99</b>
                <em>per entry</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
