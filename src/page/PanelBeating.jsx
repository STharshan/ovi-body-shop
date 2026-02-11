import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const PanelBeating = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.PanelBeatingHero}/>
            <MainService data={MainServices.PanelBeatingService}/>
            <ServiceSection data={Servicesterm.PanelService}/>
            <WhySection data={WhyChoose.WhyChoosePanelBeating}/>
        </div>
    )
}

export default PanelBeating
