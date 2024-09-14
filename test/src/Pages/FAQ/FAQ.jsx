import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import Arrow from "../../assets/Arrow.json";
import { motion } from "framer-motion";
import homeloans from "../../assets/ServicesBanner.jpg";
import Comp from "../../assets/comp.jpg";
import ManAnd2Women from "../../assets/ManAnd2Women.jpg";
import { useState } from "react";
import { questions } from "../../constants/db";
import { RxResume } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

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
export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col  h-full  bg-[#F5F5F5]  pb-[30px] md:pb-20  font-cairo  relative">
      <Helmet>
        <title> FAQ's - AlPHAA Financial Solutions</title>
      </Helmet>
      <h1 className="text-4xl bg-[#F5F5F5] md:text-5xl md:pl-24 font-bold p-4 ">
        FAQ's
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
              FAQ's
            </h1>
          </motion.div>
          <Lottie className="w-24 h-24" animationData={Arrow} loop={true} />
        </div>
      </div>

      <div className="bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto py-16 px-10">
          <div className="grid md:grid-cols-2 gap-14">
            <div className="relative overflow-hidden">
              <img
                src={Comp}
                alt="Couple looking at computer"
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <button className="bg-orange-400 absolute flex justify-center items-center text-2xl flex-col text-black top-0 right-0 w-44 h-44 rounded-l-3xl hover:bg-white transition-all duration-500 ease-in-out font-bold">
                  <span>
                    <RxResume className="text-5xl" />
                  </span>
                  Watch Video
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Learn About Rates & Mortgages
              </h2>
              <p className="text-[#2A2C38] text-lg  mb-6">
                As someone who is interested in the world of finance and real
                estate, you may find it beneficial to dive deeper into the topic
                of rates and mortgages.
              </p>
              <div className="space-y-4 bg-white">
                {questions.map((q) => (
                  <div key={q.id} className="overflow-hidden border-b-2">
                    <div className="p-0">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left"
                        onClick={() => toggleQuestion(q.id)}
                      >
                        <span className="text-lg font-bold">{q.question}</span>
                        {expandedId === q.id ? (
                          <FiMinus className="h-5 w-5 text-gray-500" />
                        ) : (
                          <FiPlus className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {expandedId === q.id && (
                        <div className="p-4 bg-gray-50">
                          <p>Answer to goes here.</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col py-20 bg-[#2A2C38]">
      <div className="flex-1 p-6 flex flex-col space-y-8">
        <div className="text-center space-y-6 pb-8">
          <div className="w-20 h-20 bg-orange-400 mx-auto mb-2"></div>
          <p className="text-orange-400 mb-2">Your Mortgage Down Payment</p>
          <h1 className="text-4xl font-bold text-white">How To Navigate Our Mortgage Rates</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto">
          {['You Use Your Property', 'The Type Of Mortgage', 'With Fixed Mortgages'].map((title, index) => (
            <div key={index} className="bg-[#22232D] p-10 rounded-lg flex justify-center flex-col items-center space-y-3 text-center">
              <div className="w-12 h-12 bg-orange-400 mb-4"></div>
              <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-400 rounded-2xl overflow-hidden relative container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5">
              <img
                src={ManAnd2Women}
                alt="People in a meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-3/5 p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#2A2C38] mr-2"></div>
                <span className="text-[#2A2C38] font-semibold">Online Booking</span>
              </div>
              <h2 className="text-2xl font-bold text-[#2A2C38] mb-4">Contact Us To Start Saving Time And Money</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="NAME" className="bg-white" />
                <input type="email" placeholder="EMAIL" className="bg-white" />
                <input type="text" placeholder="SUBJECT" className="bg-white md:col-span-2" />
                <button className="bg-[#2A2C38] text-white hover:bg-[#363845] md:col-span-2">
                  MAKE AN APPOINTMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
