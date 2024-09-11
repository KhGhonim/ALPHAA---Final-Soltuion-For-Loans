// @ts-ignore
import homeloans from "../../../assets/homeloans.jpg";
import Lottie from "lottie-react";
import Arrow from "../../../assets/Arrow.json";
// @ts-ignore
import HouseRoof from "../../../assets/secoundroof3.png";
import PhotoAndCards from "../../../Components/PhotoAndCards/PhotoAndCards";
import PersonsWithKey from "../../../Components/PersonsWithKey/PersonsWithKey";
import CallToAction from "../../../Components/CallToAction/CallToAction";

export default function HomeLoanPage() {
  return (
    <div className="flex flex-col  h-full  bg-white font-cairo">
      <h1 className="text-4xl md:text-5xl md:ml-28 font-bold p-4 ">
        Home Loans
      </h1>
      {location.pathname === "/HOME-LOAN" ? (
        <div className="w-full relative">
          <img
            src={homeloans}
            alt="Services Banner"
            className="w-full h-80 object-cover object-center "
          />
          <div className="w-full h-80 absolute z-20 inset-0 bg-[#2A2C38] opacity-70">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <h1 className="text-5xl text-center font-bold p-4 text-white">
                Home Loans
              </h1>
              <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
            </div>
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

      <PhotoAndCards />
      <PersonsWithKey />
    </div>
  );
}
