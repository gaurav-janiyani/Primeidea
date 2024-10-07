import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ComprehensiveSolutions from "@/components/home/comprehensiveSolutions";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import Image from "next/image";

export default function Home() {
  const people = [
    {
      name: "Retirement Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Investment Calculators",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
    {
      name: "SIP Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
    {
      name: "Goal Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
  ];
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
       mainBannerImage={"/images/home/banner.png"}
       mainTitle={"Experience You Can Trust"}
       mainSubTitle={"Under Partha Shah's guidance, Prime Idea turns financial goals into reality."}
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

      <ComprehensiveSolutions />

      <InsightsSection />

      <JoinCommunity />

      <FaqsSection />

      <ClientTestimonial />

      <Footer />
    </div>
  );
}
