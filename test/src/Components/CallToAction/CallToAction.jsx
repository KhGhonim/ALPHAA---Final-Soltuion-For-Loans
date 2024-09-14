import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      duration: 1.5,
    },
  },
};

export default function CallToAction() {
  const Ref3 = useRef(null);
  const isInView3 = useInView(Ref3, { once: true });
  return (
    <motion.div
      ref={Ref3}
      variants={parentVariants}
      initial="hidden"
      animate={isInView3 ? "visible" : "hidden"}
      className="  absolute h-full right-0 left-0 p-7 lg:px-24  text-[#fff]"
    >
      <div className="flex flex-col items-center space-y-1 py-10 lg:py-0  bg-[#2A2C38]  lg:flex-row lg:p-20 gap-3  lg:h-48  container mx-auto rounded-lg ">
        <h1 className="text-4xl text-center py-4   font-bold text-white lg:w-2/6 capitalize">
          How to estimate mortgage payments
        </h1>
        <h5 className="text-center  px-7  text-lg  text-white pb-3 lg:w-3/6">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </h5>
        <div className=" lg:w-1/6 flex justify-center cursor-pointer">
          <button className="text-sm font-bold leading-snug max-md:py-6 max-md:px-10 py-5 px-8 text-black bg-orange-400 hover:bg-white hover:text-[#2A2C38] transition-all duration-300 ease-linear rounded-lg">
            {" "}
            INTEREST RATE
          </button>
        </div>
      </div>
    </motion.div>
  );
}
