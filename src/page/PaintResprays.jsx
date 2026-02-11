import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const PaintResprays = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.PaintResprayHero}/>
            <MainService data={MainServices.PaintResprayService}/>
            <ServiceSection data={Servicesterm.PaintService}/>
            <WhySection data={WhyChoose.WhyChoosePaintRespray}/>
        </div>
    )
}

export default PaintResprays
