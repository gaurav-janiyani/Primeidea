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

            <BannerSection 
                mainBannerImage={"/images/tax-planning/banner.png"}
                mainTitle={"Optimize Your Tax Liabilities with Strategic Planning"}
                mainSubTitle={"Comprehensive Solutions to Minimize Taxes and Maximize Savings"}
                mainLinkTitle={"Start Saving on Taxes Now"}
                mainLink={""}
                subSectionContent={"Prime Idea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
                subSectionTitle1={"Trusted By Clients"}
                subSectionSubTitle1={"80+"}
                subSectionTitle2={"Years of expertise"}
                subSectionSubTitle2={"12+"}
                subSectionTitle3={"Client Satisfaction"}
                subSectionSubTitle3={"92+"}
            />
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