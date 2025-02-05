import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MobileNavMenu from "../components/MobileNavMenu";
import CommunityHeroSection from "../components/CommunityHeroSection";
import NewMemberForm from "../components/NewMemberForm";
import Footer from "../components/Footer";

const Community = () => {
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
      <CommunityHeroSection />
      <NewMemberForm />
      <Footer />
    </>
  );
};

export default Community;
