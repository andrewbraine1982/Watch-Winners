import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <>
      <main
        style={{
          background: "#f8f6f1",
          minHeight: "100vh",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >

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

          <div
            style={{
              marginTop: "50px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                color: "#c8a45a",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Legal Information
            </span>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "72px",
                margin: "16px 0",
                lineHeight: 1,
                color: "#111",
              }}
            >
              Terms & Conditions
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
            <h2>Eligibility</h2>

            <p>
              Entrants must be at least 18 years old and legally permitted to
              participate in competitions within the United Kingdom.
            </p>

            <h2>Skill-Based Competition</h2>

            <p>
              Every entry requires the successful completion of our
              skill-based challenge before checkout can be completed.
            </p>

            <h2>Winner Selection</h2>

            <p>
              Winners are selected using a transparent live draw after each
              competition closes. Winners will be contacted using the details
              provided during entry.
            </p>

            <h2>Prizes</h2>

            <p>
              All prizes are described on the relevant competition page. Where
              a cash alternative is available, this will be clearly stated
              before entry.
            </p>

            <h2>Refunds</h2>

            <p>
              Competition entries are non-refundable except where required by
              applicable law.
            </p>

            <h2>Acceptance</h2>

            <p>
              By accessing this website and entering any Watch Winners
              competition, you confirm that you have read, understood and agree
              to these Terms & Conditions.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
