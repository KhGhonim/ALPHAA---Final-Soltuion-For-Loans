import ManAnd2Women from "../../assets/ManAnd2Women.jpg";

export default function FormBG() {
  return (
    <div className="hidden lg:block bg-[#FF9021] absolute -bottom-44 right-0  left-0 rounded-2xl overflow-hidden  container mx-auto">
      <div className="flex w-full flex-col relative lg:flex-row h-96 ">
        <div className="lg:w-2/6 ">
          <img
            src={ManAnd2Women}
            alt="People in a meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-4/6 p-16">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#2A2C38] mr-2"></div>
            <span className="text-[#2A2C38] font-bold">Online Booking</span>
          </div>
          <h2 className="text-3xl font-bold text-[#2A2C38] mb-4">
            Contact Us To Start Saving Time And Money
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NAME"
              className="bg-white text-black  py-3 pl-2 outline-none placeholder:font-bold rounded-md"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-white text-black  py-3 pl-2 outline-none placeholder:font-bold rounded-md"
            />
            <input
              type="text"
              placeholder="SUBJECT"
              className="bg-white text-black  py-3 pl-2 outline-none placeholder:font-bold rounded-md"
            />
            <button className="bg-[#22232D] text-white hover:scale-105 transition-all duration-300 py-3 rounded-md">
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
