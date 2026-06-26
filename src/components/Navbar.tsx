type NavbarProps = {
  brand?: string;
};

export default function Navbar({
  brand = "WATCH WINNERS",
}: NavbarProps) {
  return (
    <header className="ww-navbar">
      <div className="ww-container">

        <a href="/" className="ww-logo">

          <div className="ww-logo-mark">
            W
          </div>

          <div className="ww-logo-text">
            <span>WATCH</span>
            <span>WINNERS</span>
          </div>

        </a>

        <nav className="ww-nav-links">

          <a href="#competitions">
            Competitions
          </a>

          <a href="#how">
            How it Works
          </a>

          <a href="#winners">
            Winners
          </a>

          <a href="#trust">
            Trust
          </a>

          <a href="#faq">
            FAQ
          </a>

        </nav>

        <a
          href="#competitions"
          className="ww-enter-button"
        >
          Enter Now
        </a>

      </div>
    </header>
  );
}
