import styles from "./page.module.css";
import { competitions, currentDraw, site, winners } from "../data/site";

export default function Home() {
  const featuredWinner = winners[0];

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.logo}>WATCH<br /><span>WINNERS</span></div>
        <nav>
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
        </nav>
        <a className={styles.navButton} href="#competitions">Enter Now</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.rating}>★ {site.trustpilot}</p>
          <h1>Win Your<br />Dream Rolex</h1>
          <p>{currentDraw.subtitle}</p>
          <a href="#competitions" className={styles.goldButton}>
            Enter from {currentDraw.ticketPrice}
          </a>
        </div>

        <div className={styles.heroCard}>
          <div>
            <p>Hero image</p>
            <small>public{currentDraw.image}</small>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        {site.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="winners" className={styles.winner}>
        <div className={styles.winnerImage}>
          <span>Winner photo<br />public{featuredWinner.image}</span>
        </div>
        <div className={styles.winnerText}>
          <p className={styles.eyebrow}>Latest Winner</p>
          <h2>{featuredWinner.name} won this {featuredWinner.prize}</h2>
          <blockquote>“{featuredWinner.quote}”</blockquote>
          <p>{featuredWinner.location}</p>
          <button>Watch Bradley’s Story</button>
        </div>
      </section>

      <section id="competitions" className={styles.competitions}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Live Competitions</p>
          <h2>Luxury Timepieces Up for Grabs</h2>
        </div>

        <div className={styles.grid}>
          {competitions.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.watchImage}>
                <span>public{item.image}</span>
              </div>
              <h3>{item.title}</h3>
              <p>Retail value {item.value}</p>
              <div className={styles.progress}>
                <div style={{ width: `${item.sold}%` }} />
              </div>
              <div className={styles.cardFooter}>
                <span>From {item.ticketPrice}</span>
                <button>Enter Now</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className={styles.trust}>
        <h2>Fair.<br />Transparent.<br />Trusted.</h2>
        <p>By 8,700+ winners. Every draw is live streamed, recorded and independently verified.</p>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} {site.brand}. Play responsibly.
      </footer>
    </main>
  );
}
