import { useState, useRef } from "react";
import NewMemeberFormSectionOne from "./NewMemeberFormSectionOne";
import NewMemeberFormSectionTwo from "./NewMemeberFormSectionTwo";

const NewMemberForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isFormSectionOne, setIsFormSectionOne] = useState(true);

  const timeoutId = useRef(null);

  const moveToFormSectionTwo = () => {
    setIsFormSectionOne(false);
  };

  const moveToFormSectionOne = () => {
    setIsFormSectionOne(true);
  };

  const submitNewMemberForm = (e) => {
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

  return (
    <section className="containerXPadding mt-10 mb-32">
      <div className="flex flex-col gap-6 text-textColor">
        <p>
          Increasing the pool of voluntary blood donors in Nigeria is the key to
          bridging the blood supply gap and could translate into better blood
          transfusion safety.
        </p>
        <p>
          Every two seconds someone needs blood. Blood is essential for people
          living with sickle cell disease, surgeries, cancer treatment, chronic
          illness and traumatic injuries.
        </p>
        <p>
          The gift of blood is the gift of life. There is no substitute for
          human blood.
        </p>
        <p id="Error1">Sign up today to join our Blood Donor community</p>
      </div>
      <div className="mt-10">
        <form
          onSubmit={submitNewMemberForm}
          className="mt-5 flex flex-col gap-6"
        >
          <div className="w-full h-[3px] rounded-lg bg-grayDark mb-5">
            {/* isFormSectionOne */}
            <span
              className={`block h-full rounded-lg ${
                isFormSectionOne
                  ? "w-[50%] bg-orangeCustom"
                  : "w-full bg-greenCustom"
              }`}
            ></span>
          </div>

          <NewMemeberFormSectionOne
            formSubmittedValue={formSubmitted}
            stepOne={isFormSectionOne}
            moveToFormSectionTwo={moveToFormSectionTwo}
          />
          <NewMemeberFormSectionTwo
            formSubmittedValue={formSubmitted}
            stepOne={isFormSectionOne}
            moveToFormSectionOne={moveToFormSectionOne}
          />
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

export default NewMemberForm;
