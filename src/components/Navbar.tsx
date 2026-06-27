export default function Navbar() {
  return (
    <header className="ww-navbar">
      <div className="ww-container">
        <a href="/" className="ww-logo">
          <img
            src="/logo.png"
            alt="Watch Winners"
            className="ww-logo-image"
          />
        </a>

        <nav className="ww-nav-links">
          <a href="#competitions">Competitions</a>
          <a href="#how">How it Works</a>
          <a href="#winners">Winners</a>
          <a href="#trust">Trust</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
  href="#competitions"
  className="ww-nav-cta"
>
  Enter Now
</a>
      </div>
    </header>
  );
}
