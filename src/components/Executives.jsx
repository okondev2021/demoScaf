import exco1 from "../assets/exco 1.jpg"
import exco2 from "../assets/exco 2.jpg";
import exco3 from "../assets/exco 3.jpg";
import exco4 from "../assets/exco 4.jpg";
import exco5 from "../assets/exco 5.jpg";
import exco6 from "../assets/exco 6.jpg";

const Executives = () => {
    return (
      <section className="containerXPadding my-16 flex flex-col gap-24 max-sm:gap-10">
        <h2 className="font-[900] text-redCustom text-3xl max-md:text-2xl text-center">
          EXECUTIVE BOARD MEMBERS
        </h2>
        <section className="grid grid-cols-3 gap-y-32 max-md:grid-cols-2 max-xs:grid-cols-1 max-xs:gap-y-10">
          <div className="exco">
            <img className="" src={exco1} alt="" />
            <h3 className="excoName">Dabota Omubo-Pepple</h3>
            <p className="excoPosition">EXECUCTIVE DIRECTOR</p>
          </div>
          <div className="exco">
            <img src={exco2} alt="" />
            <h3 className="excoName">Dr Joseph .O. Agbi</h3>
            <p className="excoPosition">BOARD MEMBER</p>
          </div>
          <div className="exco">
            <img src={exco3} alt="" />
            <h3 className="excoName">Prof. Kaladada Korubo</h3>
            <p className="excoPosition">BOARD MEMBER</p>
          </div>
          <div className="exco">
            <img src={exco4} alt="" />
            <h3 className="excoName">Basuo Telimoye</h3>
            <p className="excoPosition">BOARD MEMBER</p>
          </div>
          <div className="exco">
            <img src={exco5} alt="" />
            <h3 className="excoName">Dr Okeagu Kelechi M.</h3>
            <p className="excoPosition">BOARD MEMBER</p>
          </div>
          <div className="exco">
            <img src={exco6} alt="" />
            <h3 className="excoName">Ebenezar Wikina</h3>
            <p className="excoPosition">BOARD MEMBER</p>
          </div>
        </section>
      </section>
    );
}

export default Executives