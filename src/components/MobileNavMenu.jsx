import NavLinks from "./NavLinks";
// importing icon
import close from  "../assets/close.svg"

// Component created for mobile navigation menu
const MobileNavMenu = ({ closeMobileNav, mobileNavOpen }) => {

  return (
    <section
      className={`hidden max-md:block fixed top-0 right-0 min-h-screen bg-white z-50 transition-all text-nowrap overflow-hidden duration-500 ${
        mobileNavOpen ? "w-screen opacity-100" : "w-0 px-0 opacity-0"
      }`}
    >
      <section className="flex justify-end max-md:px-8 py-10 max-sm:px-4 max-sm:py-5 ">
        <img
          onClick={closeMobileNav}
          src={close}
          className="h-[50px] w-[50px]"
          alt="close icon"
        />
      </section>
      <section className="px-6">
        <NavLinks mobileNavMenu />
      </section>
    </section>
  );
};

export default MobileNavMenu;
