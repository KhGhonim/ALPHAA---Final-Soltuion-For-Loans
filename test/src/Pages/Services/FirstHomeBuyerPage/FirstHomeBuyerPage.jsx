// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
// @ts-ignore
import Asians from "../../../assets/cheerful-family-2023-11-27-05-20-02-utc-scaled.jpg";
import Lottie from "lottie-react";
import Arrow from "../../../assets/Arrow.json";
import { useState, useRef, useEffect } from "react";
import CallToAction from "../../../Components/CallToAction/CallToAction";

export default function FirstHomeBuyerPage() {
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
        setHeight("24rem");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [sliderHeight]);

  return (
    <div className="flex flex-col  h-full  bg-white font-cairo   pb-[530px] md:pb-40    relative">
      <h1 className="text-4xl md:text-5xl md:ml-28 font-bold p-4 ">
        Home Loans
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
            First Home Buyer
          </h1>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <section className="bg-[#F5F5F5] py-28 ">
        <div className="container p-5 mx-auto flex flex-col-reverse lg:flex-row gap-12">
          <div
            className={`w-full  lg:w-2/5 rounded-2xl`}
            style={{
              backgroundImage: `url(${Asians})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: height,
            }}
          ></div>

          <div ref={cardsRef} className="lg:w-3/5 h-full  space-y-8 ">
            <h2 className="text-5xl font-bold text-gray-800">
              First Home Buyer At Alpha Financial Solutions
            </h2>
            <p className="text-[#585860] leading-relaxed text-lg">
              At Alpha Financial Solutions, we understand that purchasing your
              first home is one of the most significant financial decisions
              you'll ever make. As a first-time homebuyer, navigating the
              complexities of the real estate market and mortgage options can be
              overwhelming. That's why we offer tailored financial solutions and
              expert guidance to help you make informed decisions and achieve
              your dream of homeownership.
            </p>
            <h3 className="text-3xl leading-relaxed text-center font-bold text-gray-800">
              Services Offered To First Home Buyers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className=" leading-relaxed font-bold text-lg text-gray-800">
                  Personalized Mortgage Options:
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  We offer a range of mortgage products specifically designed
                  for first-time buyers, including fixed-rate and
                  adjustable-rate mortgages. Our financial advisors work with
                  you to find the best loan that fits your budget and long-term
                  goals.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg leading-relaxed text-gray-800">
                  Pre-Approval Assistance:
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  Getting pre-approved for a mortgage is a critical first step.
                  We guide you through the pre-approval process, helping you
                  understand how much you can afford and giving you a
                  competitive edge when making an offer on a home.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  Down Payment Solutions:
                </h4>
                <p className=" text-lg leading-relaxed text-[#585860]">
                  Struggling with the down payment? Alpha Financial Solutions
                  provides access to various programs and strategies to help you
                  secure the funds needed for your down payment, whether through
                  savings plans, grants, or special loan products.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  First-Time Buyer Incentives:
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  We help you take advantage of government programs and
                  incentives specifically designed for first home buyers, such
                  as tax credits, reduced-interest loans, and grants that can
                  lower the overall cost of purchasing your home.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  Expert Financial Guidance:
                </h4>
                <p className="text-lg leading-relaxed  text-[#585860]">
                  Our team of experienced financial advisors is here to support
                  you at every step of the home-buying process. From
                  understanding your budget to exploring mortgage options and
                  closing the deal, we provide the expert advice you need to
                  make confident decisions.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg leading-relaxed font-bold text-gray-800">
                  Credit Counseling:
                </h4>
                <p className="text-lg leading-relaxed text-[#585860]">
                  If you're concerned about your credit score, we offer credit
                  counselling services to help you improve your credit profile,
                  making it easier to qualify for favourable mortgage terms.
                </p>
              </div>
            </div>
          </div>
        </div>

      <CallToAction />
      </section>


    </div>
  );
}
