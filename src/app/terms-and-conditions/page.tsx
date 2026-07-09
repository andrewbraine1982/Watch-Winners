import Link from "next/link";
import Footer from "@/components/Footer";

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
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Link
            href="/"
            style={{
              color: "#0d3b2e",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </Link>

          <div style={{ marginTop: 50, marginBottom: 40 }}>
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
              borderRadius: 30,
              padding: 60,
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
              Every entry requires the successful completion of our skill-based
              challenge before checkout can be completed.
            </p>

            <h2>Winner Selection</h2>
            <p>
              Winners are selected using an independently verified live draw
              after each competition closes.
            </p>

            <h2>Prizes</h2>
            <p>
              All prizes are described on each competition page. Where offered,
              any cash alternative will be clearly stated.
            </p>

            <h2>Refunds</h2>
            <p>
              Competition entries are non-refundable unless required by law.
            </p>

            <h2>Acceptance</h2>
            <p>
              By entering a competition you agree to these Terms &
              Conditions.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
