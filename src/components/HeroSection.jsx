import arrowDown from "../assets/triple-arrow.svg";

const HeroSection = () => {
  return (
    <main className="heroSectionBg h-screen px-0  flex justify-center items-center flex-col text-center text-white relative z-20">
      <h1 className="text-6xl w-[80%] font-bold">
        Let’s help make the world a better place, a pint of{" "}
        <span className=" text-redCustom">blood</span> at a time
      </h1>
      <p className="w-[60%] mt-4 font-semibold">
        We are committed towards providing for the needs of people living with
        sickle cell disease and ensuring safe blood is accessible and affordable
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <button className=" bg-redCustom rounded-md px-4 py-2 cursor-pointer">
          Donate Now
        </button>
        <button className=" border-2 border-white text-white rounded-md px-4 py-2 cursor-pointer">
          Become a Volunteer
        </button>
      </div>
      <div className="flex flex-col justify-center items-center text-xs absolute bottom-0 pb-8 cursor-pointer animate-bounce ">
        <p>
          Scroll <br />
          down
        </p>
        <div className="flex flex-col">
          <img src={arrowDown} alt="arrow down icon" />
          <img src={arrowDown} alt="arrow down icon" />
          <img src={arrowDown} alt="arrow down icon" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
