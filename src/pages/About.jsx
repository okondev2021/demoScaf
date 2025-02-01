import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import Footer from "../components/Footer";
const About = () => {
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
      <Footer />
    </>
  );
};

export default About;
