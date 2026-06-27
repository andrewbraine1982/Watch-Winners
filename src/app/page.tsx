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
