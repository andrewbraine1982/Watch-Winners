"use client";

import { useEffect, useState } from "react";

function getNextSunday8pm() {
  const now = new Date();
  const target = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7;

  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(20, 0, 0, 0);

  if (target <= now) target.setDate(target.getDate() + 7);

  return target;
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const target = getNextSunday8pm().getTime();
      const now = Date.now();
      const distance = target - now;

      setTimeLeft({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-mark">WATCH WINNERS</div>

      <div className="hero-content">
 <div className="hero-rating-premium">

  <div className="trust-stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>

  <div className="trust-copy">
    <strong>Rated Excellent</strong>

    <small>4.9/5 Trustpilot</small>

    <small>4,500+ Reviews</small>
  </div>

</div>

        <h1>
          Win the
          <br />
          watch
          <br />
          of your
          <br />
          dreams.
        </h1>

        <p>
          Luxury watch competitions with verified winners, live draws and
          premium prizes delivered across the UK.
        </p>

        <div className="hero-buttons">
        <a
  href="/competitions/rolex-gmt-master-ii-pepsi"
  className="hero-primary ww-nav-cta"
>
  Enter Now
</a>

    <a href="/#competitions" className="hero-secondary">
  View Competitions
</a>
        </div>

        <div className="hero-countdown">
          <span>Next live draw</span>

          <div className="countdown-box">
            <strong>{timeLeft.days}</strong>
            <small>Days</small>
          </div>

          <div className="countdown-box">
            <strong>{timeLeft.hours}</strong>
            <small>Hours</small>
          </div>

          <div className="countdown-box">
            <strong>{timeLeft.minutes}</strong>
            <small>Mins</small>
          </div>

          <div className="countdown-box pulse">
            <strong>{timeLeft.seconds}</strong>
            <small>Secs</small>
          </div>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="hero-watch-wrap">
          <img
    src="/images/watches/hero-watch.avif"
            alt="Rolex GMT-Master II"
            className="hero-watch"
          />
        </div>

        <div className="hero-prize-card">
          <span>Current Draw</span>

          <h3>Rolex GMT-Master II</h3>

          <p>Retail value £11,950</p>

          <div className="hero-card-line" />

          <div className="hero-card-row">
            <div>
              <strong>187</strong>
              <small>Tickets Left</small>
            </div>

            <div>
              <strong>£14.99</strong>
              <small>Entry</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
