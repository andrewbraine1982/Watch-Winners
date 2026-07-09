export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h3>WATCH WINNERS</h3>

          <p>
            Premium UK luxury watch competitions featuring authentic
            Rolex timepieces, secure entries, live draws and verified
            winners.
          </p>

          <small>
            Watch Winners is a trading name of Winners Collective Ltd.
          </small>

        </div>

        <div>

          <h4>Explore</h4>

          <a href="/">Home</a>
          <a href="/#competitions">Competitions</a>
          <a href="/#winners">Winners</a>
          <a href="/#faq">FAQ</a>

        </div>

        <div>

          <h4>Legal</h4>

          <a href="/terms-and-conditions">
            Terms & Conditions
          </a>

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/cookie-policy">
            Cookie Policy
          </a>

          <a href="/responsible-play">
            Responsible Play
          </a>

        </div>

        <div>

          <h4>Company</h4>

          <p>
            Winners Collective Ltd
            <br />
            71–75 Shelton Street
            <br />
            London WC2H 9JQ
          </p>

          <a href="mailto:hello@watchwinners.co.uk">
            hello@watchwinners.co.uk
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Watch Winners. All rights reserved.
        </span>

        <span>
          Built with integrity. Drawn live. Winners verified.
        </span>

      </div>

    </footer>
  );
}
