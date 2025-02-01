import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import DonationHeroSection from "../components/DonationHeroSection";
import DonationForm from "../components/DonationForm";
import Footer from "../components/Footer";
const Donation = () => {
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
      <DonationHeroSection />
      <DonationForm />
      <Footer />
    </>
  );
};

export default Donation;
