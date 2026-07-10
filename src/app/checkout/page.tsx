import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./checkout.css";

type CheckoutPageProps = {
  searchParams?: {
    watch?: string;
    entries?: string;
  };
};

export default function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const watch = searchParams?.watch || "pepsi";
  const entries = Number(searchParams?.entries ?? "1");

  // Temporary until competitions.ts is introduced
const competitions = {
  pepsi: {
    title: "Rolex GMT-Master II Pepsi",
    image: "/images/watches/RolexPepsi.png",
    retailValue: "£18,000",
    ticketPrice: 14.99,
  },

  datejust: {
    title: "Rolex Datejust",
    image: "/images/watches/datejust.jpg",
    retailValue: "£8,950",
    ticketPrice: 7.99,
  },

  submariner: {
    title: "Rolex Submariner",
    image: "/images/watches/submariner.jpg",
    retailValue: "£10,800",
    ticketPrice: 9.99,
  },

  daytona: {
    title: "Rolex Daytona",
    image: "/images/watches/daytona.jpg",
    retailValue: "£22,500",
    ticketPrice: 19.99,
  },
};



const competition =
  competitions[watch as keyof typeof competitions] ??
  competitions.pepsi;

  const total = (entries * competition.ticketPrice).toFixed(2);

  return (
    <>
  <Navbar showCTA={false} />

      <main className="checkout-page">
        <div className="checkout-container">
          <section className="checkout-form">
            <span className="checkout-tag">
              SECURE CHECKOUT
            </span>

            <h1>Complete Your Entry</h1>

            <p className="checkout-intro">
              Your details are securely encrypted and never shared with third
              parties.
            </p>

            <div className="form-section">
              <h2>Customer Details</h2>

              <input placeholder="Full Name" />
              <input placeholder="Email Address" />
              <input placeholder="Phone Number" />
            </div>

            <div className="form-section">
              <h2>Billing Address</h2>

              <input placeholder="Address Line 1" />
              <input placeholder="Town / City" />
              <input placeholder="Postcode" />
            </div>

            <div className="form-section">
              <h2>Payment</h2>

              <div className="payment-placeholder">
                Stripe Secure Payment
              </div>
            </div>

            <button className="checkout-button">
              Complete Secure Entry
            </button>
          </section>

          <aside className="checkout-summary">
            <img
              src={competition.image}
              alt={competition.title}
            />

            <span>LIVE COMPETITION</span>

            <h2>{competition.title}</h2>

            <div className="summary-row">
              <span>Retail Value</span>
              <strong>{competition.retailValue}</strong>
            </div>

            <div className="summary-row">
              <span>Entries</span>
              <strong>{entries}</strong>
            </div>

            <div className="summary-row">
              <span>Total</span>
              <strong>£{total}</strong>
            </div>

            <ul className="checkout-trust">
              <li>✓ SSL Encrypted Checkout</li>
              <li>✓ Authentic Rolex Guaranteed</li>
              <li>✓ Winner Verified Live</li>
              <li>✓ Fully Insured Delivery</li>
            </ul>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
