"use client";

import { useEffect, useState } from "react";

import "./AgeGate.css";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [underAge, setUnderAge] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");

    if (!verified) {
      setVisible(true);
    }
  }, []);

  function handleContinue() {
    localStorage.setItem("ageVerified", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="agegate-overlay">
      <div className="agegate-card">
        <span className="agegate-tag">
          WATCH WINNERS
        </span>

        {!underAge ? (
          <>
            <h1>Welcome to Watch Winners</h1>

            <p className="agegate-text">
              Our competitions are exclusively open to
              participants aged <strong>18 years or over</strong>.
            </p>

            <p className="agegate-text">
              Please confirm your age before entering.
            </p>

            <div className="agegate-buttons">
              <button
                className="agegate-secondary"
                onClick={() => setUnderAge(true)}
              >
                I'm Under 18
              </button>

              <button
                className="agegate-primary"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>

            <p className="agegate-footer">
              By continuing you agree to our Terms &
              Conditions.
            </p>
          </>
        ) : (
          <>
            <h1>Sorry</h1>

            <p className="agegate-text">
              Watch Winners competitions are only
              available to participants aged 18 years
              or over.
            </p>

            <button
              className="agegate-primary"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
