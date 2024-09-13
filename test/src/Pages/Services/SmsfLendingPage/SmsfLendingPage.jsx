// @ts-nocheck
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/happy-indian-asian-family-having-lunch-at-home-and-2024-05-13-16-50-29-utc.jpeg-scaled.jpg";
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
export default function SmsfLendingPage() {
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
        setHeight("17rem");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [sliderHeight]);

  return (
    <div className="flex flex-col  h-full  bg-white font-cairo   pb-[30px] md:pb-20    relative">
      <Helmet>
        <title>
          Self-Managed Super Fund (SMSF) Lending - AlPHAA Financial Solutions
        </title>
      </Helmet>
      <h1 className="text-4xl bg-[#F5F5F5] md:text-5xl md:pl-24 font-bold p-4 ">
        Self-Managed Super Fund (SMSF) Lending
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
            <h1 className="text-4xl md:text-5xl  text-center font-bold p-9 text-white">
              Self-Managed Super Fund (SMSF) Lending
            </h1>
          </motion.div>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <section className="bg-[#F5F5F5] pt-16 py-28 max-md:px-2">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          ref={Ref3}
          className="container p-5 mx-auto flex flex-col-reverse lg:flex-row gap-12"
        >
          <motion.div
            variants={childVariants}
            className={`w-full  lg:w-2/5 rounded-2xl`}
            style={{
              backgroundImage: `url(${Asians})`,
              backgroundPosition: "80%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: height,
            }}
          ></motion.div>

          <motion.div
            variants={childVariants}
            ref={cardsRef}
            className="lg:w-3/5 h-full  space-y-8 "
          >
            <div className="space-y-1 mb-2 p-1">
              <h2 className="text-3xl pr-1  capitalize font-bold mb-3 text-gray-800">
                Maximize Your Retirement Savings with Alphaa Financial
                Solutions' SMSF
              </h2>
              <p className="text-[#585860] leading-relaxed text-xl">
                At Alphaa Financial Solutions, we offer expert guidance on
                Self-Managed Super Fund (SMSF) loans to help you maximize your
                investment potential.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Whether you're looking to acquire residential or commercial
                property through your SMSF, our team provides tailored advice
                and innovative financing solutions to suit your needs.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                With our deep understanding of SMSF regulations and market
                trends, we ensure a seamless process, allowing you to leverage
                your superannuation for strategic investment opportunities and
                achieve your long-term financial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
              <div className="space-y-2 md:space-y-4">
                <h4 className="font-bold leading-relaxed text-xl text-gray-800">
                  Tailored Lending Solutions for SMSFs
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Our SMSF loans are designed specifically for the unique
                  requirements of self-managed super funds, providing you with
                  the flexibility to invest in residential or commercial
                  property.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-xl  text-gray-800">
                  Competitive Interest Rates to Maximize Returns
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Take advantage of our competitive interest rates that help you
                  maximize the returns on your SMSF property investments,
                  ensuring your retirement savings grow efficiently.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Expert Guidance on SMSF Regulations
                </h4>
                <p className=" text-base leading-relaxed text-[#585860]">
                  Navigating SMSF regulations can be complex, but our team of
                  experts is here to provide personalized advice and support,
                  ensuring compliance and optimal financial outcomes.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Flexible Repayment Options for Financial Security
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  We offer flexible repayment plans that align with your SMSF’s
                  cash flow, helping you manage your retirement savings with
                  confidence and ease.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <CallToAction />
      </section>

      <div className="flex flex-col  items-center max-md:pt-[425px] md:mt-56 lg:mt-32">
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
          <h1 className="text-3xl md:text-4xl max-md:px-5 max-w-3xl text-center font-bold ">
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
        Style={`pt-16 pb-24 gap-24 lg:gap-0 lg:space-x-6 container mx-auto p-7 lg:p-10`}
        CardImageStyle={`w-full h-80 lg:w-96   object-cover object-center rounded-lg`}
        CardTextStyle={`h-42 `}
        ParentDivStyle={`top-[65%] hover:top-[60%] max-md:-bottom-10 max-md:hover:bottom-0  inset-x-0 mx-auto`}
      />
    </div>
  );
}
