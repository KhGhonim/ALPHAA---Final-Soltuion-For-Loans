import smroof from "../../assets/smroof.png";
import family from "../../assets/Home-family.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <div>
      {/** MD */}
      <div className="hidden md:flex  h-[100dvh] w-full relative bg-[#2A2C38] overflow-hidden">
        <div className="w-full lg:w-full absolute bottom-0 left-0 h-1/2 bg-[#F5F5F5] "></div>

        <div className="hidden md:flex lg:hidden  w-full justify-center absolute -top-16 z-20  left-0 items-start flex-col ">
          <div className="w-full h-28 bg-[#2A2C38]"></div>
          <div className="w-full flex justify-center  bg-[#22232D] h-40 items-start flex-col pl-10">
            <div
              className="w-40 absolute top-8 h-40 bg-orange-500"
              style={{
                maskImage: `url(${smroof})`,
                WebkitMaskImage: `url(${smroof})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            ></div>

            <h1 ref={ref2} className="text-5xl font-bold text-white text-start">
              We Believe You're Bright
            </h1>
          </div>

          <motion.div
            variants={parentVariants2}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="absolute bg-[#22232D] top-[100%] left-0    right-0"
          >
            <div className="w-full bg-[#22232D] flex h-[100dvh] justify-end">
              <img
                src={family}
                alt="Family photo"
                className="w-10/12 h-96 object-cover rounded-b-xl"
              />

              {/* MD divs */}
              <div className="hidden md:block lg:hidden absolute bottom-[40%] left-[20%] hover:border-none cursor-pointer hover:bottom-[45%] transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
                <span className="text-5xl font-bold">320+</span>
                <br />
                <span className="text-base font-bold">Lenders</span>
              </div>
              <div className="hidden md:block lg:hidden absolute bottom-[35%] right-4 border-b-8 hover:border-none cursor-pointer hover:bottom-[40%] transition-all duration-500 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
                <span className="text-5xl font-bold">20+</span>
                <br />
                <span className="text-base font-bold">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/** LG  */}
        <div className="hidden lg:flex absolute lg:rounded-l-3xl   bg-[#22232D]  top-10  lg:top-0 bottom-0 max-md:bottom-10 left-0 lg:left-[10%] right-0 lg:right-1/2 flex-col lg:flex-row justify-between items-center lg:space-y-10 ">
          <div className="w-full flex justify-center  left-0 items-start flex-col p-4 pl-16 lg:pt-0 lg:p-16">
            <img src={smroof} alt="HouseRoof" className="w-56" />

            <h1 ref={ref} className="text-5xl font-bold text-white text-start">
              We Believe You're Bright
            </h1>
          </div>
        </div>

        <motion.div
          variants={parentVariants2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block absolute lg:bg-[#22232D]    lg:top-0 lg:left-1/2 h-full right-0"
        >
          <img
            src={family}
            alt="Family photo"
            className="w-full  md:h-96  lg:h-[75dvh] object-cover rounded-b-xl"
          />

          {/* LG divs */}
          <div className="hidden lg:block  absolute bottom-28 left-10 hover:border-none cursor-pointer hover:bottom-36 transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
            <span className="text-5xl font-bold">320+</span>
            <br />
            <span className="text-base font-bold">Lenders</span>
          </div>
          <div className="hidden lg:block absolute bottom-14 right-8 border-b-8 hover:border-none cursor-pointer hover:bottom-20 transition-all duration-500 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
            <span className="text-5xl font-bold">20+</span>
            <br />
            <span className="text-base font-bold">Years Experience</span>
          </div>
        </motion.div>
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
      <div className="hidden md:block lg:hidden w-full bg-[#F5F5F5] md:h-16"></div>
    </div>
  );
}
