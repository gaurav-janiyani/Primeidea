import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ComprehensiveSolutions from "@/components/home/comprehensiveSolutions";
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
