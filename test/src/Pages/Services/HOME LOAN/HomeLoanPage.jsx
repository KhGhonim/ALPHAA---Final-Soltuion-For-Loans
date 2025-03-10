// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
import Lottie from "lottie-react";
import Arrow from "../../../assets/Arrow.json";
// @ts-ignore
import HouseRoof from "../../../assets/secoundroof3.png";
import PhotoAndCards from "../../../Components/PhotoAndCards/PhotoAndCards";
import PersonsWithKey from "../../../Components/PersonsWithKey/PersonsWithKey";
import { CardsForHomeLoans } from "../../../constants/db";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CallToAction from "../../../Components/CallToAction/CallToAction";
const ComingFromDown = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1,
    },
  },
};

export default function HomeLoanPage() {
  return (
    <div className="flex flex-col  h-full pb-0 md:pb-[10vh] lg:pb-0   bg-white font-cairo">
      <Helmet>
        <title>Home Loans - AlPHAA Financial Solutions</title>
      </Helmet>
      <h1 className="text-4xl bg-[#F5F5F5] md:text-5xl md:pl-24 font-bold p-4  ">
        Home Loans
      </h1>
      {location.pathname === "/HOME-LOAN" ? (
        <div className="w-full relative">
          <img
            src={homeloans}
            alt="Services Banner"
            className="w-full h-80 object-cover object-center "
          />
          <div className="w-full h-80 absolute z-20 inset-0 bg-[#2A2C38] opacity-70"></div>
          <div className="w-full h-full absolute z-20 inset-0 flex justify-center items-center flex-col">
            <motion.div
              variants={ComingFromDown}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl text-center font-bold p-4 text-white">
                Home Loans
              </h1>
            </motion.div>
            <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
          </div>
        </div>
      ) : null}
      <div className="flex flex-col items-center mt-10 md:mt-14">
        <div
          className="w-24 h-24 bg-orange-500"
          style={{
            maskImage: `url(${HouseRoof})`,
            WebkitMaskImage: `url(${HouseRoof})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col items-center container space-y-6 capitalize w-4/6">
          <h6 className={`text-lg text-center   font-bold `}>
            Alphaa Financial Solutions
          </h6>
          <h1 className="text-3xl md:text-4xl text-center font-bold ">
            We offer a variety of home loan options tailored to suit your
            individual needs
          </h1>
          <h1 className="text-2xl text-center font-bold ">
            Our Home Loan Services
          </h1>
        </div>
      </div>

      <PhotoAndCards
        Cards={CardsForHomeLoans}
        Style={`pt-16 pb-24 gap-24 lg:gap-0 lg:space-x-6 container mx-auto p-7 lg:p-10`}
        CardImageStyle={`w-full h-96  object-cover object-center rounded-2xl`}
        CardTextStyle={`h-72 md:h-60 text-center lg:h-64`}
        ParentDivStyle={`-bottom-10 text-center hover:bottom-0 top-[40%] hover:top-[35%] inset-x-0 mx-auto`}
      />
      <PersonsWithKey />
    
    </div>
  );
}
