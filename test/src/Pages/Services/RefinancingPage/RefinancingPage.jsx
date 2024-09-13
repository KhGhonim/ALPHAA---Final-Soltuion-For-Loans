// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/Home-family.webp";
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

export default function RefinancingPage() {
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
    <div className="flex flex-col  h-full  bg-white font-cairo   pb-[530px] md:pb-40    relative">
      <Helmet>
        <title>Refinancing - AlPHAA Financial Solutions</title>
      </Helmet>
      <h1 className="text-4xl md:text-5xl md:ml-28 font-bold p-4 ">
        Refinancing
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
              Refinancing
            </h1>
          </motion.div>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <section className="bg-[#F5F5F5] py-28 ">
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
              backgroundPosition: "center center",
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
            <h2 className="text-5xl font-bold text-gray-800">
              Refinancing at Alpha Financial Solutions{" "}
            </h2>
            <p className="text-[#585860] leading-relaxed text-lg">
              At Alpha Financial Solutions, we offer comprehensive refinancing
              services to help you optimize your current mortgage and achieve
              your financial goals. Whether you’re looking to lower your monthly
              payments, shorten your loan term, or access equity in your home,
              our team of experts is here to guide you through the refinancing
              process with ease and efficiency.
            </p>
            <h3 className="text-3xl text-center font-bold text-gray-800">
              Refinancing Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-lg text-gray-800">
                  Lower Your Interest Rates
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  We analyze your existing loans to find opportunities for
                  refinancing at lower interest rates, helping you save money
                  and reduce your monthly payments.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-lg  text-gray-800">
                  Consolidate Multiple Loans for Simplicity
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  If you have multiple loans, we can help you consolidate them
                  into a single, more manageable payment plan, making it easier
                  to keep track of your finances.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  Adjust Your Loan Terms for Better Flexibility
                </h4>
                <p className=" text-lg leading-relaxed text-[#585860]">
                  Whether you need to shorten or extend your loan term, we offer
                  solutions to adjust your repayment plan according to your
                  current financial situation and future goals.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  Identify Hidden Costs and Fees
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  Our detailed loan review process uncovers any hidden costs or
                  fees in your current loans, allowing you to make informed
                  decisions and potentially renegotiate terms.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <CallToAction />
      </section>

      <div className="flex flex-col items-center max-md:pt-[500px] md:mt-32">
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
