import { useRef, useState } from "react";

const NewMemeberFormSectionOne = ({ moveToFormSectionTwo, stepOne }) => {
  
  const [formOne, setFormOne] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    contact: "",
    state: ""
  })

  const [error, setError] = useState(null)

   const timeoutId = useRef(null);

  const validateFormOne = () => {
    const formOneResponse = Object.values(formOne).every((response) => {
      return response.trim() !== "";
    })
    if (formOneResponse) {
      moveToFormSectionTwo()
    }
    else {
      window.location.href = "#Error1";
      setError("Ensure you enter all requested information.");
      
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      } else {
        timeoutId.current = setTimeout(() => {
          setError(null);
        }, 4000);
      }
    }
  }

  const formOneHandleChange = (e) => {
    setFormOne((prevFormOne) => {
      return { ...prevFormOne, [e.target.name]: e.target.value};
    })
  }


    return (
      <section
        id="formSection1"
        className={` flex-col gap-10 ${stepOne ? "flex" : "hidden"}`}
      >
        {error && (
          <div id="Error1" className="text-redCustom">
            {error}
          </div>
        )}
        <h5 className="font-bold text-textColor">Step 1: Bio Data</h5>
        <div className="grid grid-cols-3 gap-6 ">
          <input
            className="newMemberInputField"
            type="text"
            placeholder="Full Name"
            required
            name="name"
            onChange={formOneHandleChange}
            value={formOne.name}
          />
          <input
            className="newMemberInputField"
            type="email"
            placeholder="E-mail Address"
            required
            name="email"
            onChange={formOneHandleChange}
            value={formOne.email}
          />
          <input
            className="newMemberInputField"
            onBlur={(e) => {
              e.target.type = "text";
            }}
            onFocus={(e) => {
              e.target.type = "date";
            }}
            type="text"
            placeholder="Date of birth"
            required
            onChange={formOneHandleChange}
            name="dob"
            value={formOne.dob}
          />
          <select
            className="newMemberInputField"
            required
            onChange={formOneHandleChange}
            value={formOne.gender}
            name="gender"
          >
            <option disabled value="">
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className="newMemberInputField"
            type="text"
            placeholder="Contact Address"
            required
            onChange={formOneHandleChange}
            value={formOne.contact}
            name="contact"
          />
          <input
            className="newMemberInputField"
            type="text"
            placeholder="State of origin"
            required
            onChange={formOneHandleChange}
            name="state"
            value={formOne.state}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            onClick={validateFormOne}
            type="button"
            className="text-sm bg-textColor px-6 py-2 text-white rounded-md cursor-pointer"
          >
            Next Step
          </button>
        </div>
      </section>
    );
}

export default NewMemeberFormSectionOne;