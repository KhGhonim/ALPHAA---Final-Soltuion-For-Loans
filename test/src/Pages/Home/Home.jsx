import PAWAN from "../../Components/PAWAN/PAWAN";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Founder from "../../Components/Founder/Founder";
import Slider from "../../Components/HomeSlider/Slider";
import Lenders from "../../Components/Lenders/Lenders";
import MovingHouse from "../../Components/MovingHouse/MovingHouse";
import OurMissionOurStory from "../../Components/OurMission&OurStory/OurMissionOurStory";
import OurServiceHome from "../../Components/OurServicesHome/OurServiceHome";
import man from "../../assets/img-icon-02-1.png";

export default function Home() {
  return (
    <div className="font-cairo">
      <Slider />
      <OurMissionOurStory />
      <OurServiceHome
        Title={undefined}
        Description={undefined}
        Subtitle={`Our services`}
        ServicesBanner={undefined}
        ServiceTitle={undefined}
        ExtraLoanTitle={undefined}
      />
      <MovingHouse />
      <Lenders />
      <Founder />
      <ContactUs />
      <PAWAN photo={man} />
    </div>
  );
}
