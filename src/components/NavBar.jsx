import NavLinks from "./NavLinks";
import logo from "../assets/logo.svg"
import hamburger from "../assets/hamburger.svg";
const NavBar = () => {
    return (
      <nav className="flex justify-between items-center containerXPadding py-4 bg-white sticky top-0 z-50">
        <div>
          <img src={logo} alt="Sickle Cell Foundation Logo" />
        </div>
        <NavLinks />
        <div className="hidden tab:block">
          <img src={hamburger} alt="hamburger Icon" />
        </div>
      </nav>
    );
}

export default NavBar;