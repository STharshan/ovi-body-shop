import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const MOT = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.Mot}/>
            <MainService data={MainServices.MOTTesting}/>
            <ServiceSection data={Servicesterm.AdditionalMaintenanceService}/>
            <WhySection data={WhyChoose.WhyChooseMOTTesting}/>
        </div>
    )
}

export default MOT
