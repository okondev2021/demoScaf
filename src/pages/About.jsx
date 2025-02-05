import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutWhatWeDo from "../components/AboutWhatWeDo";
import AboutParagraph from "../components/AboutParagraph";
import AboutObjective from "../components/AboutObjective";
import Executives from "../components/Executives";
import Footer from "../components/Footer";
const About = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }) 
  return (
    <>
      <MobileNavMenu closeMobileNav={closeNav} mobileNavOpen={isNavOpen} />
      <NavBar openMobileNav={openNav} />
      <AboutHeroSection />
      <AboutParagraph />
      <AboutWhatWeDo />
      <AboutObjective />
      <Executives />
      <Footer />
    </>
  );
};

export default About;
