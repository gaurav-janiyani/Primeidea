import BannerSection from "@/components/legacy-inheritance/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";
import TaxPlanning from "@/components/tax-planning/taxPlanning";

const LegacyInheritancePlanning = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            {/* <BannerSection 
             mainBannerImage={"/images/legacy-inheritance-planning/banner.png"}
             mainTitle={"Nurturing Your Legacy, Securing Future Generations"}
             mainSubTitle={"Plan today to leave behind a lasting heritage for those you love."}
             mainLinkTitle={"Start Your Retirement Plan"}
             mainLink={""}
             subSectionContent={"Prime Idea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
             subSectionTitle1={"Trusted By Clients"}
             subSectionSubTitle1={"80+"}
             subSectionTitle2={"Years of expertise"}
             subSectionSubTitle2={"12+"}
             subSectionTitle3={"Client Satisfaction"}
             subSectionSubTitle3={"92+"}
            /> */}
            <BannerSection />

            <TaxPlanning />

            <StepperSection />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default LegacyInheritancePlanning;