import whatWeDo from "../assets/whatwedo.jpg";

const AboutWhatWeDo = () => {
  return (
    <section className="  pr-24 max-lg:pr-8 max-md:p-0 my-16 mb-32 max-md:mb-16 relative max-sm:">
      <div className=" containerXPadding w-[80%] max-md:w-full bg-textColor text-textColor py-14">
        <h2 className="font-[900] text-white text-3xl max-md:text-2xl">
          WHAT WE DO
        </h2>
        <ol className="text-white list-decimal text-sm font-medium mt-10 flex flex-col gap-2 max-md:px-4">
          <li>Sickle Cell Awareness</li>
          <li>Free Genotype screening</li>
          <li>Advocacy</li>
          <li>Genetic counselling</li>
          <li>Volunteer Blood Donation Awareness</li>
          <li>Support groups for people living with sickle cell disorder</li>
          <li>Blood Donation Drives</li>
        </ol>
      </div>
      <div className="absolute right-24  max-lg:right-8 max-md:static top-14 h-full max-lg:w-[350px] max-md:w-full">
        <img
          className="w-full h-full max-lg:object-center"
          src={whatWeDo}
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
