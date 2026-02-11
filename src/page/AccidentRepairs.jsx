import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const AccidentRepair = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.AccidentHero}/>
            <MainService data={MainServices.AccidentRepairService}/>
            <ServiceSection data={Servicesterm.AccidentService} />
            <WhySection data={WhyChoose.WhyChooseAccident}/>
        </div>
    )
}

export default AccidentRepair
