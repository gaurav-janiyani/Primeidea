import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import FinancialPlanning from "@/components/financialPlanning&Investment/financialPlanning";
import GetStarted from "@/components/financialPlanning&Investment/getStarted";
import HelpWealthCreation from "@/components/financialPlanning&Investment/helpWealthCreation";
import KeyComponentsOfFinancialPlanning from "@/components/financialPlanning&Investment/keyComponentsFinancialPlanning";

import ReportSection from "@/components/financialPlanning&Investment/reportSection";
import StepperSection from "@/components/financialPlanning&Investment/steppers";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";

const FinancialPlanningAndInvestmentAdvisory = () => { 
    return (
        <div className="bg-[#F6FDFF]">
            <BannerSection />

            <FinancialPlanning />

            <KeyComponentsOfFinancialPlanning />

            <StepperSection />

            <HelpWealthCreation />

            <ReportSection />

            <div className="mt-28">
                <InsightsSection />
            </div>

            <FaqsSection />

            <ClientTestimonial />

            <GetStarted />

            <Footer />
        </div>
    )
 }

 export default FinancialPlanningAndInvestmentAdvisory;