import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InsightsSection from "@/components/insightsSection";
import AboutInsurance from "@/components/insurance/aboutInsurance";
import ProtectingFinanceFuture from "@/components/insurance/protectingFinanceFuture";
import TypesOfInsurance from "@/components/insurance/typeOfInsurance";
import Image from "next/image";

const InsurancePage = () => {
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
        mainBannerImage={""}
        mainTitle={"Protect Your Family's Future with Confidence"}
        mainSubTitle={"Expert Assistance in Navigating Insurance Claims and Ensuring Financial Security"}
        mainLinkTitle={"Get Expert Guidance Now"}
        mainLink={""}
        subSectionContent={"Prime Idea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
        subSectionTitle1={"Trusted By Clients"}
        subSectionSubTitle1={"80+"}
        subSectionTitle2={"Years of expertise"}
        subSectionSubTitle2={"12+"}
        subSectionTitle3={"Client Satisfaction"}
        subSectionSubTitle3={"92+"}
      />

      <AboutInsurance />

      <TypesOfInsurance />

      <ProtectingFinanceFuture />

      <InsightsSection bgColor="bg-[#F6FDFF]" />
      
      <FaqsSection />

      <ClientTestimonial />

      <Footer />

    </div>
  );
};

export default InsurancePage;
