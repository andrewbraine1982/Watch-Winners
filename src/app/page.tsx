import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import Competitions from "../components/Competitions";
import Winners from "../components/Winners";
import Trust from "../components/Trust";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import BrandMarquee from "../components/BrandMarquee";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Watch Winners | Luxury Rolex Watch Competitions UK | Win a Rolex",

  description:
    "Enter luxury Rolex watch competitions from just £7.99. Win authentic Rolex watches including Daytona, GMT-Master II, Submariner and Datejust. UK skill-based competitions.",

  keywords: [
    "Rolex competition",
    "Win a Rolex",
    "Watch competition",
    "Luxury watch competition",
    "Rolex giveaway",
    "Rolex Daytona competition",
    "Rolex Submariner competition",
    "Rolex Datejust competition",
    "Rolex GMT Master II competition",
    "Watch Winners"
  ],

  openGraph: {
    title: "Watch Winners",
    description:
      "Luxury Rolex Watch Competitions in the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "Watch Winners"
  }
};
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandMarquee />

        <Stats />

        <HowItWorks />

        <Competitions />

        <Winners />

        <Trust />

        <Faq />
      </main>

      <Footer />
    </>
  );
}
