import styles from "./page.module.css";

export default function Home() {
  const competitions = [
    ["Rolex Daytona", "£22,500", "£19.99", "/images/watches/daytona.jpg"],
    ["Rolex Submariner", "£10,800", "£9.99", "/images/watches/submariner.jpg"],
    ["Rolex Datejust", "£8,950", "£7.99", "/images/watches/datejust.jpg"],
  ];

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
          <h1>Win the<br />Rolex of<br />your dreams.</h1>
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
              <div><b>187</b><em>tickets left</em></div>
              <div><b>£14.99</b><em>per entry</em></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div><strong>£24M+</strong><span>Worth of prizes given away</span></div>
        <div><strong>8,700+</strong><span>Verified winners</span></div>
        <div><strong>100%</strong><span>Live transparent draws</span></div>
      </section>

      <section id="competitions" className={styles.competitions}>
        <div className={styles.sectionHeading}>
          <span>Live Competitions</span>
          <h2>Choose your next luxury timepiece.</h2>
        </div>

        <div className={styles.grid}>
          {competitions.map(([title, value, price, image]) => (
            <article key={title} className={styles.card}>
              <img src={image} alt={title} />
              <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>Retail value {value}</p>
                <div className={styles.progress}><div /></div>
                <div className={styles.cardBottom}>
                  <strong>From {price}</strong>
                  <button>Enter Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className={styles.trust}>
        <p>Why enter with us?</p>
        <h2>Fair. Transparent. Trusted.</h2>
        <span>Every winner is announced publicly. Every draw is recorded. Every prize is real.</span>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Watch Winners. Play responsibly.
      </footer>
    </main>
  );
}
