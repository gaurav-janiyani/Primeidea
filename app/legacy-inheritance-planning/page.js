import BannerSection from "@/components/legacy-inheritance/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import StepperSection from "@/components/steppers";
import TaxPlanning from "@/components/tax-planning/taxPlanning";

const LegacyInheritancePlanning = () => { 

    const steps = [
        {
          id: '01',
          title: "Assess Your Estate",
          content:
            "Assess your financial situation to understand what needs to be protected and passed on.",
        },
        {
          id: '02',
          title: "Define Your Goals and Wishes",
          content:
            "Define your legacy goals, including asset distribution, beneficiaries, and charitable wishes.",
        },
        {
          id: '03',
          title: "Implement Legal and Financial Instruments",
          content:
            "Set up legal documents and tax-efficient strategies to protect your assets, document your wishes, and minimize taxes.",
        },
        {
          id: '04',
          title: "Review and Update Regularly",
          content: "Regularly review and update your legacy plan to reflect changes in your life",
        },
      ];

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

            <StepperSection steps={steps}/>

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default LegacyInheritancePlanning;