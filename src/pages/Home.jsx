import { useState, useEffect } from "react";

import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };


  
  useEffect(() => {
    window.scrollTo(0, 0);
  }); 
  
  return (
    <>
      <MobileNavMenu closeMobileNav={closeNav} mobileNavOpen={isNavOpen} />
      <NavBar openMobileNav={openNav} />
      <HeroSection />
      <Mission />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
