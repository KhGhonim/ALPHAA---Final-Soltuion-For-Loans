import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    name: "John Doe",
    title: "CEO",
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    name: "Jane Smith",
    title: "CTO",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Alice Johnson",
    title: "COO",
  },
];

export default function AboutUsSlider() {
  const [CurrentSlider, setCurrentSlider] = useState(0);

  return (
    <div className="w-full py-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlider(swiper.realIndex)}
        className="mySwiper max-w-xl md:max-w-3xl mx-auto px-4 cursor-pointer"
      >
        {testimonials.map((test, index) => {
          return (
            <SwiperSlide onClick={() => setCurrentSlider(index)} key={index}>
              <div className="flex flex-col items-center text-center py-8">
                <p className="text-lg  bg-white rounded max-w-3xl mx-auto px-4 mb-5 py-8">
                  {test.text}
                </p>
                <p className="text-base font-bold">{test.name}</p>
                <p className="text-base font-bold">{test.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center items-center text-center text-sm text-black">
        {CurrentSlider + 1}/{testimonials.length}
      </div>
    </div>
  );
}
