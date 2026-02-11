import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const Detailing = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.DetailHero}/>
            <MainService data={MainServices.MainDetailingService}/>
            <ServiceSection data={Servicesterm.DetailingService}/>
            <WhySection data={WhyChoose.WhyChooseDetailing}/>
        </div>
    )
}

export default Detailing
