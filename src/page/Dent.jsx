import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const Dent = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.DentRepairHero}/>
            <MainService data={MainServices.DentScratchRepairService}/>
            <ServiceSection data={Servicesterm.DentService}/>
            <WhySection data={WhyChoose.WhyChooseDentScratch}/>
        </div>
    )
}

export default Dent
