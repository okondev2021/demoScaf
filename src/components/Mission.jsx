import thumbNail from "../assets/thumbNail.webp";
import play from "../assets/playIcon.svg";
import impactImage from "../assets/impactImage.webp";
import boxIcon from "../assets/boxIcon.svg"
const Mission = () => {
  return (
    <>
      <section className="containerXPadding relative mb-24 mt-28 py-16 flex justify-between items-center max-md:flex-col bg-grayLight gap-0 max-md:gap-8 ">
        <div className="w-[50%] max-md:w-full ">
          <section className=" relative pl-4 z-40 max-md:pl-0  h-full w-[80%] max-md:w-full">
            <img
              className="mx-auto w-full h-full"
              src={thumbNail}
              alt=" Sickle Cell Awareness and Health Foundation thumbnail"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
              <img src={play} alt="playButton icon" />
            </div>
          </section>
        </div>
        <section className="absolute z-20 top-0 h-full w-[20%] bg-textColor max-md:hidden"></section>
        <div className="w-[50%] flex flex-col gap-6 text-textColor max-md:w-full ">
          <h2 className=" text-redCustom text-3xl font-bold">WHO WE ARE</h2>
          <p>
            Sickle Cell Awareness and Health Foundation is a non-profit
            organization that started in March 2018 as an awareness forum and
            was incorporated in January 2020.
          </p>
          <div>
            <p>We are driven by two significant objectives:</p>
            <ul className="">
              <li>- To amplify awareness on Sickle Cell Disorder (SCD)</li>
              <li>
                - To ensure that less privileged persons with this disorder have
                access to quality healthcare
              </li>
            </ul>
          </div>
          <div>
            <button className=" text-sm bg-redCustom text-white px-6 py-2 rounded-md">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="missionBgImage containerXPadding text-white mt-24 py-16 flex max-md:flex-col justify-between gap-[1px] max-md:gap-5 text-center">
        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR MISSION</h2>
          <div class="flex items-center w-[50%] max-md:hidden ml-auto">
            <img src={boxIcon} alt="" />
            <div class="missionDot"></div>
          </div>
          <p className="text-center w-[85%] max-md:w-full mx-auto mt-4">
            To truncate the continued inheritance of Sickle Cell Disease through
            effective awareness campaigns and to foster increased healthcare
            accessibility and delivery to people living with Sickle Cell
            Disorder.
          </p>
        </div>

        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR VISION</h2>
          <div class="flex items-center  max-md:hidden">
            <div class="missionDot"></div>
            <img src={boxIcon} alt="" />
            <div class="missionDot"></div>
          </div>
          <p className="text-center w-[85%] max-md:w-full mx-auto mt-4">
            Towards a Nigeria with a declining sickle cell anemia birth rate and
            a competent public and personal healthcare system for those already
            living with the condition.
          </p>
        </div>

        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR VALUES</h2>
          <div className="w-[50%] mr-auto flex items-center  max-md:hidden">
            <div class="missionDot"></div>
            <img src={boxIcon} alt="" />
          </div>
          <p className="text-center w-[85%] max-md:w-full mx-auto  mt-4">
            We share a common passion to break the sickle cycle, thus creating
            an unrivalled determination to succeed. We embody bravery and
            compassion. We are purpose-driven, informed, and relentless.
          </p>
        </div>
      </section>
      <section className="pl-24 max-md:px-5 max-md:py-16 text-textColor flex justify-between max-md:flex-col max-md:gap-8 items-center ">
        <div className="w-[60%] max-md:w-full relative">
          <div className="pb-32 max-md:pb-0">
            <h3 className="text-2xl text-redCustom font-[900]">OUR IMPACT</h3>
            <h2 className="text-3xl font-[900]">JOURNEY SO FAR...</h2>
            <p className="w-[80%] max-md:w-full my-5 leading-8">
              In 2 years, we have been able to achieve so much and create an
              impact with our awareness programs, blood drives and blood
              donations.
            </p>
            <p className="w-[80%] max-md:w-full leading-8">
              Our aim is to reach thousands of people living with SCD and also
              create awareness on genotype.
            </p>
          </div>
          <section className="absolute max-md:static bottom-0 left-0 flex gap-3 flex-wrap ">
            <div className="achivementBgImage  w-38 text-white text-center">
              <h4 className="px-7 text-nowrap py-7 font-bold text-xs">
                5 Communities <br /> Reached
              </h4>
              <div className="bg-gradient-to-r from-primaryCustom to-greenCustom h-[5px]"></div>
            </div>
            <div className="achivementBgImage  w-38 text-white text-center">
              <h4 className="px-7 text-nowrap py-7 font-bold text-xs">
                205+ Genotype <br /> Screenings
              </h4>
              <div className="bg-gradient-to-r  from-primaryCustom to-greenCustom  h-[5px]"></div>
            </div>
            <div className="achivementBgImage  w-38 text-white text-center">
              <h4 className="px-7 text-nowrap py-7 font-bold text-xs">
                350+ Registered <br /> Blood Donors
              </h4>
              <div className="bg-gradient-to-r  from-primaryCustom to-greenCustom  h-[5px]"></div>
            </div>
            <div className="achivementBgImage  w-38 text-white text-center">
              <h4 className="px-7 text-nowrap py-7 font-bold text-xs">
                100+ People Living <br /> with SCD Reached
              </h4>
              <div className="bg-gradient-to-r  from-primaryCustom to-greenCustom  h-[5px]"></div>
            </div>
            <div className="achivementBgImage w-38 text-white text-center">
              <h4 className="px-7 text-nowrap py-7 font-bold text-xs">
                270+ Blood <br /> Donations
              </h4>
              <div className="bg-gradient-to-r  from-primaryCustom to-greenCustom  h-[5px]"></div>
            </div>
          </section>
        </div>
        <div className="w-[40%] max-md:w-full">
          <img
            className="h-[500px] max-md:h-[300px] w-full object-cover"
            src={impactImage}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Mission;
