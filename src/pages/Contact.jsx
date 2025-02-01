import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
const Contact = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <MobileNavMenu closeMobileNav={closeNav} mobileNavOpen={isNavOpen} />
      <NavBar openMobileNav={openNav} />
      <ContactHeroSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
