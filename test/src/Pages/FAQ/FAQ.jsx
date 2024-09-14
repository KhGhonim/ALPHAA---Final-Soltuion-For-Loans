import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import Arrow from "../../assets/Arrow.json";
import { motion, useInView } from "framer-motion";
import homeloans from "../../assets/ServicesBanner.jpg";
import Comp from "../../assets/comp.jpg";
import { useEffect, useRef, useState } from "react";
import { questions } from "../../constants/db";
import { RxResume } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import AboutUsSlider from "../../Pages/AboutUs/AboutUsSlider";
// @ts-ignore
import blackboy from "../../assets/blackboy.jpg";
// @ts-ignore
import whitboiy from "../../assets/whitboiy.jpg";
// @ts-ignore
import yasli from "../../assets/yasli.jpg";
import FAQFormSMAndMD from "./FAQFormSMAndMD";
import FormBG from "./FormBG";

const photos = [blackboy, whitboiy, yasli];
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
      stiffness: 100,
      damping: 10,
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

const parentVariants2 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1.1,
    },
  },
};

const parentVariants3 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1.1,
    },
  },
};

const ComingFromDownSliders = {
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
  const [IsItOpened, setIsItOpened] = useState(questions[0].id);

  const Ref2 = useRef(null);
  const isInView2 = useInView(Ref2, { once: true });

  const Ref3 = useRef(null);
  const isInView3 = useInView(Ref3, { once: true });

  const Ref4 = useRef(null);
  const isInView4 = useInView(Ref4, { once: true });
  useEffect(() => {
    setExpandedId(questions[0].id);
    setIsItOpened(questions[0].id);
  }, [questions]);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
    setIsItOpened(id);
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
        <div ref={Ref2} className="max-w-7xl mx-auto py-16 px-5">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            className="flex flex-col-reverse lg:flex-row  gap-14"
          >
            <motion.div
              variants={childVariants}
              className="relative overflow-hidden"
            >
              <img
                src={Comp}
                alt="Couple looking at computer"
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <button className="bg-orange-400 absolute flex justify-center items-center text-xs md:text-2xl flex-col text-black top-0 right-0 w-20 h-20 md:w-44 md:h-44 rounded-bl-3xl rounded-tr-3xl hover:bg-white transition-all duration-500 ease-in-out font-bold">
                  <span>
                    <RxResume className="text-xl md:text-5xl" />
                  </span>
                  Watch Video
                </button>
              </div>
            </motion.div>

            <motion.div variants={childVariants}>
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
                        <span
                          className={`text-lg font-bold lex justify-between items-center w-full p-4 text-left  ${
                            IsItOpened === q.id
                              ? "  text-orange-400"
                              : "text-black"
                          }`}
                        >
                          {q.question}
                        </span>
                        {expandedId === q.id ? (
                          <FiMinus
                            className={`h-5 w-5 ${
                              IsItOpened === q.id
                                ? " text-orange-400"
                                : "text-black"
                            }`}
                          />
                        ) : (
                          <FiPlus
                            className={`h-5 w-5 ${
                              IsItOpened === q.id
                                ? " text-orange-400"
                                : "text-gray-500"
                            }`}
                          />
                        )}
                      </button>
                      {expandedId === q.id && (
                        <div className="p-4 bg-gray-50">
                          <p>{q.answer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen flex relative  flex-col pt-20 pb-96 lg:py-20 bg-[#2A2C38]">
        <div className="flex-1 p-6  flex flex-col space-y-8">
          <div className="text-center space-y-6 pb-8">
            <motion.div
              variants={parentVariants3}
              initial="hidden"
              animate={isInView3 ? "visible" : "hidden"}
              className="w-20 h-20 bg-orange-400 mx-auto mb-2"
            ></motion.div>
            <p ref={Ref3} className="text-orange-400 mb-2">
              Your Mortgage Down Payment
            </p>
            <h1 ref={Ref4} className="text-4xl font-bold text-white">
              How To Navigate Our Mortgage Rates
            </h1>
          </div>

          <motion.div
            variants={parentVariants2}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto"
          >
            {[
              "You Use Your Property",
              "The Type Of Mortgage",
              "With Fixed Mortgages",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-[#22232D] p-10 rounded-lg flex justify-center flex-col items-center space-y-3 text-center"
              >
                <div className="w-12 h-12 p-5 bg-orange-400 mb-4"></div>
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </motion.div>

          <FormBG />

          <FAQFormSMAndMD />
        </div>
      </div>

      <div className="w-full h-full mt-96 md:mt-[600px] lg:mt-72 bg-[#F5F5F5]">
        <motion.div
          variants={ComingFromDownSliders}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          ref={Ref3}
          className="w-full md:container md:mx-auto flex  justify-center gap-7"
        >
          {photos.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-28 h-28 object-cover object-center border-l-4 border-b-4 rounded-2xl border-b-orange-400 border-l-orange-400"
              alt={`Slide ${index}`}
            />
          ))}
        </motion.div>

        <div>
          <div className="flex justify-center">
            <AboutUsSlider ComingFromDownSliders={ComingFromDownSliders} />
          </div>
        </div>
      </div>
    </div>
  );
}
