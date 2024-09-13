import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import GetStarted from "@/components/retirement-planning/getStarted";
import ReportSection from "@/components/retirement-planning/reportSection";
import StepperSection from "@/components/steppers";

const RetirementPlanning = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <WorkSection />

            <StepperSection />

            <div className="mb-[140px]">
                <ReportSection />
            </div>

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            {/* <>Get Started</> */}
            <GetStarted />

            <Footer />

        </div>
    )
 }

 export default RetirementPlanning;