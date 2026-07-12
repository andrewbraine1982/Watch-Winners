import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./journal.css";

export default function JournalPage() {
  return (
    <>
      <Navbar showCTA={false} />

      {/* HERO IMAGE */}

      <section className="journal-hero"></section>

      <main className="journal-page">

        {/* FEATURED */}

        <section className="journal-overlay">

          <p className="journal-label">
            FEATURED ARTICLE
          </p>

          <h1>
            Patek Philippe 6105G
            <br />
            Celestial Sunrise &amp; Sunset
          </h1>

          <p className="journal-intro">
            An exploration of one of Patek Philippe's most extraordinary
            astronomical complications and why it perfectly captures the
            romance of traditional haute horlogerie.
          </p>

          <a href="#" className="journal-button">
            Read Article →
          </a>

        </section>

        {/* FROM THE JOURNAL */}

        <section className="journal-section">

          <h2>From the Journal</h2>

          <div className="journal-grid">

            <article className="journal-card featured">
              <span>Featured Editorial</span>

              <h3>
                Grail Watches:
                <br />
                Why The Journey Matters More Than The Destination
              </h3>

              <p>Coming Soon</p>
            </article>

            <article className="journal-card">
              <h3>
                The Rolex GMT-Master II
              </h3>

              <p>
                How The Pepsi Became A Modern Icon
              </p>
            </article>

            <article className="journal-card">
              <h3>
                Why Patek Philippe Defines Haute Horlogerie
              </h3>

              <p>Coming Soon</p>
            </article>

            <article className="journal-card">
              <h3>
                The Rolex Datejust
              </h3>

              <p>
                The Perfect First Luxury Watch?
              </p>
            </article>

            <article className="journal-card">
              <h3>
                The Rise Of Independent Watchmakers
              </h3>

              <p>Coming Soon</p>
            </article>

            <article className="journal-card">
              <h3>
                Rolex vs Grand Seiko
              </h3>

              <p>
                Different Philosophies Of Perfection
              </p>
            </article>

          </div>

        </section>

        {/* BRANDS */}

        <section className="journal-section">

          <h2>Explore by Brand</h2>

          <div className="brand-grid">

            <div className="brand-card">Rolex</div>

            <div className="brand-card">
              Patek Philippe
            </div>

            <div className="brand-card">
              Audemars Piguet
            </div>

            <div className="brand-card">
              Omega
            </div>

            <div className="brand-card">
              Grand Seiko
            </div>

            <div className="brand-card">
              Cartier
            </div>

          </div>

        </section>

        {/* NEWSLETTER */}

        <section className="newsletter">

          <h2>
            Join The Watch Winners Journal
          </h2>

          <p>
            Monthly articles, collector insights,
            competition launches and stories from the world
            of haute horlogerie.
          </p>

          <button className="journal-button">
            Subscribe
          </button>

        </section>

      </main>

      <Footer />

    </>
  );
}
