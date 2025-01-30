const Events = () => {
  return (
    <>
      <section className="homeBecomeDonorBg containerXPadding my-24 py-16">
        <div className="w-[80%] mx-auto flex flex-col gap-5 text-white">
          <div>
            <h5>Get involved</h5>
            <h2 className="font-bold text-3xl">
              BECOME A <span className=" text-redCustom">BLOOD DONOR</span>
            </h2>
          </div>
          <p className="">
            In every 3 seconds someone out there needs blood transfusion. <br />
            Donate Blood and Help save a life.
          </p>
          <div>
            <button className="border-2 border-white text-white rounded-md px-6 text-sm py-2 cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </section>

      <section className="containerXPadding flex bg-grayLight my-24 py-10">
        <div className="flex justify-center items-center flex-col text-center gap-6 border-r border-r-textColor py-14 w-[50%]">
          <h2 className=" text-redCustom font-bold text-3xl">OUR EVENTS</h2>
          <p className="w-[70%]  text-textColor">
            Every year we have series of events scheduled to hold at different
            times of the year.
          </p>
          <div>
            <button className="bg-textColor text-white px-8 py-2 rounded-md text-xs">
              View Events
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col text-center gap-6 border-l border-l-textColor py-14 w-[50%]">
          <h2 className=" text-redCustom font-bold text-3xl">OUR GALLERY</h2>
          <p className="w-[70%] text-textColor">
            All our events are captured for all the right reasons. Visit our
            Media Gallery to see highlights of all events.
          </p>
          <div>
            <button className=" bg-textColor text-white px-8 py-2 rounded-md text-xs">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
