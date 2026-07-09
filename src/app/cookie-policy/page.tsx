import Link from "next/link";
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
              Cookies are small files stored on your device to improve your
              browsing experience.
            </p>

            <h2>How We Use Cookies</h2>

            <p>
              We use cookies to remember preferences, improve website
              performance, analyse visitor behaviour and provide essential site
              functionality.
            </p>

            <h2>Managing Cookies</h2>

            <p>
              Most browsers allow you to disable or delete cookies through
              their settings at any time.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              Some trusted third-party services may also place cookies when
              using our website, including analytics and payment providers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
