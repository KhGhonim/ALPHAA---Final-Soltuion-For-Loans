import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function QuickContact() {
  return (
    <div className="pt-16 max-md:pt-8 pb-16 px-5 bg-[--DarkBGAndText] text-white mb-2 font-cairo">
      <div className="flex flex-col md:flex-row justify-between gap-8 container mx-auto  ">
        <div className="w-full md:w-1/2 mt-12">
          <h2 className="text-xl font-semibold text-[--Ornage]">
            Quick Contact
          </h2>
          <p className="mt-8 text-lg">
            At Alphaa Financial Solutions, we believe in empowering your
            property dreams with our premium financial services.
          </p>
          <div className="mt-10 space-y-4">
            <p className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaLocationDot />
              </span>{" "}
              <span className="ml-2 font-bold">Sydney, Australia</span>
            </p>
            <Link
              className="flex items-center mt-2 gap-2"
              to={"callto:0468328227"}
            >
              <span className="text-orange-500 font-bold">
                <FaPhone />
              </span>
              <span className="ml-2 font-bold ">0468328227</span>
            </Link>
            <p className="flex items-center mt-2 gap-2">
              <span className="text-orange-500 font-bold text-xl">
                <MdOutlineEmail />
              </span>
              <span className="ml-2 font-bold">info@alphaa.com</span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[--DarkQContact] p-9 rounded-3xl flex flex-col justify-around">
          <h2 className="text-xl font-semibold text-white">Opening Hours</h2>
          <div className="mt-4">
            <Link className="flex justify-between items-center" to={"#"}>
              <span className="text-orange-500 font-bold text-sm">
                MON TO FRI
              </span>
              <span className="flex flex-grow border-dotted border-b-2 border-white mx-1 "></span>
              <span>9:00AM | 5:00PM</span>
            </Link>
            <Link className="flex justify-between items-center mt-2" to={"#"}>
              <span className="text-orange-500 font-bold text-sm">
                SAT TO SUN:
              </span>
              <span className="flex flex-grow border-dotted border-b-2 border-white mx-1 "></span>

              <span>APPOINTMENTS ONLY</span>
            </Link>
          </div>
          <button className="mt-4 font-medium w-full bg-[--Ornage] text-black py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-500">
            SCHEDULE A VISIT
          </button>
        </div>
      </div>
    </div>
  );
}
