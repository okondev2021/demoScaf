import founder from "../assets/founder.jpg";
import quote from  "../assets/quote.png"

const AboutObjective = () => {
  return (
    <>
      <section className="containerXPadding my-16 flex flex-col gap-24 max-sm:gap-8">
        <h2 className="font-[900] text-redCustom text-3xl max-md:text-2xl">
          OUR OBJECTIVES
        </h2>
        <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>
              To create awareness, educate and enlighten the public through
              several communication channels on sickle cell disease, prevention,
              eradication, management and health issues.
            </p>
          </div>
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>
              To cooperate and collaborate with institutions, the federal and
              states government in Nigeria and other bodies nationally or
              globally with the unified goals of building a healthy nation.{" "}
            </p>
          </div>
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>
              To foster increased Health Care service accessibility and delivery
              to people with Sickle Cell Disorder.
            </p>
          </div>
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>
              To reiterate the need for and ensure compliance on, knowing one’s
              Genotype status, offer and facilitate free genotype and blood
              group testing to the public at large.
            </p>
          </div>
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>
              To advocate for the rights of people living with Sickle Cell
              Disorder.
            </p>
          </div>
          <div className="objectives">
            <div className="objectivesBox"></div>
            <p>To encourage volunteer blood donation. </p>
          </div>
        </div>
      </section>
      <section className="containerXPadding my-16 flex justify-between max-sm:flex-col gap-5 bg-textColor text-white py-20">
        <div className="flex  items-center justify-between w-[55%] max-sm:w-full relative pt-8">
          <div className="aboutFounderSection absolute bg-no-repeat bg-center bg-cover  left-[10%] h-[200px] w-[200px] z-10"></div>
          <img className="z-30" src={founder} alt="" />
          <div className="z-30 flex gap-4 max-sm:gap-1 border-r-2 border-r-redCustom px-4 py-8">
            <div>
              <img src={quote} alt="" />
            </div>
            <div className="font-bold">
              <h5 className="text-base max-sm:text-sm">THE FOUNDER</h5>
              <h3 className="text-xl max-sm:text-base ">
                Omubo-Pepple Tamunotokini{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white gap-8 max-sm:gap-4 w-[45%] max-sm:w-full text-sm pt-8">
          <p>
            A 3rd year Law student at Rivers State University, Nigeria. Having
            firsthand experience of the effect of ignorance and poor awareness
            on sickle cell disease in her community and a strong desire to
            address the issues of stigma and ignorance gave birth to Sickle Cell
            Awareness and Heath Foundation.
          </p>
          <p>She is passionate about photography and volunteering.</p>
        </div>
      </section>
    </>
  );
};

export default AboutObjective;
