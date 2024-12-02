import BannerSection from "@/components/landingPage/bannerSection"
import ClientTestimonial from "@/components/clientTestimonial"
import FaqsSection from "@/components/faqsSection"
import Footer from "@/components/footer"
import InsightsSection from "@/components/insightsSection"
import ExpertiseSection from "@/components/landingPage/expertiseServices"
import OurCommitment from "@/components/landingPage/ourCommitment"
import PrimeIdeaBenchmarks from "@/components/landingPage/primeIdeaBenchmarks"
import { getPostList } from "@/lib/posts"

async function getData(params) {
    const allPosts = await getPostList();
    return { allPosts: allPosts };
  }

export default async function LandingPage () { 
    const blogsListing = await getData();
    return (
        <div className="bg-[#F6FDFF]">

            {/* <BannerSection 
                mainBannerImage={"/images/landing/banner.png"}
                mainTitle={"Empowering Your Financial Future with Primeidea"}
                mainSubTitle={"Expert Wealth Management Tailored to Your Goals"}
                mainLinkTitle={"Schedule a Consultation"}
                mainLink={""}
                subSectionTitle={'Why choose us ?'}
                subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
                subSectionTitle1={"Trusted By Clients"}
                subSectionSubTitle1={"80+"}
                subSectionTitle2={"Years of expertise"}
                subSectionSubTitle2={"12+"}
                subSectionTitle3={"Client Satisfaction"}
                subSectionSubTitle3={"92+"}
            /> */}
            <BannerSection />

            <ExpertiseSection />

            <PrimeIdeaBenchmarks />

            <OurCommitment />

            <InsightsSection blogsListing={blogsListing.allPosts.nodes} />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
