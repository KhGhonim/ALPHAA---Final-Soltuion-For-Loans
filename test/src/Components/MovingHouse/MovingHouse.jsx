import { motion, useInView } from "framer-motion";
import family2 from "../../assets/family2.jpg";
import HOUSE from "../../assets/Minihome.png";
import { useRef } from "react";

const parentVariants = {
  hidden: { opacity: 0, x: -1000 },
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

export default function MovingHouse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative w-full overflow-hidden  bg-white ">
      <div className="  flex flex-col lg:flex-row max-lg:gap-24 p-5  lg:gap-16 lg:py-20 lg:px-36 relative">
        <div
          ref={ref}
          className="w-full lg:w-3/6 h-80 mt-3 flex border-r-8 border-b-8 border-[#F5F5F5] items-center justify-center  rounded-3xl"
        >
          <img
            src={family2}
            alt="Family Playing Together"
            className="w-full h-full object-cover  rounded-3xl "
          />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={parentVariants}
          className="absolute bottom-16 lg:bottom-3 left-4 lg:left-20 flex items-center justify-center z-20"
        >
          <img
            alt="House Icon"
            src={HOUSE}
            className="w-52 h-32 lg:w-96 lg:h-52"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={parentVariants2}
          className="w-full h-20 lg:h-80 lg:w-2/5 bg-[#F5F5F5] rounded-3xl"
        ></motion.div>
      </div>
    </div>
  );
}
