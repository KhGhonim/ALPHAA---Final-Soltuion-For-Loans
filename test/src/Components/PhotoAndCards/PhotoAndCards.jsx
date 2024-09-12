export default function PhotoAndCards({
  Cards,
  Style,
  CardImageStyle,
  CardTextStyle,
  ParentDivStyle,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center ${Style} font-cairo`}
    >
      {Cards.map((card, index) => {
        return (
          <div key={index} className="relative  w-full md:w-1/3 group">
            <img
              src={card.image}
              alt="First Home Buyer"
              className={` ${CardImageStyle}`}
            />
            <div
              className={`absolute  w-5/6 ${ParentDivStyle} transition-all duration-300 ease-linear   flex items-center justify-center`}
            >
              <div
                className={`bg-[#F5F5F5] ${CardTextStyle} p-6 group-hover:border-b-black transition-all duration-300 ease-linear border-b-4 border-b-orange-400 rounded-lg  shadow-lg  space-y-2 text-center`}
              >
                <h3 className="text-xl leading-relaxed font-bold">
                  {card.title}
                </h3>
                <p className="text-lg  leading-relaxed text-[#61615E]">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}