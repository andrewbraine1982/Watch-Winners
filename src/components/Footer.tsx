export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div>
          <h3>WATCH WINNERS</h3>

          <p>
            Premium UK luxury watch competitions with live draws,
            verified winners and genuine prizes.
          </p>
        </div>

        <div>
          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Reviews</a>
          <a href="#">Winners</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>Legal</h4>

          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Play Responsibly</a>
        </div>

        <div>
          <h4>Follow</h4>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Watch Winners. All rights reserved.
      </div>
    </footer>
  );
}
