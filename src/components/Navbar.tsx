"use client";

import { useState } from "react";

type NavbarProps = {
  showCTA?: boolean;
};

export default function Navbar({
  showCTA = true,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="ww-navbar">
      <div className="ww-container">
        <a href="/" className="ww-logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Watch Winners"
            className="ww-logo-image"
          />
        </a>

        <nav className="ww-nav-links">
          <a href="/#competitions">Competitions</a>
          <a href="/journal">Journal</a>
          <a href="/#how">How it Works</a>
          <a href="/#winners">Winners</a>
          <a href="/#trust">Trust</a>
          <a href="/#faq">FAQ</a>
        </nav>

        {showCTA && (
          <a href="/#competitions" className="ww-nav-cta">
            Enter Now
          </a>
        )}

        <button
          type="button"
          className={`ww-menu-button ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`ww-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/#competitions" onClick={closeMenu}>
          Competitions
        </a>

        <a href="/journal" onClick={closeMenu}>
          Journal
        </a>

        <a href="/#how" onClick={closeMenu}>
          How it Works
        </a>

        <a href="/#winners" onClick={closeMenu}>
          Winners
        </a>

        <a href="/#trust" onClick={closeMenu}>
          Trust
        </a>

        <a href="/#faq" onClick={closeMenu}>
          FAQ
        </a>

        {showCTA && (
          <a
            href="/#competitions"
            className="ww-mobile-cta"
            onClick={closeMenu}
          >
            Enter Now
          </a>
        )}
      </nav>
    </header>
  );
}
