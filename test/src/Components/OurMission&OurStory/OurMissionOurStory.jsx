import { Link } from "react-router-dom";

export default function OurMissionOurStory() {
  return (
    <section className="border-t-8 border-orange-400 bg-[#2A2C38]  max-md:pb-16 max-md:pt-8 max-md:px-6 md:p-16 h-full  md:h-96 ">
      <div className="flex container mx-auto  flex-col md:flex-row gap-6">
        <div className="bg-white border-b-[7px] border-orange-400  p-12 rounded-3xl shadow-md flex-1">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="my-5 text-[#585855]">
            Alpha Financial Solutions provides bespoke mortgage and finance
            services. We believe that financial freedom is not just a goal but a
            journey, and we are here to guide you every step of the way.
          </p>
          <Link
            to="#"
            className="font-bold text-sm hover:text-orange-400 hover:px-5 transition-all duration-700"
          >
            KNOW MORE
          </Link>
        </div>

        <div className="bg-white border-b-[7px] border-orange-400  p-12 rounded-3xl shadow-md flex-1">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="my-5 text-[#585855]">
            At Alpha Financial Solutions, our mission is to empower individuals
            and businesses to achieve their financial aspirations through
            tailored solutions, expert advice, and exceptional service. We
            strive to build lasting relationships based on trust, integrity, and
            mutual success.
          </p>
        </div>
      </div>
    </section>
  );
}
