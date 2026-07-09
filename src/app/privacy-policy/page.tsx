import Link from "next/link";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
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
          <Link
            href="/"
            style={{
              color: "#0d3b2e",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Back to Home
          </Link>

          <div style={{ margin: "50px 0 40px" }}>
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
              }}
            >
              Privacy Policy
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
            <h2>Information We Collect</h2>

            <p>
              We collect information you provide when creating an account,
              purchasing competition entries, subscribing to updates and
              contacting us.
            </p>

            <h2>How We Use Your Information</h2>

            <p>
              Your information is used to administer competitions, verify
              winners, process payments, communicate with you and comply with
              our legal obligations.
            </p>

            <h2>Keeping Your Information Safe</h2>

            <p>
              We use secure technologies and trusted payment providers to help
              protect your personal information.
            </p>

            <h2>Your Rights</h2>

            <p>
              You may request access, correction or deletion of your personal
              information where permitted by applicable law.
            </p>

            <h2>Contact</h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact Winners Collective Ltd using the details provided on our
              website.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
