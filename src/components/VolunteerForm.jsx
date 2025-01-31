const VolunteerForm = () => {
  return (
    <section className="containerXPadding mt-10 mb-32">
      <div className="flex flex-col gap-6 text-textColor">
        <p>
          Congratulations on your decision to volunteer with Sickle Cell
          Awareness and Health Foundation.
        </p>
        <p>
          By volunteering, you will not only be making a huge impact in the
          lives of people living with sickle cell disease and creating awareness
          on sickle cell anaemia & volunteer blood donation, but also in your
          personal development.
        </p>
        <p>
          All the information you give will be treated confidentially and
          wouldn’t be used for any other purpose besides that of SCAHF.
        </p>
        <p>
          Volunteer positions are always part-time, non-paid and you will be
          expected to serve in one of our teams with other dynamic professionals
          who share similar interests. You are kindly encouraged to complete all
          parts of the form so please feel free to express yourself to the best
          of your ability.
        </p>
      </div>
      <div className="mt-10">
        <h5 className="font-bold text-textColor">
          Kindly fill the form below with your correct details
        </h5>
        <form className="mt-5 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6 ">
            <input
              className="volunteerInputField"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="volunteerInputField"
              type="email"
              placeholder="E-mail Address"
            />
            <input
              className="volunteerInputField"
              type="tel"
              placeholder="Phone Number (Whatsapp)"
            />
            <input
              className="volunteerInputField"
              onBlur={(e) => {
                e.target.type = "text";
              }}
              onFocus={(e) => {
                e.target.type = "date";
              }}
              type="text"
              placeholder="Date of birth"
            />
            <select className="volunteerInputField">
              <option disabled selected>
                Gender
              </option>
              <option>Naira</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
            <input
              className="volunteerInputField"
              type="text"
              placeholder="Contact Address"
            />
            <input
              className="volunteerInputField"
              type="text"
              placeholder="State of origin"
            />
            <select className="volunteerInputField">
              <option disabled selected>
                Educational Qualification
              </option>
              <option>Naira</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
            <select className="volunteerInputField">
              <option disabled selected>
                Are you livivng with sickle cell disease?
              </option>
              <option>Naira</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
          </div>
          <div className="flex justify-center items-center w-full">
            <input className=" text-sm bg-textColor px-6 py-2 text-white rounded-md" type="submit" value="Submit Form" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
