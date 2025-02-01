import NavLinks from "./NavLinks";
import logo from "../assets/logo.svg"
import hamburger from "../assets/hamburger.svg";
const NavBar = ({ openMobileNav }) => {
  return (
    <nav className="flex justify-between items-center containerXPadding py-4 bg-white sticky top-0 z-40">
      <div>
        <img
          className="max-md:h-[30px] max-md:w-[60px]"
          src={logo}
          alt="Sickle Cell Foundation Logo"
        />
      </div>
      <div className="max-md:hidden">
        <NavLinks />
      </div>
      <div className="hidden max-md:block">
        <img
          onClick={openMobileNav}
          className="h-[30px] w-[30px]"
          src={hamburger}
          alt="hamburger Icon"
        />
      </div>
    </nav>
  );
};

export default NavBar;