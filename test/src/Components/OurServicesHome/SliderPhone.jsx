import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { ServicesHomeSlider } from "../../constants/db";

export default function SliderPhone() {
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay, EffectFade]}
        className="mySwiper w-full h-full  rounded-3xl "
      >
        {ServicesHomeSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.Photo}
              className="w-full h-full object-cover absolute inset-0 rounded-3xl zoom-out"
              alt={`Slide ${index}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 text-white rounded-3xl capitalize">
              <h1 className="text-2xl font-bold text-start ">
                At Alphaa Financial Solutions, we offer a comprehensive range of
                financial services
              </h1>
              <h4 className="mt-4 text-xl text-start ">
                We have the expertise to guide you through the process.
              </h4>
              <h6 className="mt-4 text-3xl  text-center font-bold"> 100 +</h6>
              <h6 className="mt-2 text-xl text-center font-bold">
                Simplify the loan
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
