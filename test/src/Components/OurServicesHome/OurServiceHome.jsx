/* eslint-disable react/prop-types */
// @ts-ignore
import HouseRoof from "../../assets/secoundroof3.png";
// @ts-ignore
import ServiceHomeCard from "./ServiceHomeCard";
import { ServicesHomeDB1, ServicesHomeDB2 } from "../../constants/db";
import ServiceSlider from "./ServiceSlider";
import { useState, useRef, useEffect } from "react";
import SliderPhone from "./SliderPhone";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Arrow from "../../assets/Arrow.json";
import { motion } from "framer-motion";
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
export default function OurServiceHome({
  Title,
  Description,
  Subtitle,
  ServicesBanner,
  ServiceTitle,
  ExtraLoanTitle,
}) {
  const [sliderHeight, setSliderHeight] = useState(0);
  const cardsRef = useRef(null);
  const location = useLocation();

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

  return (
    <div className="flex flex-col  h-full pb-6 bg-[#F5F5F5] font-cairo">
      <h1 className="text-5xl md:ml-28 font-bold p-4 ">{Title}</h1>
      {location.pathname === "/services" ? (
        <div className="w-full relative">
          <img
            src={ServicesBanner}
            alt="Services Banner"
            className="w-full h-80 object-cover object-center "
          />
          <div className="w-full h-80 absolute z-20 inset-0 bg-[#2A2C38] opacity-70"></div>
          <div className="w-full h-full absolute z-30 inset-0 flex justify-center items-center flex-col">
            <motion.div
              variants={ComingFromDown}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl text-center font-bold p-4 text-white">
                {ServiceTitle}
              </h1>
            </motion.div>
            <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
          </div>
        </div>
      ) : null}
      <div className="flex flex-col items-center mt-8">
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
        <div className="flex flex-col items-center container capitalize w-4/6">
          <h6
            className={` text-center ${
              location.pathname === "/services"
                ? "py-4 text-lg"
                : "text-4xl pt-4"
            }  font-bold `}
          >
            {Subtitle}
          </h6>
          <h1 className="text-4xl text-center font-bold ">{Description}</h1>
          <h1 className="text-2xl text-center font-bold ">{ExtraLoanTitle}</h1>
        </div>
      </div>

      <div className="w-full flex max-md:flex-col lg:flex-row  justify-between items-start lg:container gap-6 lg:mx-auto h-full mb-10  mt-20 max-lg:p-3 font-cairo">
        {/* First Card */}
        <div
          ref={cardsRef}
          className=" flex w-full md:w-1/2 lg:w-2/6  gap-6  items-start  max-md:p-1 flex-wrap  max-md:gap-16"
        >
          {ServicesHomeDB1.map((item, index) => (
            <ServiceHomeCard key={index} item={item} />
          ))}
        </div>
        {/* Second Card */}
        <div className=" flex w-full md:w-1/2 lg:w-2/6  gap-6  items-start  max-md:p-1 flex-wrap  max-md:gap-16">
          {ServicesHomeDB2.map((item, index) => (
            <ServiceHomeCard key={index} item={item} />
          ))}
        </div>

        {/* Photo Slider */}
        <div className="hidden lg:block lg:w-2/6 h-full px-6 rounded-3xl font-cairo ">
          <ServiceSlider height={sliderHeight} />
        </div>
      </div>
      {/* Phone Slider */}
      <div className="block lg:hidden mt-7 w-full h-96 rounded-3xl p-3 font-cairo ">
        <SliderPhone />
      </div>
    </div>
  );
}
