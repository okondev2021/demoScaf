import { useState } from "react";

const ContactForm = () => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isDisable = !Object.values(contactInfo).every((info) => info !== "");

  const handleOnchange = (e) => {
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactSubmission = (e) => {
    e.preventDefault();
  };
  
  return (
    <section>
      <div
        action="post"
        className=" bg-grayMedium w-[70%] max-lg:w-[95%] max-md:w-[70%] max-sm:w-[90%] max-md:mt-10 flex gap-10 max-lg:gap-4 max-md:gap-8 mx-auto -mt-14 max-lg:-mt-10 mb-24 px-14 max-lg:px-4 py-10 max-md:flex-col"
      >
        <section className="w-[50%] max-md:w-full">
          <h4 className="text-textColor font-bold mb-5">Get In Touch</h4>
          <form
            onSubmit={handleContactSubmission}
            method="post"
            className="flex flex-col gap-6"
          >
            <input
              className="donationInputField"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleOnchange}
              required
            />
            <input
              className="donationInputField"
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={handleOnchange}
            />
            <textarea
              placeholder="Your Message"
              className="donationTextArea"
              required
              name="message"
              onChange={handleOnchange}
            ></textarea>
            <div>
              <input
                disabled={isDisable}
                className=" bg-redCustom disabled:bg-gray-500 rounded-md text-white px-6 py-2 text-sm"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </section>
        <section className="max-md:hidden">
          <div className=" w-[4px] h-[80%] bg-textColor"></div>
        </section>
        <section className="w-[50%] max-md:w-full flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h4 className=" text-textColor font-bold">Address:</h4>
            <p>Km 2 eleme akpajo expressway, Port Harcourt, </p>
            <p>Rivers State, Nigeria.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className=" text-textColor font-bold">Contact Phone Number:</h4>
            <p>+234 815 472 5680</p>
            <p>+234703 645 9016</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactForm;
