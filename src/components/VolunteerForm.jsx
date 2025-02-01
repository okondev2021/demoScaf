import { useState, useRef, useEffect} from "react";

const VolunteerForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    tel: "",
    dob: "",
    gender: "",
    contact: "",
    state: "",
    education: "",
    livingWithSickleCell: "",
  });

  const timeoutId = useRef(null);

  const handleInputChange = (e) => {
    setVolunteerForm((prevVolunteerForm) => {
      return { ...prevVolunteerForm, [e.target.name]: e.target.value };
    });
  };

  const submitVolunteerForm = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    // Remove Form success message
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    } else {
      timeoutId.current = setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    }
  };


  useEffect(() => {
    setVolunteerForm({
      name: "",
      email: "",
      tel: "",
      dob: "",
      gender: "",
      contact: "",
      state: "",
      education: "",
      livingWithSickleCell: "",
    });
    
  }, [formSubmitted])

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
        <form
          onSubmit={submitVolunteerForm}
          className="mt-5 flex flex-col gap-6"
        >
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 ">
            <input
              className="volunteerInputField"
              type="text"
              placeholder="Full Name"
              required
              onChange={handleInputChange}
              name="name"
              value={volunteerForm.name}
            />
            <input
              className="volunteerInputField"
              type="email"
              placeholder="E-mail Address"
              required
              onChange={handleInputChange}
              value={volunteerForm.email}
              name="email"
            />
            <input
              className="volunteerInputField"
              type="tel"
              placeholder="Phone Number (Whatsapp)"
              required
              onChange={handleInputChange}
              value={volunteerForm.tel}
              name="tel"
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
              required
              onChange={handleInputChange}
              value={volunteerForm.dob}
              name="dob"
            />
            <select
              className="volunteerInputField"
              onChange={handleInputChange}
              value={volunteerForm.gender}
              name="gender"
              required
            >
              <option disabled value="">
                Gender
              </option>
              <option value={"Male"}>Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              className="volunteerInputField"
              type="text"
              placeholder="Contact Address"
              required
              onChange={handleInputChange}
              value={volunteerForm.contact}
              name="contact"
            />
            <input
              className="volunteerInputField"
              type="text"
              placeholder="State of origin"
              required
              onChange={handleInputChange}
              value={volunteerForm.state}
              name="state"
            />
            <select
              className="volunteerInputField"
              onChange={handleInputChange}
              value={volunteerForm.education}
              name="education"
              required
            >
              <option disabled value="">
                Educational Qualification
              </option>
              <option value="high_school">High School</option>
              <option value="diploma">Diploma</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>
            <select
              className="volunteerInputField"
              onChange={handleInputChange}
              value={volunteerForm.livingWithSickleCell}
              name="livingWithSickleCell"
              required
            >
              <option disabled value="">
                Are you livivng with sickle cell disease?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex justify-center items-center w-full">
            <input
              className=" text-sm bg-textColor px-6 py-2 text-white rounded-md cursor-pointer"
              type="submit"
              value="Submit Form"
            />
          </div>
        </form>
        {formSubmitted && (
          <div className="text-center bg-greenCustom w-[70%] mx-auto mt-10 text-white py-2">
            <p>
              Thank you for joining us! You will be contacted once your form is
              reviewed. :)
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VolunteerForm;
