const ContactForm = () => {
  return (
    <section>
      <div
        action="post"
        className=" bg-grayMedium w-[70%] flex gap-10 mx-auto -mt-14 mb-24 px-14 py-10"
      >
        <section className="w-[50%]">
          <h4 className=" text-textColor font-bold mb-5">Get In Touch</h4>
          <form className="flex flex-col gap-6">
            <input
              className="donationInputField"
              type="text"
              placeholder="Name"
            />
            <input
              className="donationInputField"
              type="email"
              placeholder="Email"
            />
            <textarea
              placeholder="Your Message"
              className="donationTextArea"
            ></textarea>
            <div>
              <input
                className=" bg-redCustom rounded-md text-white px-6 py-2 text-sm"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </section>
        <section>
          <div className="mt-5 w-[4px] h-[80%] bg-textColor"></div>
        </section>
        <section className="w-[50%] flex flex-col gap-6">
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
