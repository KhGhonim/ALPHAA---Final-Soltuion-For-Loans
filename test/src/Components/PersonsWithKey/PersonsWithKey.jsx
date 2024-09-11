// @ts-ignore
import CallToAction from "../../Components/CallToAction/CallToAction";
import GuysWITHKEYS from "../../assets/GuysWITHKEYS.jpg";
export default function PersonsWithKey() {
  return (
    <div className=" bg-[#F5F5F5] mb-32 pb-96 md:pb-28    relative">
      <div className="flex flex-col-reverse  md:p-20 md:flex-row gap-3 h-full md:h-dvh container mx-auto rounded-lg ">
        <div className="w-full md:w-2/5 max-md:p-7 max-md:py-9">
          <img
            src={GuysWITHKEYS}
            alt="Home loan celebration"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="md:w-4/6  pt-16 p-9 md:p-9">
          <div className="flex gap-2 items-center mb-4">
            <div className="w-10 h-7 bg-orange-400 "></div>
            <h2 className="text-[#2A2C38] font-bold text-base ">
              Best Home Loans
            </h2>
          </div>
          <h3 className="text-[#2A2C38]  font-bold text-3xl mb-4">
            Different Types Of Home Loans
          </h3>
          <p className="text-[#2A2C38] leading-relaxed font-normal text-lg mb-8">
            To help you determine the best loan option, we have four different
            types of home loans.
          </p>
          <div className=" flex flex-col gap-7 md:gap-0 md:flex-row justify-center items-center">
            <div className="flex flex-col w-full md:w-1/2 space-y-10">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Fixed-Rate Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Provides stability with fixed payments but may have higher
                  total interest.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Interest-Only Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Lower initial payments but higher total interest payable.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-10">
              <div className="space-y-2">
                <h4 className="font-bold text-lg ">
                  Vundefinedble-Rate Home Loan
                </h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Offers potentially lower payments if rates decrease, but
                  carries risk if rates rise.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Hybrid Home Loan</h4>
                <p className="text-[#2A2C38] leading-relaxed">
                  Combines stability of fixed rate initially with potential
                  savings of vundefinedble rate later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
