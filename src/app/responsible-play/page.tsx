import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function ResponsiblePlayPage() {
  return (
    <>
      <main className="legalPage">

        <div className="legalContainer">

          <div className="legalHeader">

            <Link href="/" className="legalBrand">

              <Image
                src="/logo.png"
                alt="Watch Winners"
                width={70}
                height={70}
                priority
              />

              <div>
                <h2>WATCH WINNERS</h2>
                <span>Luxury Watch Competitions</span>
              </div>

            </Link>

            <div className="legalDivider" />

            <Link href="/" className="backHome">
              ← Back to Home
            </Link>

          </div>

          <span className="legalEyebrow">
            RESPONSIBLE PLAY
          </span>

          <h1>Play Responsibly</h1>

          <p className="legalIntro">
            At Watch Winners, we believe competitions should always be fun,
            affordable and enjoyable. We encourage every customer to play
            responsibly and never spend more than they can comfortably afford.
          </p>

          <p className="lastUpdated">
            Last updated: July 2026
          </p>

          <div className="legalCard">

            <h2>Play for Entertainment</h2>

            <p>
              Our competitions are designed for entertainment. Purchasing
              entries should always remain an enjoyable experience rather than
              a way to make money or solve financial difficulties.
            </p>

            <h2>Know Your Limits</h2>

            <p>
              Before entering any competition, consider your personal budget.
              Never spend money intended for bills, rent, food or other
              essential living expenses.
            </p>

            <h2>18+ Only</h2>

            <p>
              Watch Winners competitions are strictly available to people aged
              18 years or over. We carry out age and identity verification
              before prizes are awarded.
            </p>

            <h2>Take a Break</h2>

            <p>
              If participating in competitions stops being enjoyable, or you
              feel you are spending more than intended, we encourage you to
              take a break and seek support if required.
            </p>

            <h2>Need Support?</h2>

            <p>
              If you believe your participation is becoming a problem, support
              is available from organisations such as GamCare and BeGambleAware.
              Speaking to someone early can make a significant difference.
            </p>

          </div>

          <section className="legalContact">

            <h3>Need Help?</h3>

            <p>
              If you have any questions regarding responsible play or your
              account, our team is always happy to help.
            </p>

            <a href="mailto:hello@watchwinners.co.uk">
              hello@watchwinners.co.uk
            </a>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}
