/* eslint-disable react/no-unescaped-entities */
// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/outdoor-portrait-of-cheerful-indian-family-sitting-withmorelight.jpg";
import Lottie from "lottie-react";
import Arrow from "../../../assets/Arrow.json";
import { useState, useRef, useEffect } from "react";
import CallToAction from "../../../Components/CallToAction/CallToAction";
// @ts-ignore
import HouseRoof from "../../../assets/secoundroof3.png";
import PhotoAndCards from "../../../Components/PhotoAndCards/PhotoAndCards";
import { CardsForRefinancing } from "../../../constants/db";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
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

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",

      duration: 1.5,
      staggerChildren: 0.2,
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
export default function CommercialLoanPage() {
  const [sliderHeight, setSliderHeight] = useState(0);
  const [height, setHeight] = useState("auto");
  const cardsRef = useRef(null);
  const Ref3 = useRef(null);
  const isInView3 = useInView(Ref3, { once: true });
  /**
   * This useEffect hook is used to set the height of the slider based on the
   * height of the cards container. The height of the cards container is
   * calculated using the getBoundingClientRect() method, which returns the
   * size of the element and its position relative to the viewport.
   */
  useEffect(() => {
    if (cardsRef.current) {
      const cardsHeight = cardsRef.current.getBoundingClientRect().height;
      setSliderHeight(cardsHeight);
    }
  }, []);

  // Function to update height based on screen size
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1024) {
        setHeight(`${sliderHeight}px`);
      } else {
        setHeight("24rem");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [sliderHeight]);

  return (
    <div className="flex flex-col  h-full  bg-[#F5F5F5] font-cairo   pb-[530px] md:pb-20    relative">
      <Helmet>
        <title>Commercial Loan - AlPHAA Financial Solutions</title>
      </Helmet>
      <h1 className="text-4xl md:text-5xl md:ml-28 font-bold p-4 ">
        Commercial Loan
      </h1>

      <div className="w-full relative ">
        <img
          src={homeloans}
          alt="Services Banner"
          className="w-full h-80 object-cover object-center "
        />
        <div className="w-full  h-80 absolute z-20 inset-0 bg-[#2A2C38] opacity-70"></div>
        <div className="w-full absolute z-20 inset-0  h-full flex justify-center items-center flex-col">
          <motion.div
            variants={ComingFromDown}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl text-center font-bold p-4 text-white">
              Commercial Loan
            </h1>
          </motion.div>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <section className="bg-white pt-16 py-28 max-md:px-2">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          ref={Ref3}
          animate={isInView3 ? "visible" : "hidden"}
          className="container p-5 mx-auto flex flex-col-reverse lg:flex-row gap-12"
        >
          <motion.div
            variants={childVariants}
            className={`w-full  lg:w-2/5 rounded-2xl`}
            style={{
              backgroundImage: `url(${Asians})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: height,
            }}
          ></motion.div>

          <motion.div variants={childVariants} ref={cardsRef} className="lg:w-3/5 h-full  space-y-8 ">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-2  mb-4">
                <div className="w-10 h-7 bg-orange-400 "></div>
                <h2 className="text-[#2A2C38] max-md:ml-2 font-bold text-base ">
                  Financing Solutions for Your Business Growth
                </h2>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Empower Your Business with Tailored Commercial Loans from Alphaa
                Financial Solutions
              </h2>
              <p className="text-[#585860] leading-relaxed text-xl">
                At Alphaa Financial Solutions, we specialize in providing
                comprehensive commercial and business loan solutions tailored to
                your unique needs. Whether you're seeking capital for expansion,
                equipment purchases, or working capital, our team is dedicated
                to finding the right financing option to fuel your growth.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                We offer personalized service and expert guidance throughout the
                loan process, ensuring you secure competitive rates and terms
                that align with your business objectives.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Trust us to help you navigate the complexities of commercial
                financing and achieve your business goals with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-2xl text-gray-800">
                  Custom Loan Packages for Your Business Needs
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  We offer a range of commercial loan packages tailored to suit
                  the specific needs of your business, from real estate
                  acquisitions to equipment financing.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-2xl  text-gray-800">
                  Competitive Interest Rates for Sustainable Growth
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  Our commercial loans come with competitive interest rates that
                  help your business grow sustainably without compromising your
                  cash flow.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl leading-relaxed font-bold text-gray-800">
                  Flexible Repayment Terms for Better Cash Flow Management
                </h4>
                <p className=" text-lg leading-relaxed text-[#585860]">
                  Choose from a variety of repayment terms that align with your
                  business’s cash flow, ensuring that loan repayments are
                  manageable and predictable.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl leading-relaxed font-bold text-gray-800">
                  Expert Support Throughout the Loan Process
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  Our team of commercial loan experts is dedicated to guiding
                  you through every step of the loan process, from application
                  to disbursement, ensuring a smooth and efficient experience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <CallToAction />
      </section>

      <div className="flex flex-col items-center max-md:pt-[500px] md:mt-36">
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
        <div className="flex flex-col items-center container space-y-6 capitalize px-6 w-full">
          <h6 className={`text-lg text-center   font-bold `}>
            Lendevi services{" "}
          </h6>
          <h1 className="text-3xl md:text-4xl text-center font-bold ">
            Many resources can help you make informed decisions during
            homebuying
          </h1>
          <h1 className="text-xl text-center  text-[#585860]">
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </h1>
        </div>
      </div>

      <PhotoAndCards
        Cards={CardsForRefinancing}
        Style={`pt-16 pb-24 gap-24 md:gap-0 md:space-x-6 container mx-auto p-7 md:p-10`}
        CardImageStyle={`w-full h-80 md:w-96   object-cover object-center rounded-lg`}
        CardTextStyle={`h-42 `}
        ParentDivStyle={`top-[65%] hover:top-[60%] max-md:-bottom-10 max-md:hover:bottom-0  inset-x-0 mx-auto`}
      />
    </div>
  );
}
