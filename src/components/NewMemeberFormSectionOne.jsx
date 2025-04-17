import { useRef, useState, useEffect } from "react";

const NewMemeberFormSectionOne = ({
  moveToFormSectionTwo,
  stepOne,
  updateValue,
  formStepValue,
}) => {

  const isDisabled = !Object.values(formStepValue).every(
    (response) => response.trim() !== ""
  );


  return (
    <section
      id="formSection1"
      className={` flex-col gap-10 ${stepOne ? "flex" : "hidden"}`}
    >
      <h5 className="font-bold text-textColor">Step 1: Bio Data</h5>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        <input
          className="newMemberInputField"
          type="text"
          placeholder="Full Name"
          required
          name="name"
          onChange={(e) => updateValue(e, "stepOne")}
          value={formStepValue.name}
        />
        <input
          className="newMemberInputField"
          type="email"
          placeholder="E-mail Address"
          required
          name="email"
          onChange={(e) => updateValue(e, "stepOne")}
          value={formStepValue.email}
        />
        <input
          className="newMemberInputField cursor-pointer"
          onBlur={(e) => {
            e.target.type = "text";
          }}
          onFocus={(e) => {
            e.target.type = "date";
          }}
          type="text"
          placeholder="Date of birth"
          required
          onChange={(e) => updateValue(e, "stepOne")}
          name="dob"
          value={formStepValue.dob}
        />
        <select
          className="newMemberInputField"
          required
          onChange={(e) => updateValue(e, "stepOne")}
          value={formStepValue.gender}
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
          onChange={(e) => updateValue(e, "stepOne")}
          value={formStepValue.contact}
          name="contact"
        />
        <input
          className="newMemberInputField"
          type="text"
          placeholder="State of origin"
          required
          onChange={(e) => updateValue(e, "stepOne")}
          name="state"
          value={formStepValue.state}
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <button
          onClick={moveToFormSectionTwo}
          disabled={isDisabled}
          type="button"
          className="text-sm bg-textColor disabled:bg-gray-500 px-6 py-2 text-white rounded-md cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default NewMemeberFormSectionOne;
