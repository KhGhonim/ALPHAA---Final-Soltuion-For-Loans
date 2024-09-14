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
                className="w-10/12 h-4/6 object-cover rounded-b-3xl rounded-l-3xl"
              />

              {/* MD divs */}
              <div className="hidden md:block lg:hidden absolute bottom-[25%] left-[20%] hover:border-none cursor-pointer hover:bottom-[30%] transition-all duration-500  border-b-8 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
                <span className="text-5xl font-bold">320+</span>
                <br />
                <span className="text-base font-bold">Lenders</span>
              </div>
              <div className="hidden md:block lg:hidden absolute bottom-[20%] right-4 border-b-8 hover:border-none cursor-pointer hover:bottom-[25%] transition-all duration-500 bg-white border-orange-400 text-center py-14 px-20   rounded-3xl">
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
      <div className="flex md:hidden lg:hidden h-screen flex-col overflow-hidden relative">
        <div className="h-[60%] bg-[#2A2C38] flex flex-col relative">
          <img src={smroof} alt="" className="w-56 absolute -top-10" />
          <div className="mx-auto w-full pt-14 px-4 sm:px-6 lg:px-8 mb-8">
            <div className="bg-[#22232D] h-20 flex rounded-3xl items-center justify-center">
              <h1 className="text-4xl font-bold text-white">
                We Believe You're Bright
              </h1>
            </div>
          </div>
          <div className="flex-grow flex items-end justify-center pb-8">
            <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
              <img
                src={family}
                alt="Family taking selfie"
                className="w-full h-full object-cover rounded-t-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="h-[40%] bg-[#F5F5F5] relative">
          <div className="absolute inset-x-0 top-0">
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#22232D] h-72 rounded-b-3xl shadow-lg relative">
                <div className="flex flex-col gap-4 p-6">
                  <div className="bg-white absolute  right-6 left-6 -top-10 hover:-top-16 transition-all duration-300 ease-linear rounded-3xl p-4 border-b-8 border-orange-400">
                    <p className="text-4xl font-bold text-center">320+</p>
                    <p className="text-base font-bold text-center">Lenders</p>
                  </div>
                  <div className="bg-white absolute  right-6 left-6 top-28 hover:top-20 transition-all duration-300 ease-linear rounded-3xl p-4 border-b-8 border-orange-400">
                    <p className="text-4xl font-bold text-center">20+</p>
                    <p className="text-base font-bold text-center">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden w-full bg-[#F5F5F5] md:h-16"></div>
    </div>
  );
}
