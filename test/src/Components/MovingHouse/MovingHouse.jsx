import family2 from "../../assets/family2.jpg";
import HOUSE from "../../assets/Minihome.png";

export default function MovingHouse() {
  return (
    <div className="relative w-full pt-16   bg-white ">
      <div className="md:container md:mx-auto flex flex-col md:flex-row gap-7 p-5 justify-between md:py-24 md:px-16 relative">
        <div className="w-full md:w-2/3 h-96 flex   p-4 rounded-3xl">
          <img
            src={family2}
            alt="Family Playing Together"
            className="w-full h-72 md:h-full object-cover rounded-3xl border-r-8 border-b-8 border-[#F5F5F5]"
          />
          <div className="absolute bottom-14 md:bottom-6 left-4 md:left-0 flex items-center justify-center z-20">
            <img
              alt="House Icon"
              src={HOUSE}
              className="w-56 h-32 md:w-96 md:h-56"
            />
          </div>
        </div>

        <div className="w-full h-20 md:h-96 md:w-1/2 bg-[#F5F5F5] rounded-3xl"></div>
      </div>
    </div>
  );
}
