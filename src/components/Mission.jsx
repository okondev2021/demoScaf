import thumbNail from "../assets/thumbNail.webp";
import play from "../assets/playIcon.svg";
const Mission = () => {
  return (
    <>
      <section className="containerXPadding mb-24 mt-28 py-16 flex justify-between items-center bg-grayLight gap-0">
        <div className="w-[50%] relative h-[400px] ">
          <section className="absolute pl-4 h-full w-[80%]">
            <img
              className="mx-auto w-full h-full"
              src={thumbNail}
              alt=" Sickle Cell Awareness and Health Foundation thumbnail"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
              <img src={play} alt="playButton icon" />
            </div>
          </section>
          <section className=" h-[100vh] w-[60%] -mt-[6.2em] bg-textColor"></section>
        </div>
        <div className="w-[50%] flex flex-col gap-6 text-textColor">
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
      <section className="missionBgImage containerXPadding text-white my-24 py-16 flex justify-between gap-[1px] text-center">
        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR MISSION</h2>
          <div class="flex items-center w-[50%] ml-auto">
            <i class="bi bi-arrow-up-left-square"></i>
            <div class="missionDot"></div>
          </div>
          <p className="text-center w-[85%] mx-auto mt-4">
            To truncate the continued inheritance of Sickle Cell Disease through
            effective awareness campaigns and to foster increased healthcare
            accessibility and delivery to people living with Sickle Cell
            Disorder.
          </p>
        </div>

        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR VISION</h2>
          <div class="flex items-center">
            <div class="missionDot"></div>
            <i class="bi bi-arrow-up-left-square"></i>
            <div class="missionDot"></div>
          </div>
          <p className="text-center w-[85%] mx-auto mt-4">
            Towards a Nigeria with a declining sickle cell anemia birth rate and
            a competent public and personal healthcare system for those already
            living with the condition.
          </p>
        </div>

        <div>
          <h2 className=" font-bold text-3xl mb-2">OUR VALUES</h2>
          <div className="w-[50%] mr-auto flex items-center">
            <div class="missionDot"></div>
            <i class="bi bi-arrow-up-left-square"></i>
          </div>
          <p className="text-center w-[85%] mx-auto mt-4">
            We share a common passion to break the sickle cycle, thus creating
            an unrivalled determination to succeed. We embody bravery and
            compassion. We are purpose-driven, informed, and relentless.
          </p>
        </div>
      </section>
      <section className="containerXPadding text-white my-24 py-16 ">
        
      </section>
    </>
  );
};

export default Mission;
