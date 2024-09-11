export default function CallToAction() {
  return (
    <div className="  absolute right-0 left-0 p-7 md:px-24  text-[#fff]">
      <div className="flex flex-col items-center space-y-5  bg-[#2A2C38]  md:flex-row md:p-20 gap-3 h-[450px] md:h-48  container mx-auto rounded-lg">
        <h1 className="text-4xl max-md:text-center max-md:py-10 font-bold text-white md:w-2/6 capitalize">
          How to estimate mortgage payments
        </h1>
        <h5 className="max-md:text-center max-md:text-xl  max-md:px-7  md:text-lg  text-white max-md:pb-3 md:w-3/6">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </h5>
        <div className=" md:w-1/6 flex justify-center cursor-pointer">
          <button className="text-sm font-bold leading-snug max-md:py-6 max-md:px-10 py-5 px-8 text-black bg-orange-400 hover:bg-white hover:text-[#2A2C38] transition-all duration-300 ease-linear rounded-lg">
            {" "}
            INTEREST RATE
          </button>
        </div>
      </div>
    </div>
  );
}
