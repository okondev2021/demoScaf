import { useState, useEffect } from "react";

const NewMemeberFormSectionTwo = ({
  moveToFormSectionOne,
  stepOne,
  updateValue,
  formStepValue
}) => {

  const isDisabled = !Object.values(formStepValue).every(
    (response) => response.trim() !== ""
  );

  return (
    <section className={` flex-col gap-10 ${stepOne ? "hidden" : "flex"}`}>
      <h5 className="font-bold text-textColor">
        Step 2: Blood Donation Details
      </h5>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 ">
        <select
          className="newMemberInputField"
          required
          onChange={(e) => updateValue(e, "stepTwo")}
          value={formStepValue.genotype}
          name="genotype"
        >
          <option disabled value="">
            Do you know your genotype?
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select
          className="newMemberInputField"
          onChange={(e) => updateValue(e, "stepTwo")}
          name="yourGenotype"
          value={formStepValue.yourGenotype}
        >
          <option disabled value="">
            If yes what is your genotype?
          </option>
          <option value="AA">AA</option>
          <option value="AS">AS</option>
          <option value="SS">SS</option>
          <option value="AC">AC</option>
          <option value="SC">SC</option>
        </select>
        <select
          className="newMemberInputField"
          onChange={(e) => updateValue(e, "stepTwo")}
          value={formStepValue.bloodGroup}
          name="bloodGroup"
          required
        >
          <option disabled value="">
            Do you know your blood group?
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select
          className="newMemberInputField"
          onChange={(e) => updateValue(e, "stepTwo")}
          value={formStepValue.yourBloodGroup}
          name="yourBloodGroup"
        >
          <option disabled value="">
            What is your your blood group?
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input
          className="newMemberInputField"
          type="text"
          placeholder="When was your last donation?"
          onChange={(e) => updateValue(e, "stepTwo")}
          name="lastDonation"
          value={formStepValue.lastDonation}
          required
        />
        <select
          className="newMemberInputField"
          required
          onChange={(e) => updateValue(e, "stepTwo")}
          value={formStepValue.scahf}
          name="scahf"
        >
          <option disabled value="">
            Have you donated to scahf before?
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input
          className="newMemberInputField"
          type="text"
          placeholder="If yes when?"
          onChange={(e) => updateValue(e, "stepTwo")}
          value={formStepValue.donationToScahf}
          name="donationToScahf"
        />
      </div>
      <div className="flex justify-center items-center w-full gap-10">
        <button
          onClick={moveToFormSectionOne}
          type="button"
          className="text-sm bg-grayMedium px-6 py-2 text-textColor rounded-md cursor-pointer"
        >
          Previous Step
        </button>
        <input
          disabled={isDisabled}
          className=" text-sm bg-textColor disabled:bg-gray-500 px-6 py-2 text-white rounded-md cursor-pointer"
          type="submit"
          value="Submit Form"
        />
      </div>
    </section>
  );
};

export default NewMemeberFormSectionTwo;
