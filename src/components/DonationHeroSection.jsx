const DonationHeroSection = () => {
    return (
      <>
        <main className="containerXPadding donationHeroBgImage h-[60vh] max-lg:h-[40vh] max-md:h-[30vh]  bg-cover bg-no-repeat bg-center flex justify-center flex-col text-white">
          <h1 className="font-[900] text-5xl max-md:text-3xl ">
            Make a Donation
          </h1>
          <p className=" text-grayLight mt-2 max-md:text-sm w-[60%] max-md:w-[100%]">
            Your Donation will go a long way in supporting us towards providing
            for the needs of people living with sickle cell disease and ensuring
            safe blood is accessible and affordable
          </p>
        </main>
      </>
    );
}

export default DonationHeroSection