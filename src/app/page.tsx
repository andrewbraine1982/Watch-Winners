import styles from "./page.module.css";

export default function Home() {
  const competitions = [
    {
      title: "Rolex Daytona",
      value: "£22,500",
      price: "£19.99",
      image: "/images/watches/daytona.jpg",
      sold: "82%",
    },
    {
      title: "Rolex Submariner",
      value: "£10,800",
      price: "£9.99",
      image: "/images/watches/submariner.jpg",
      sold: "71%",
    },
    {
      title: "Rolex Datejust",
      value: "£8,950",
      price: "£7.99",
      image: "/images/watches/datejust.jpg",
      sold: "64%",
    },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="#" className={styles.brand}>
          <span className={styles.mark}>WW</span>
          <span>
            Watch
            <br />
            Winners
          </span>
        </a>

        <nav>
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#competitions" className={styles.navButton}>
          Enter Now
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.badge}>★ 4.9/5 Trustpilot · 8,700+ winners</p>

          <h1>
            Win the Rolex
            <br />
            of your dreams.
          </h1>

          <p className={styles.heroText}>
            Enter luxury watch competitions from £14.99. Live draws, verified
            winners and premium timepieces delivered nationwide.
          </p>

          <div className={styles.heroActions}>
            <a href="#competitions" className={styles.primaryButton}>
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

        <div className={styles.heroImageWrap}>
          <img src="/images/watches/hero-watch.jpg" alt="Rolex GMT-Master II" />
          <div className={styles.prizePanel}>
            <span>Current Prize</span>
            <strong>Rolex GMT-Master II</strong>
            <small>Retail value £11,950</small>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>£24M+</strong>
          <span>Worth of prizes given away</span>
        </div>
        <div>
          <strong>8,700+</strong>
          <span>Verified winners</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Live transparent draws</span>
        </div>
      </section>

      <section id="competitions" className={styles.competitions}>
        <div className={styles.sectionHeading}>
          <span>Live Competitions</span>
          <h2>Choose your next luxury timepiece.</h2>
        </div>

        <div className={styles.grid}>
          {competitions.map((item) => (
            <article key={item.title} className={styles.card}>
              <img src={item.image} alt={item.title} />
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>Retail value {item.value}</p>
                <div className={styles.progress}>
                  <div style={{ width: item.sold }} />
                </div>
                <div className={styles.cardBottom}>
                  <strong>From {item.price}</strong>
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
        <span>
          Every winner is announced publicly. Every draw is recorded. Every prize
          is real.
        </span>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Watch Winners. Play responsibly.
      </footer>
    </main>
  );
}
