import { Helmet } from "react-helmet-async";
import OurServiceHome from "../../Components/OurServicesHome/OurServiceHome";
// @ts-ignore
import ServicesBanner from "../../assets/ServicesBanner.jpg";

export default function Services() {
  return (
    <div className="w-full h-full bg-[#F5F5F5] font-cairo ">
      <Helmet>
        <title>Services- AlPHAA Financial Solutions</title>
      </Helmet>
      <OurServiceHome
        Title={`Services`}
        Description={`Find the right home for your budget`}
        Subtitle={`Our services`}
        ServicesBanner={ServicesBanner}
        ServiceTitle={`Services`} ExtraLoanTitle={undefined}      />
    </div>
  );
}
