import { motion } from "framer-motion";
import family2 from "../../assets/family2.jpg";
import HOUSE from "../../assets/Minihome.png";

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
  return (
    <div className="relative w-full pt-16 overflow-hidden  bg-white ">
      <div className=" md:container md:mx-auto flex flex-col md:flex-row gap-7 p-5 justify-between md:py-24 md:px-36 relative">
        <div className="w-full md:w-2/3 h-96 flex   p-4 rounded-3xl">
          <img
            src={family2}
            alt="Family Playing Together"
            className="w-full h-72 md:h-full object-cover rounded-3xl border-r-8 border-b-8 border-[#F5F5F5]"
          />
          <motion.div variants={parentVariants} initial="hidden" animate="visible"  className="absolute bottom-14 md:bottom-6 left-4 md:left-20 flex items-center justify-center z-20">
            <img
              alt="House Icon"
              src={HOUSE}
              className="w-56 h-32 md:w-96 md:h-56"
            />
          </motion.div>
        </div>

        <motion.div variants={parentVariants2} initial="hidden" animate="visible" className="w-full h-full md:h-96 md:w-1/2 bg-[#F5F5F5] rounded-3xl"></motion.div>
      </div>
    </div>
  );
}
