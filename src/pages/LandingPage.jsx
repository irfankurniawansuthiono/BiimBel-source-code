import NavbarNotLoggedIn from "../components/LandingPage/NavbarNotLoggedIn/NavbarNotLoggedIn";
import Hero from "../components/LandingPage/Hero/Hero";
import About from "../components/LandingPage/About/About";
import Pricing from "../components/LandingPage/Pricing/Pricing";
import Contact from "../components/LandingPage/Contact/Contact";
import Footer from "../components/LandingPage/Footer/Footer";
export default function LandingPage({ loginWithGoogle }) {
  return (
    <>
      <NavbarNotLoggedIn loginWithGoogle={loginWithGoogle} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
