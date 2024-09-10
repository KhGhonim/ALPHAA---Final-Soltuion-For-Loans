import HOUSE from "../../assets/HOUSE.png";
import smroof from "../../assets/smroof.png";
import family from "../../assets/Home-family.webp";
import { motion } from "framer-motion";

const parentVariants2 = {
  hidden: { opacity: 0, x: 1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};



export default function Lenders() {
  return (
    <div>
      {/** MD and LG divs */}
      <div className="hidden md:flex  h-[100dvh] w-full relative bg-[#2A2C38] overflow-hidden">
        <div className="w-full lg:w-full absolute bottom-0 left-0 h-1/2 bg-[#F5F5F5] "></div>

        <div className="absolute bg-[#22232D] top-10 lg:top-0 bottom-0 max-lg:bottom-16 left-0 lg:left-[10%] right-0 flex flex-col lg:flex-row justify-between items-center lg:rounded-b-3xl md:space-y-10">
          <div className="lg:w-1/2 flex justify-start items-start flex-col p-4 lg:p-16">
            <img src={HOUSE} alt="House" className="w-56" />

            <h1 className="text-5xl font-bold text-white text-start">
              We Believe You're Bright
            </h1>
          </div>

          <motion.div variants={parentVariants2} initial="hidden" animate="visible" className="md:w-full md:h-4/5 lg:h-full relative">
            <img
              src={family}
              alt="Family photo"
              className="md:w-5/6 md:ml-auto  md:h-4/6 lg:w-full lg:h-5/6 object-cover rounded-b-3xl"
            />

            {/* MD divs */}
            <div className="hidden md:block lg:hidden absolute bottom-[20%] left-1/4 hover:border-none cursor-pointer hover:bottom-1/3 transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
              <span className="text-5xl font-bold">320+</span>
              <br />
              <span className="text-base font-bold">Lenders</span>
            </div>
            <div className="hidden md:block lg:hidden absolute bottom-[14%] right-4 border-b-8 hover:border-none cursor-pointer hover:bottom-1/4 transition-all duration-500 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
              <span className="text-5xl font-bold">20+</span>
              <br />
              <span className="text-base font-bold">Years Experience</span>
            </div>

            {/* LG divs */}
            <div className="hidden lg:block  absolute bottom-20 left-0 hover:border-none cursor-pointer hover:bottom-28 transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
              <span className="text-5xl font-bold">320+</span>
              <br />
              <span className="text-base font-bold">Lenders</span>
            </div>
            <div className="hidden lg:block absolute bottom-5 right-8 border-b-8 hover:border-none cursor-pointer hover:bottom-12 transition-all duration-500 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
              <span className="text-5xl font-bold">20+</span>
              <br />
              <span className="text-base font-bold">Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/** SM divs */}
      <div className="flex md:hidden h-[100dvh] w-full relative bg-[#2A2C38] overflow-hidden ">
        <div className="w-full lg:w-96 absolute bottom-0 left-0 h-1/2 bg-[#F5F5F5] "></div>

        <img
          src={smroof}
          alt="House"
          className="w-56 absolute right-0 left-0 -top-10"
        />

        <div className="absolute bg-[#2A2C38] top-10 h-1/2 bottom-0 left-0 right-0 flex flex-col justify-between items-center space-y-10 container mx-auto">
          <div className="absolute right-0 left-0 top-0 text-4xl font-bold text-white text-start bg-[#22232D] p-8 rounded-3xl ">
            <h1 className=" absolute -top-4">We Believe You're Bright</h1>
          </div>

          <div className="container mx-auto  py-10 w-full h-full">
            <img
              src={family}
              alt="family"
              className=" w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full absolute top-1/2 right-0 left-0 container mx-auto h-80 bg-[#22232D] rounded-b-3xl">
          <div className="block md:hidden lg:hidden absolute bottom-3/4 left-[5%] hover:border-none cursor-pointer hover:bottom-[85%] transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-7 w-11/12    rounded-3xl">
            <span className="text-5xl font-bold">320+</span>
            <br />
            <span className="text-base font-bold">Lenders</span>
          </div>

          <div className="block  md:hidden lg:hidden absolute bottom-[20%] right-[5%] border-b-8 hover:border-none cursor-pointer hover:bottom-[30%] transition-all duration-500 bg-white border-orange-400 text-center py-7 w-11/12  rounded-3xl">
            <span className="text-5xl font-bold">20+</span>
            <br />
            <span className="text-base font-bold">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
