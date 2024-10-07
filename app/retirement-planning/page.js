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

            <BannerSection 
            mainBannerImage={"/images/retirement-planning/banner.png"}
            mainTitle={"Retirement Planning Made Simple and Effective"}
            mainSubTitle={"With tailored strategies from Prime Idea, prepare for a retirement that reflects your dreams and goals."}
            mainLinkTitle={"Start your journey with us"}
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