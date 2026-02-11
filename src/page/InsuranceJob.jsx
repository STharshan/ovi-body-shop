import HeroSection from "../common/HeroSection";
import MainService from "../common/MainService";
import WhySection from "../common/WhyChoose";
import ServiceHero from "../Data/HeroData";
import MainServices from "../Data/MainServiceData";
import WhyChoose from "../Data/WhyChoose";

const InsuranceJob = () => {
    return (
        <div>
            <HeroSection data={ServiceHero.InsuranceHero}/>
            <MainService data={MainServices.MainInsuranceService}/>
            <WhySection data={WhyChoose.WhyChooseInsurance}/>
        </div>
    )
}

export default InsuranceJob
