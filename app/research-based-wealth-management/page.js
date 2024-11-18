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

    const steps = [
        {
          id: '01',
          title: "Solutions",
          content:
            "Providing tailored financial solutions to optimize growth and  returns for our clients.",
        },
        {
          id: '02',
          title: "Research",
          content:
            "In-depth research analysis drive our financial services to deliver accurate and valuable insights.",
        },
        {
          id: '03',
          title: "Planning",
          content:
            "Strategic planning and forecasting are essential for ensuring financial stability and success.",
        },
        {
          id: '04',
          title: "Ethics",
          content: "Ethical pratices and transparency from the foundation of our financial services, fostering trust and long term partnerships. ",
        },
      ];
    
    return (
        <div className="bg-[#F6FDFF]">
            
            <BannerSection 
             mainBannerImage={"/images/research-wealth-management/banner.png"}
             bannerRightImg={"/images/research-wealth-management/banner-right.png"}
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

            <StepperSection steps={steps} />

            <PowerOfStrategy />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default ResearchBasedWealthManagementPage;