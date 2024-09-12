import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import PowerOfStrategy from "@/components/researchWelathManagement/powerOfStrategy";
import PrimeIdeaHelps from "@/components/researchWelathManagement/primeideaHelps";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";

const ResearchBasedWealthManagementPage = () => { 
    return (
        <div className="bg-[#F6FDFF]">
            <BannerSection />
            <WorkSection />
            <PrimeIdeaHelps />
            <StepperSection />
            <PowerOfStrategy />
            <InsightsSection />
            <ClientTestimonial />
            <Footer />

        </div>
    )
 }

 export default ResearchBasedWealthManagementPage;