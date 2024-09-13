import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import StepperSection from "@/components/steppers";
import GiftCitySection from "@/components/tax-planning/giftCitySection";
import TaxPlanning from "@/components/tax-planning/taxPlanning";
import YouIHereSection from "@/components/tax-planning/you-i-here";

const TaxPlanningPage = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />
            <TaxPlanning />
            <StepperSection />
            <YouIHereSection />
            <GiftCitySection />
            <InsightsSection />
            <FaqsSection />
            <ClientTestimonial />
            <Footer />
        </div>
    )
 }

 export default TaxPlanningPage;