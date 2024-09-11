// @ts-ignore
import Card1 from "../../assets/Card1.jpg";
// @ts-ignore
import Card2 from "../../assets/Card2.jpg";
// @ts-ignore
import Card3 from "../../assets/Card3.jpg";

const Cards = [
  {
    title: "First Home Buyer",
    description: `  First home buyers represent a significant portion of the real
              estate market, often driven by the desire for stability,
              investment in property, and the opportunity to personalize a
              living space.`,
    image: Card1,
  },

  {
    title: "Refinancing",
    description: `Refinancing involves replacing an existing mortgage with a new
              loan, typically to take advantage of better terms, such as lower
              interest rates, reduced monthly payments, or a shorter loan term.`,
    image: Card2,
  },

  {
    title: "Investment Property",
    description: `An investment property is real estate purchased primarily for the
              purpose of generating income or profit. Unlike a primary
              residence, where the owner lives.`,
    image: Card3,
  },
];
export default function PhotoAndCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center pt-16 pb-28 gap-20 md:gap-0 md:space-x-6 container mx-auto p-7 md:p-20 font-cairo">
      {Cards.map((card, index) => {
        return (
          <div key={index} className="relative  w-full md:w-1/3 group">
            <img
              src={card.image}
              alt="First Home Buyer"
              className="w-full h-96 md:w-96 md:h-96 object-cover object-center rounded-lg"
            />
            <div className="absolute  w-5/6 max-md:-bottom-10 max-md:hover:bottom-0 top-[40%] hover:top-[35%] inset-x-0 mx-auto transition-all duration-300 ease-linear   flex items-center justify-center">
              <div className="bg-[#F5F5F5] h-64  p-6 group-hover:border-b-black transition-all duration-300 ease-linear border-b-4 border-b-orange-400 rounded-lg  shadow-lg  space-y-2 text-center">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-base  text-[#61615E]">{card.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
