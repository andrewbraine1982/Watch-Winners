import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h3>WATCH WINNERS</h3>

          <p>
            Premium UK luxury watch competitions featuring authentic luxury
            timepieces, secure entries, live draws and verified winners.
          </p>

          <strong>
            Watch Winners is a trading name of Winners Collective Ltd.
          </strong>

        </div>

        <div>

          <h4>Explore</h4>

          <Link href="/">Home</Link>
          <a href="#competitions">Competitions</a>
          <a href="#winners">Winners</a>
          <a href="#faq">FAQ</a>

        </div>

        <div>

          <h4>Legal</h4>

          <Link href="/terms-and-conditions">
            Terms & Conditions
          </Link>

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/cookie-policy">
            Cookie Policy
          </Link>

          <Link href="/responsible-play">
            Responsible Play
          </Link>

        </div>

        <div>

          <h4>🇬🇧 UK Company</h4>

          <p>Winners Collective Ltd</p>

          <p>
            71–75 Shelton Street
            <br />
            London WC2H 9JQ
          </p>

          <p>hello@watchwinners.co.uk</p>

        </div>

        <div>

          <h4>Follow Us</h4>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Watch Winners.
        All rights reserved.

        <span>
          Luxury watches • Live draws • Verified winners
        </span>

      </div>

    </footer>
  );
}
