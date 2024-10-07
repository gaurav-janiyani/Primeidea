import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import PowerOfStrategy from "@/components/researchWelathManagement/powerOfStrategy";
import PrimeIdeaHelps from "@/components/researchWelathManagement/primeideaHelps";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";

const ResearchBasedWealthManagementPage = () => { 
    return (
        <div className="bg-[#F6FDFF]">
            
            <BannerSection 
             mainBannerImage={"/images/research-wealth-management/banner.png"}
             mainTitle={"Maximize Your Wealth Potential with Research-Driven Strategies"}
             mainSubTitle={"Transform Idle Savings into Strategic Investments with Data-Backed Insights"}
             mainLinkTitle={"Start Your Wealth Transformation Today"}
             mainLink={""}
             subSectionContent={"Prime Idea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
             subSectionTitle1={"Trusted By Clients"}
             subSectionSubTitle1={"80+"}
             subSectionTitle2={"Years of expertise"}
             subSectionSubTitle2={"12+"}
             subSectionTitle3={"Client Satisfaction"}
             subSectionSubTitle3={"92+"}
            />

            <WorkSection />

            <PrimeIdeaHelps />

            <StepperSection />

            <PowerOfStrategy />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default ResearchBasedWealthManagementPage;