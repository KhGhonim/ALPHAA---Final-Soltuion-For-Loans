import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import Arrow from "../../assets/Arrow.json";
import { motion } from "framer-motion";
import homeloans from "../../assets/ServicesBanner.jpg";
import Comp from "../../assets/comp.jpg";
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
                <button className="bg-orange-500 absolute flex justify-center items-center text-2xl flex-col text-black top-0 right-0 w-44 h-44 rounded-l-3xl hover:bg-white transition-all duration-500 ease-in-out font-bold">
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
    </div>
  );
}
