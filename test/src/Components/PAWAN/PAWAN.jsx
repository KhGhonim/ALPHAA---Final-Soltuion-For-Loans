import { motion } from "framer-motion";
// @ts-ignore
import bg from "../../assets/Pawnbg.jpg";
import { useLocation } from "react-router-dom";

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

export default function PAWAN({ photo }) {
  const location = useLocation();
  return (
    <div
      style={{
        filter: "brightness(110%)",
      }}
      className="relative min-h-96 py-10 px-6 flex flex-col items-center justify-center text-center font-cairo overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-top bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(110%) opacity(100%)",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></div>

      {/* Background gradient overlay with opacity */}
      <div className="absolute inset-0 bg-gradient-to-l from-orange-400 to-orange-500 opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-50 space-y-4 flex justify-center items-center flex-col">
        <div className="flex justify-center">
          {location.pathname === "/about-us" ? (
            <div className="w-16 h-16 bg-[#2A2C38] mb-4" />
          ) : (
            <img src={photo} alt="Man Logo" className="w-16 h-16 mb-4" />
          )}
        </div>

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
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
          className="bg-white cursor-pointer  z-50 hover:!scale-110 w-44 text-black max-md:w-full font-bold py-5 px-8 rounded-lg shadow-lg transition-all duration-300"
        >
          <motion.button className="z-50" variants={childVariants}>
            CONTACT US
          </motion.button>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-center mt-6 text-center gap-2">
          <p className="text-[#2A2C38] text-lg mb-3">
            Feel Free to Get in Touch for a No Obligations
          </p>
          <p className="underline text-lg text-[#2A2C38]">
            Call<span className="font-bold underline text-lg"> PAWAN !!!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
