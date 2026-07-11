import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./journal.css";

export default function JournalPage() {
  return (
    <>
      <Navbar showCTA={false} />

      <main className="journal-page">
<section className="journal-hero"></section>

<section className="journal-feature">

  <p className="journal-label">
    FEATURED STORY
  </p>

  <h1>
    The Patek Philippe
    <br />
    Sky Moon Tourbillon
  </h1>

  <p className="journal-intro">
    A look inside one of the world's most
    extraordinary complications and why
    collectors consider it the pinnacle of
    traditional watchmaking.
  </p>

  <a href="#" className="journal-button">
    Read Story →
  </a>

</section>
      </main>

      <Footer />
    </>
  );
}
