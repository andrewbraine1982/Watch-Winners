import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function ResponsiblePlayPage() {
  return (
    <>
      <main className="legalPage">
        <div className="legalContainer">

          <Link href="/" className="legalBrand">
            <Image
              src="/logo.png"
              alt="Watch Winners"
              width={64}
              height={64}
              priority
            />

            <div>
              <h2>WATCH WINNERS</h2>
              <span>Luxury Watch Competitions</span>
            </div>
          </Link>

          <Link href="/" className="backHome">
            ← Back to Home
          </Link>

          <span className="legalEyebrow">
            RESPONSIBLE PLAY
          </span>

          <h1>Play Responsibly</h1>

          <p className="lastUpdated">
            Last updated: July 2026
          </p>

          <div className="legalCard">

            <h2>Play for Entertainment</h2>

            <p>
              Watch Winners competitions are intended to be enjoyable
              entertainment. Please only enter competitions within your
              financial means and never spend more than you can comfortably
              afford.
            </p>

            <h2>Know Your Limits</h2>

            <p>
              Before entering a competition, consider your personal budget.
              Never use money intended for rent, bills, food or other essential
              living expenses.
            </p>

            <h2>18+ Only</h2>

            <p>
              All Watch Winners competitions are strictly available to persons
              aged 18 years or over. We carry out age and identity verification
              before prizes are awarded.
            </p>

            <h2>Take a Break</h2>

            <p>
              If participating in competitions stops being enjoyable, or you
              find yourself spending more than you intended, we encourage you to
              take a break before entering again.
            </p>

            <h2>Need Support?</h2>

            <p>
              If you believe your participation is becoming a problem, support
              is available from organisations such as GamCare and
              BeGambleAware. Speaking to someone early can make a significant
              difference.
            </p>

          </div>

          <section className="legalContact">

            <h3>Need Help?</h3>

            <p>
              If you have any questions about responsible play or your Watch
              Winners account, our support team is here to help.
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
