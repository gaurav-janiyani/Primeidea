import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ComprehensiveSolutions from "@/components/home/comprehensiveSolutions";
import FaqsSection from "@/components/home/faqsSection";
import WealthCreationPreservation from "@/components/home/wealthCreationPreservationSection";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import { getPostList } from "@/lib/posts";
import Image from "next/image";

async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}

export default async function Home() {
  const blogsListing = await getData();
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
       mainBannerImage={"/images/home/banner.png"}
       bannerRightImg={"/images/home/banner-right.png"}
       mainTitle={"Experience You Can Trust"}
       mainSubTitle={"Under Partha Shah's guidance, Primeidea turns financial goals into reality."}
       mainLinkTitle={"Start your journey with us"}
       mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
       subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
       subSectionTitle1={"Trusted By Clients"}
       subSectionSubTitle1={"80+"}
       subSectionTitle2={"Years of expertise"}
       subSectionSubTitle2={"12+"}
       subSectionTitle3={"Client Satisfaction"}
       subSectionSubTitle3={"92+"}
      />

      <WealthCreationPreservation />

      <ComprehensiveSolutions />

      <InsightsSection blogsListing={blogsListing.allPosts.nodes}/>

      <JoinCommunity />

      <FaqsSection />

      <ClientTestimonial />

      <Footer />
    </div>
  );
}
