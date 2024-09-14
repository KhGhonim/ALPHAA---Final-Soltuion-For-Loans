import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { HomeSlider } from "../../constants/db";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      stiffness: 100,
      damping: 10,
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Swiper
      effect={"fade"}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        
      }}
      allowTouchMove={false} 
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      modules={[Autoplay, EffectFade, Navigation]}
      className="mySwiper h-dvh border-b-[15px] border-t-[13px] border-[#F5F5F5] relative "
    >
      {HomeSlider.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.ServicesSlider}
            alt={`slide ${index}`}
            className="w-full h-full object-cover zoom-out"
          />
          <motion.div
            key={currentSlide}
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            className="absolute max-lg:px-7 max-w-6xl right-0 left-0 top-[45%] space-y-3  lg:space-y-16  container mx-auto  z-40 text-white text-center"
          >
            <h1 className="text-2xl md:text-7xl calistoga-regular  font-bold">
              {slide.text}
            </h1>
            <p className="text-xs md:text-lg roboto-regular ">
              {slide.subtitle}
            </p>
          </motion.div>
        </SwiperSlide>
      ))}

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="button-prev absolute bottom-1/2 left-8 z-30"
      >
        <MdOutlineKeyboardArrowLeft
          color="white"
          size={35}
          className="text-white hover:bg-black rounded-full transition-transform duration-500 ease-in-out cursor-pointer bg-black/30"
        />
      </motion.div>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="button-next absolute bottom-1/2 right-8 z-30"
      >
        <MdOutlineKeyboardArrowRight
          color="white"
          size={35}
          className="hover:bg-black text-white rounded-full transition-transform duration-300 ease-in-out cursor-pointer bg-slate-800/60"
        />
      </motion.div>
    </Swiper>
  );
}
