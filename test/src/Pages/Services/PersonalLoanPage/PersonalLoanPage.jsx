// @ts-nocheck
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/Englishdude.jpg";
import Lottie from "lottie-react";
import Arrow from "../../../assets/Arrow.json";
import { useState, useRef, useEffect } from "react";
import CallToAction from "../../../Components/CallToAction/CallToAction";
// @ts-ignore
import HouseRoof from "../../../assets/secoundroof3.png";
import PhotoAndCards from "../../../Components/PhotoAndCards/PhotoAndCards";
import { CardsForRefinancing } from "../../../constants/db";

export default function PersonalLoanPage() {
  const [sliderHeight, setSliderHeight] = useState(0);
  const [height, setHeight] = useState("auto");
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
      <h1 className="text-4xl bg-[#F5F5F5] md:text-5xl md:pl-28 font-bold p-4 ">
        Personal Loan
      </h1>

      <div className="w-full relative ">
        <img
          src={homeloans}
          alt="Services Banner"
          className="w-full h-80 object-cover object-center "
        />
        <div className="w-full  h-80 absolute z-20 inset-0 bg-[#2A2C38] opacity-70"></div>
        <div className="w-full absolute z-20 inset-0  h-full flex justify-center items-center flex-col">
          <h1 className="text-4xl md:text-5xl text-center font-bold p-4 text-white">
            Personal Loan
          </h1>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <section className="bg-[#F5F5F5] pt-16 py-28 max-md:px-2">
        <div className="container p-5 mx-auto flex flex-col-reverse lg:flex-row gap-12">
          <div
            className={`w-full  lg:w-2/5 rounded-2xl`}
            style={{
              backgroundImage: `url(${Asians})`,
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: height,
            }}
          ></div>

          <div ref={cardsRef} className="lg:w-3/5 h-full  space-y-8 ">
            <div className="space-y-1 mb-2 p-1">
              <h2 className="text-3xl leading-snug  capitalize font-bold mb-3 text-gray-800">
                Achieve Your Personal Goals with Alphaa Financial Solutions'
                Personal Loans
              </h2>
              <p className="text-[#585860] leading-relaxed text-xl">
                At Alphaa Financial Solutions, we offer a range of personal loan
                options designed to meet your unique financial needs.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Whether you're looking to consolidate debt, fund a major
                purchase, or cover unexpected expenses, our team is dedicated to
                finding the right loan solution for you.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                We provide personalized support throughout the application
                process, ensuring you secure the best rates and terms available.
              </p>
              <p className="text-[#585860] leading-relaxed text-xl">
                Trust us to make your financial goals more achievable with
                tailored, flexible personal loan solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14">
              <div className="space-y-2 md:space-y-4">
                <h4 className="font-bold leading-relaxed text-xl text-gray-800">
                  Flexible Loan Amounts for Your Needs
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Borrow the exact amount you need, whether it’s for a small
                  expense or a significant purchase. Our personal loans offer
                  the flexibility to choose the loan amount that best suits your
                  needs.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold leading-relaxed text-xl  text-gray-800">
                  Quick and Easy Application Process
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Apply for a personal loan with ease through our streamlined
                  application process. We prioritize fast approvals, so you can
                  access the funds you need without delay.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Competitive Interest Rates for Affordable Repayments
                </h4>
                <p className=" text-base leading-relaxed text-[#585860]">
                  Our personal loans come with competitive interest rates that
                  make repayments manageable, helping you achieve your financial
                  goals without unnecessary stress.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl leading-relaxed font-bold text-gray-800">
                  Repayment Plans Tailored to Your Budget
                </h4>
                <p className="text-base leading-relaxed text-[#585860]">
                  Choose from a variety of repayment plans that fit your budget
                  and financial situation. We offer flexible terms to ensure
                  your loan is repaid comfortably and on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CallToAction />
      </section>

      <div className="flex flex-col  items-center max-md:pt-[500px] md:mt-36">
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
        Style={`pt-16 pb-24 gap-24 md:gap-0 md:space-x-6 container mx-auto p-7 md:p-10`}
        CardImageStyle={`w-full h-60 md:w-96   object-cover object-center rounded-lg`}
        CardTextStyle={`h-42 `}
        ParentDivStyle={`top-[65%] hover:top-[60%] max-md:-bottom-10 max-md:hover:bottom-0  inset-x-0 mx-auto`}
      />
    </div>
  );
}
