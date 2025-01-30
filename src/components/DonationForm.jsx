import bank from "../assets/bankLogo.svg"

const DonationForm = () => {
  return (
    <section>
      <div
        action="post"
        className=" bg-grayMedium w-[70%] flex gap-10 mx-auto -mt-14 mb-24 px-14 py-10"
      >
        <section className="w-[50%]">
          <h4 className=" text-textColor font-bold mb-5">
            Thank you for your donation
          </h4>
          <form className="flex flex-col gap-6" method="post">
            <input
              className="donationInputField"
              type="text"
              placeholder="Enter Full Name"
            />
            <input
              className="donationInputField"
              type="email"
              placeholder="Enter your email address"
            />
            <input
              className="donationInputField"
              type="tel"
              placeholder="Enter your phone number"
            />
            <div className="inputContainer flex gap-3">
              <select className="donationInputField w-full" name="" id="">
                <option disabled>Currency</option>
                <option>Naira</option>
                <option>USD</option>
                <option>Euro</option>
              </select>
              <input
                className="donationInputField"
                type="number"
                placeholder="Enter Amount"
              />
            </div>
            <textarea
              placeholder="Additional Information (Optional)"
              className="donationTextArea"
            ></textarea>
            <div>
              <input
                className=" bg-greenCustom rounded-md text-white px-6 py-2 text-sm"
                type="submit"
                value="Donate Now"
              />
            </div>
          </form>
        </section>
        <section>
          <div className="mt-5 w-[4px] h-[80%] bg-textColor"></div>
        </section>
        <section className="w-[50%]">
          <h4 className=" text-textColor font-bold mb-5">Bank Details</h4>
          <div className="flex flex-col gap-5 text-sm">
            <section className="flex gap-4">
              <div>
                <p>Account Number</p>
                <p className="font-bold">0129401758</p>
              </div>
              <img src={bank} alt="" />
            </section>
            <section>
              <p>Account Name</p>
              <p className="font-bold">
                Sickle Cell Awareness and Health Foundation
              </p>
            </section>
            <section>
              <p>Bank Name</p>
              <p className="font-bold">UNION BANK</p>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DonationForm;
