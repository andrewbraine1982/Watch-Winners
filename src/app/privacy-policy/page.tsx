import Link from "next/link";
import Image from "next/image";
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
              We collect information you provide when entering competitions,
              creating an account, subscribing to updates, contacting us or
              completing a purchase. This may include your name, email
              address, telephone number and billing information.
            </p>

            <h2>How We Use Your Information</h2>

            <p>
              Your information is used to administer competitions, verify
              winners, process payments securely, communicate important
              updates and comply with our legal and regulatory obligations.
            </p>

            <h2>Keeping Your Information Safe</h2>

            <p>
              We take the security of your personal information seriously.
              Appropriate technical and organisational measures are in place
              to protect your data, and payments are handled securely through
              trusted third-party providers.
            </p>

            <h2>Your Rights</h2>

            <p>
              You have the right to request access to, correction of or
              deletion of your personal information where applicable under UK
              data protection legislation.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact Winners Collective Ltd
              using the contact details provided on our website.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
