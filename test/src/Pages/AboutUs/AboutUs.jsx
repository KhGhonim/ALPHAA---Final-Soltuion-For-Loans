// @ts-ignore
import HouseRoof from "../../assets/secoundroof3.png";
// @ts-ignore
import about from "../../assets/about-us.jpg";
// @ts-ignore
import signature from "../../assets/signature.png";
// @ts-ignore
import blackboy from "../../assets/blackboy.jpg";
// @ts-ignore
import whitboiy from "../../assets/whitboiy.jpg";
// @ts-ignore
import yasli from "../../assets/yasli.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { ServicesHomeSlider } from "../../constants/db";
import AboutUsSlider from "./AboutUsSlider";
import { Helmet } from "react-helmet-async";
import PAWAN from "../../Components/PAWAN/PAWAN";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const ComingFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1,
    },
  },
};

const ComingFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
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
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
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

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Ref2 = useRef(null);
  const isInView2 = useInView(Ref2, { once: true });
  const Ref3 = useRef(null);
  const isInView3 = useInView(Ref3, { once: true });
  return (
    <div className="w-full h-full bg-[#F5F5F5] font-cairo overflow-hidden">
      <Helmet>
        <title>About Us - AlPHAA Financial Solutions</title>
      </Helmet>
      <div ref={ref} className="container mx-auto w-full mb-10">
        <h1 className="text-5xl ml-24 font-bold p-4 ">About Us</h1>

        <div className="flex justify-center items-center">
          <div
            className="w-24 h-24 bg-orange-500  "
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
        </div>
        <motion.div
          variants={ComingFromDown}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center pb-4 "
        >
          <h1 className="text-4xl font-bold capitalize  text-center">
            We believe you’re bright
          </h1>
        </motion.div>

        <div className="flex justify-center items-center flex-col md:flex-row gap-10 py-10  px-5 md:p-10">
          <motion.div
            variants={ComingFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2 flex flex-col"
          >
            <img
              src={about}
              alt="Family"
              className="w-full h-full object-cover rounded-3xl border-r-orange-400 border-r-8 border-b-orange-400 border-b-8"
            />

            <h1 className="text-2xl font-bold text-[#2A2C38] my-6">
              Our Mission
            </h1>

            <p className="text-[#585855] text-lg leading-[1.6rem]">
              Our mission is to provide our clients with tailored financial
              solutions that cater to their unique needs. We strive to make the
              process of securing a mortgage as straightforward and stress-free
              as possible, guiding you through every step with transparency and
              integrity.
            </p>
          </motion.div>
          <motion.div
            variants={ComingFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full md:w-1/2 flex flex-col"
          >
            <h1 className="text-xl font-bold text-[#2A2C38] my-8">
              Welcome to Alphaa Financial Solutions
            </h1>

            <p className="text-[#585855] leading-[1.6rem]">
              At Alphaa Financial Solutions, we believe in empowering your
              property dreams with our premium financial services. Established
              with a vision to provide seamless loan processing and financial
              advisory, we have grown to become a trusted name in the Australian
              mortgage industry.
            </p>

            <h1 className="text-xl font-bold text-[#2A2C38] my-8">
              Our Story 🙂
            </h1>

            <p className="text-[#585855] leading-[1.6rem]">
              Alphaa Financial Solutions was born out of a desire to simplify
              the complexities of property financing. Our founder,
            </p>
            <p className="text-[#585855] leading-[1.6rem]">
              Mr. Pawan Punjabi, envisioned a company where customer-centricity
              and financial expertise go hand in hand. Over the years, we have
              helped thousands of Australians achieve their dream of owning a
              home, thanks to our unwavering commitment to excellence and
              innovation. Financial Solutions was born out of a desire to
              simplify the complexities of property financing. Our founder,
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-full   bg-[#2A2C38]">
        <motion.div
          ref={Ref2}
          variants={parentVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          className="px-3 md:container md:mx-auto py-10 flex flex-col-reverse md:flex-row gap-7 md:gap-3 justify-center items-center"
        >
          <motion.div
            variants={childVariants}
            className="w-full md:w-1/2  h-full flex justify-center items-center"
          >
            <Swiper
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              allowTouchMove={false} 
              modules={[EffectFade]}
              className="mySwiper w-full h-[35rem]  rounded-3xl border-l-orange-400 border-l-8 border-b-orange-400 border-b-8 "
            >
              {ServicesHomeSlider.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.ServicesSlider}
                    className="w-full h-full object-cover object-center  rounded-3xl "
                    alt={`Slide ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="w-full md:w-1/2  h-full flex flex-col py-8 md:py-20 md:px-10"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-orange-500  "
                style={{
                  maskImage: `url(${signature})`,
                  WebkitMaskImage: `url(${signature})`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              ></div>

              <p className="text-sm font-bold text-orange-500">Why Choose Us</p>
            </div>

            <div className="flex flex-col space-y-10">
              <h1 className="text-3xl text-white font-bold">Our Expertise</h1>
              <p className="text-white">
                Expertise and Experience: With over 20 Years of experience in
                the industry, our team of financial experts brings a wealth of
                knowledge and expertise to the table.
              </p>
              <p className="text-white">
                Customer-Centric Approach: We put our clients at the heart of
                everything we do, offering personalized advice and support to
                help you make informed financial decisions.
              </p>
              <p className="text-white">
                Innovative Solutions: We leverage the latest technology and
                financial products to provide innovative solutions that meet the
                evolving needs of our clients.
              </p>
              <p className="text-white">
                Transparency and Integrity: We pride ourselves on our ethical
                approach, ensuring transparency and integrity in all our
                dealings.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full h-full bg-[#F5F5F5]">
        <motion.div
          variants={ComingFromDownSliders}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          ref={Ref3}
          className="w-full md:container md:mx-auto pt-10 flex  justify-center gap-7"
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
      <PAWAN photo={whitboiy} />
    </div>
  );
}
