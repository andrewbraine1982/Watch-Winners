import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";

export default function CookiePolicy() {
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
              Cookie Policy
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
            <h2>What Are Cookies?</h2>

            <p>
              Cookies are small text files stored on your device to improve
              your browsing experience, remember your preferences and help us
              understand how visitors use our website.
            </p>

            <h2>How We Use Cookies</h2>

            <p>
              Watch Winners uses cookies to provide essential website
              functionality, improve performance, analyse visitor behaviour and
              deliver a smooth, secure experience throughout our competitions.
            </p>

            <h2>Managing Cookies</h2>

            <p>
              Most web browsers allow you to control, disable or remove cookies
              through their settings. Please note that disabling certain
              cookies may affect how parts of the website function.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              We may use trusted third-party providers, including analytics and
              secure payment services, which may also place cookies to help
              deliver their services safely and effectively.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
