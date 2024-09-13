export default function ServiceHomeCard({ item }) {
  return (
    <div className="h-full bg-[#FFFFFF]  rounded-3xl shadow-lg border-b-4 border-orange-500 p-7 w-full">
      <div className="flex flex-col gap-5 md:flex-row max-md:justify-center text-center items-center mb-6 ">
        <div
          className="w-16 h-16 bg-orange-500"
          style={{
            maskImage: `url(${item.Photo})`,
            WebkitMaskImage: `url(${item.Photo})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        ></div>
        <div className="max-md:mt-3 md:ml-16">
          <h5 className="text-sm font-normal ">{item.Subtitle}</h5>
          <h2 className="text-lg font-bold ">{item.Title}</h2>
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-[#585855] my-7"></div>
      <p className="text-base font-normal m-5 text-[#585860]">
        {item.Description1}
      </p>
      <p className="text-base font-normal m-5 text-[#585860]">
        {item.Description2}
      </p>
    </div>
  );
}
