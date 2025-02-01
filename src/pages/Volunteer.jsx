import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import VolunteerHeroSection from "../components/VolunteerHeroSection";
import VolunteerForm from "../components/VolunteerForm";
import Footer from "../components/Footer";
const Volunteer = () => {
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
      <VolunteerHeroSection />
      <VolunteerForm />
      <Footer />
    </>
  );
};

export default Volunteer;
