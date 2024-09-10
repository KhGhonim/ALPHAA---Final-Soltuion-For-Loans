import { motion } from "framer-motion";
import bg from "../../assets/Pawnbg.jpg";
import man from "../../assets/img-icon-02-1.png";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      duration: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      duration: 0.8,
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function PAWAN() {
  return (
    <div
      className="bg-orange-500 space-y-4 flex flex-col items-center justify-center min-h-96 text-center py-10 px-6  font-cairo bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bg}), url(https://alphaafin.com.au/wp-content/uploads/2024/08/img-section-03-min-1.jpg)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        filter: "brightness(120%)     opacity(100%) ",
      }}
    >

      <div>
        <img src={man} alt="Man Logo" className="w-20 h-20 mb-4"  />
      </div>
      <motion.div variants={parentVariants} initial="hidden" animate="visible">
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-5xl font-bold text-[#2A2C38] mb-4"
        >
          Talk To PAWAN Now!
        </motion.h1>
      </motion.div>

      {/* Animate button with smoother effect */}
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="bg-white hover:scale-110 text-black max-md:w-full font-bold py-5 px-8 rounded-lg shadow-lg transition-all duration-300"
      >
        <motion.button variants={childVariants}>CONTACT US</motion.button>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-center mt-6 text-center gap-2   ">
        <p className="text-[#2A2C38] text-lg mb-3">
          Feel Free to Get in Touch for a No Obligations{" "}
        </p>
        <p className="underline text-lg text-[#2A2C38]">
          Call<span className="font-bold underline text-lg"> PAWAN !!!</span>
        </p>
      </div>
    </div>
  );
}
