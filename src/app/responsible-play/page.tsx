import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function ResponsiblePlay() {
  return (
    <>
      <main
        style={{
          background: "#f8f6f1",
          minHeight: "100vh",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>

          <div style={{ marginBottom: "60px" }}>

            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                marginBottom: "30px",
              }}
            >
              <Image
                src="/logo.png"
                alt="Watch Winners"
                width={64}
                height={64}
                priority
              />

              <div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#111",
                    lineHeight: 1,
                  }}
                >
                  WATCH WINNERS
                </div>

                <div
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    marginTop: "4px",
                    letterSpacing: "1px",
                  }}
                >
                  Luxury Watch Competitions
                </div>
              </div>
            </Link>

            <br />

            <Link
              href="/"
              style={{
                color: "#0d3b2e",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "17px",
              }}
            >
              ← Back to Home
            </Link>

          </div>

          <div style={{ margin: "50px 0 40px" }}>
            <span
              style={{
                color: "#c8a45a",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Responsible Play
            </span>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "72px",
                margin: "16px 0",
                lineHeight: 1,
              }}
            >
              Play Responsibly
            </h1>

            <p style={{ color: "#777" }}>
              Last updated: July 2026
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "60px",
              boxShadow: "0 30px 80px rgba(0,0,0,.08)",
              lineHeight: 1.9,
            }}
          >
            <h2>Play for Entertainment</h2>

            <p>
              Our competitions are intended to be enjoyable. Please only enter
              competitions within your financial means.
            </p>

            <h2>Know Your Limits</h2>

            <p>
              Never chase losses or spend more than you can comfortably afford.
              If entering competitions stops being enjoyable, take a break.
            </p>

            <h2>18+ Only</h2>

            <p>
              Watch Winners competitions are strictly open to people aged 18 or
              over.
            </p>

            <h2>Need Support?</h2>

            <p>
              If you feel your participation in competitions is becoming a
              problem, seek support from an appropriate organisation or speak
              with someone you trust.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
