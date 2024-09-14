/* eslint-disable react/no-unescaped-entities */
// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/happy-indian-family-of-four-looking-at-photo-album-2024-02-13-20-54-46-utc.jpeg-scaled.jpg";
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

export default function AssetFinancePage() {
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
        setHeight("20rem");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [sliderHeight]);

  return (
    <div className="flex flex-col  h-full  bg-white font-cairo  pb-[30px] md:pb-20   !overflow-hidden  relative">
      <Helmet>
        <title>Asset Finance - AlPHAA Financial Solutions</title>
      </Helmet>

      <h1 className="text-4xl bg-[#F5F5F5] md:text-5xl md:pl-24 font-bold p-4 ">
        Asset Finance
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
            <h1 className="text-4xl md:text-5xl text-center font-bold p-4 text-white">
              Asset Finance
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
          className={`container p-5 mx-auto flex flex-col-reverse lg:flex-row gap-12 `}
        >
          <motion.div
            variants={childVariants}
            className={`w-full h-full lg:w-2/5 rounded-2xl`}
            style={{
              backgroundImage: `url(${Asians})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: height,
            }}
          ></motion.div>

          <motion.div variants={childVariants} ref={cardsRef} className="lg:w-3/5 h-full  space-y-8 ">
            <div className="space-y-1 mb-2 p-1">
              <h2 className="text-3xl leading-snug  capitalize font-bold mb-3 text-gray-800">
                Secure the Equipment and Assets Your Business Needs with Alphaa
                Financial Solutions
              </h2>
              <p className="text-[#585860] leading-relaxed text-xl">
                At Alphaa Financial Solutions, we offer tailored asset and
                vehicle finance solutions to help you acquire the equipment or
                vehicle you need with ease.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Whether you're looking to purchase a new car, upgrade your
                business equipment, or finance a fleet, our team provides expert
                advice and customized financing options.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                We streamline the application process and work to secure
                competitive rates, ensuring you get the best possible terms to
                support your personal or business objectives.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Trust us to simplify your asset and vehicle financing, so you
                can focus on what matters most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
              <div className="space-y-2 md:space-y-4">
                <h4 className="font-bold leading-relaxed text-xl text-gray-800">
                  Flexible Financing for a Wide Range of Assets
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  From machinery to vehicles, we provide financing options that
                  cover a broad spectrum of business assets, ensuring you have
                  the right tools to succeed.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-xl  text-gray-800">
                  Preserve Cash Flow with Tailored Repayment Plans
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Our asset finance solutions offer flexible repayment plans
                  that align with your cash flow, allowing you to maintain
                  liquidity while investing in essential assets.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Competitive Rates for Cost-Effective Asset Acquisition
                </h4>
                <p className=" text-base leading-relaxed text-[#585860]">
                  Benefit from competitive interest rates that make it easier
                  and more affordable to finance the assets your business needs
                  to grow and thrive.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Expert Guidance Throughout the Financing Process
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Our team of asset finance specialists is here to guide you
                  through the entire financing process, providing personalized
                  support to ensure a seamless experience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <CallToAction />
      </section>

      <div className="flex flex-col  items-center max-lg:pt-[400px] lg:mt-36">
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
