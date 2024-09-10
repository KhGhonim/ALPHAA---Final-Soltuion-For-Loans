// @ts-ignore
import HouseRoof from "../../assets/secoundroof3.png";
import ServiceHomeCard from "./ServiceHomeCard";
import { ServicesHomeDB1, ServicesHomeDB2 } from "../../constants/db";
import ServiceSlider from "./ServiceSlider";
import { useState, useRef, useEffect } from "react";
import SliderPhone from "./SliderPhone";

export default function OurServiceHome() {
  const [sliderHeight, setSliderHeight] = useState(0);
  const cardsRef = useRef(null);

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
    <div className="flex flex-col items-center justify-center h-full  bg-[#F5F5F5] ">
      <div className="flex flex-col items-center mt-16">
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
        <h1 className="text-4xl font-bold ">Our Services</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row p-9 justify-between items-start md:container gap-6 md:mx-auto h-full mb-10  mt-20 max-md:p-1 font-cairo">
        {/* First Card */}
        <div
          ref={cardsRef}
          className=" flex w-full md:w-2/6  gap-6  items-start  max-md:p-1 flex-wrap  max-md:gap-16"
        >
          {ServicesHomeDB1.map((item, index) => (
            <ServiceHomeCard key={index} item={item} />
          ))}
        </div>
        {/* Second Card */}
        <div className=" flex w-full md:w-2/6  gap-6  items-start  max-md:p-1 flex-wrap  max-md:gap-16">
          {ServicesHomeDB2.map((item, index) => (
            <ServiceHomeCard key={index} item={item} />
          ))}
        </div>

        {/* Phone Slider */}
        <div className="block md:hidden mt-7 w-full h-96  rounded-3xl font-cairo ">
          <SliderPhone />
        </div>

        {/* Photo Slider */}
        <div className="hidden md:block md:w-2/6 h-full px-6 rounded-3xl font-cairo ">
          <ServiceSlider height={sliderHeight} />
        </div>
      </div>
    </div>
  );
}
