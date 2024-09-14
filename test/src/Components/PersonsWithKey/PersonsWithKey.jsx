// @ts-ignore
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CallToAction from "../../Components/CallToAction/CallToAction";
import GuysWITHKEYS from "../../assets/GuysWITHKEYS.jpg";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1.3,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "easeInOut", stiffness: 100, damping: 10 },
  },
};

export default function PersonsWithKey() {
  const Ref3 = useRef(null);
  const isInView3 = useInView(Ref3, { once: true });

  return (
    <div
      ref={Ref3}
      className=" bg-[#F5F5F5] mb-32 pb-[50vh] lg:pb-28 mt-10    relative"
    >
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={isInView3 ? "visible" : "hidden"}
        className="flex flex-col-reverse  lg:p-20 lg:flex-row gap-3 h-full lg:h-dvh container mx-auto rounded-lg "
      >
        <motion.div
          variants={childVariants}
          className="w-full lg:w-2/5 max-lg:p-7 max-lg:py-9"
        >
          <img
            src={GuysWITHKEYS}
            alt="Home loan celebration"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="lg:w-4/6  pt-16 p-9 lg:p-9"
        >
          <div className="flex gap-2 items-center mb-4">
            <div className="w-10 h-7 bg-orange-400 "></div>
            <h2 className="text-[#2A2C38] font-bold text-base ">
              Best Home Loans
            </h2>
          </div>
          <h3 className="text-[#2A2C38]  font-bold text-3xl mb-4">
            Different Types Of Home Loans
          </h3>
          <p className="text-[#2A2C38] leading-relaxed font-normal text-lg mb-8">
            To help you determine the best loan option, we have four different
            types of home loans.
          </p>
          <div className=" flex flex-col gap-7 md:gap-0 md:flex-row justify-center items-center">
            <div className="flex flex-col w-full md:w-1/2 space-y-10">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Fixed-Rate Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Provides stability with fixed payments but may have higher
                  total interest.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Interest-Only Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Lower initial payments but higher total interest payable.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-10">
              <div className="space-y-2">
                <h4 className="font-bold text-lg ">
                  Vundefinedble-Rate Home Loan
                </h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Offers potentially lower payments if rates decrease, but
                  carries risk if rates rise.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Hybrid Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Combines stability of fixed rate initially with potential
                  savings of vundefinedble rate later.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="relative ">
        <CallToAction />
      </div>
    </div>
  );
}
