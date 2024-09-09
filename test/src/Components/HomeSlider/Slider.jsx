import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { HomeSlider } from "../../constants/db";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function Slider() {
  return (
    <Swiper
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      modules={[Autoplay, EffectFade, Navigation]}
      className="mySwiper h-dvh border-b-[15px] border-t-[13px] border-[#F5F5F5] relative"
    >
      {HomeSlider.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.ServicesSlider}
            alt={`slide ${index}`}
            className="w-full h-full object-cover zoom-out"
          />
          <div className="absolute right-0 bottom-1/2 md:top-1/2 translate-y-1/2  container mb-4  left-0 z-40 text-white text-center">
          <h1 className="text-2xl md:text-7xl font-bold">{slide.text}</h1>
          <p className="text-sm md:text-base">{slide.subtitle}</p>
          </div>
        </SwiperSlide>
      ))}

      <div className="button-prev absolute bottom-1/2 left-8    z-30">
        <MdOutlineKeyboardArrowLeft
          color="white"
          size={35}
          className=" text-white hover:bg-black  rounded-full transition-transform duration-500 ease-in-out cursor-pointer  bg-black/30"
        />
      </div>
      <div className="button-next absolute bottom-1/2  right-8 z-30">
        <MdOutlineKeyboardArrowRight
          color="white"
          size={35}
          className=" hover:bg-black  text-white rounded-full transition-transform duration-300 ease-in-out cursor-pointer bg-slate-800/60"
        />
      </div>
    </Swiper>
  );
}
