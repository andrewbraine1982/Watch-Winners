"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./checkout.css";

export default function CheckoutPage() {

  return (

    <>

      <Navbar />

      <main className="checkout-page">

        <div className="checkout-container">

          <section className="checkout-form">

            <span className="checkout-tag">
              SECURE CHECKOUT
            </span>

            <h1>

              Complete Your Entry

            </h1>

            <p className="checkout-intro">

              Your details are securely encrypted and
              never shared with third parties.

            </p>

            <div className="form-section">

              <h2>
                Customer Details
              </h2>

              <input placeholder="Full Name" />

              <input placeholder="Email Address" />

              <input placeholder="Phone Number" />

            </div>

            <div className="form-section">

              <h2>
                Billing Address
              </h2>

              <input placeholder="Address Line 1" />

              <input placeholder="Town / City" />

              <input placeholder="Postcode" />

            </div>

            <div className="form-section">

              <h2>
                Payment
              </h2>

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
              src="/images/watches/RolexPepsi.png"
              alt="Rolex Pepsi"
            />

            <span>

              LIVE COMPETITION

            </span>

            <h2>

              Rolex GMT-Master II Pepsi

            </h2>

            <div className="summary-row">

              <span>
                Retail Value
              </span>

              <strong>
                £18,000
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Entries
              </span>

              <strong>

                5

              </strong>

            </div>

            <div className="summary-row">

              <span>

                Total

              </span>

              <strong>

                £74.95

              </strong>

            </div>

            <ul className="checkout-trust">

              <li>
                ✓ SSL Encrypted Checkout
              </li>

              <li>
                ✓ Authentic Rolex Guaranteed
              </li>

              <li>
                ✓ Winner Verified Live
              </li>

              <li>
                ✓ Fully Insured Delivery
              </li>

            </ul>

          </aside>

        </div>

      </main>

      <Footer />

    </>

  );

}
