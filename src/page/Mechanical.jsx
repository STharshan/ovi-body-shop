import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import ServiceSection from "../common/ServiceSection";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import Servicesterm from "../Data/ServiceData";
import WhyChoose from "../Data/WhyChoose";

const Mechanical = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.Mechanical}/>
            <MainService data={MainServices.MechanicalRepairs}/>
            <ServiceSection data={Servicesterm.AdditionalMechanicalServices}/>
            <WhySection data={WhyChoose.WhyChooseMechanicalRepairs }/>
        </div>
    )
}

export default Mechanical;
