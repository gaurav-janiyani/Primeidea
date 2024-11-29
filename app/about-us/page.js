import BannerSection from "@/components/aboutUs/bannerSection";
import ExpertiseSection from "@/components/aboutUs/expertiseSection";
import HowFinancialAdvisorHelp from "@/components/aboutUs/howFinancialAdvisorHelp";
import MeetOurTeam from "@/components/aboutUs/meetourTeam";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import StepperSection from "@/components/steppers";
import { getPostList } from "@/lib/posts";

async function getData(params) {
  const allPosts = await getPostList();
  return { allPosts: allPosts };
}


export default async function AboutUs() { 
  const blogsListing = await getData();
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

            <BannerSection />

            <ExpertiseSection />

            <div className="bg-white">
                <StepperSection 
                  title={'Our Process'}
                  steps={steps}
                  // title1={'Solutions'}
                  // content1={'Providing tailored financial solutions to optimize growth and  returns for our clients.'}
                  // title2={'Research'}
                  // content2={'In-depth research analysis drive our financial services to deliver accurate and valuable insights.'}
                  // title3={'Planning'}
                  // content3={'Strategic planning and forecasting are essential for ensuring financial stability and success.'}
                  // title4={'Ethics'}
                />
            </div>

            <JoinCommunity />

            <HowFinancialAdvisorHelp />

            <MeetOurTeam />

            {/* <InsightsSection blogsListing={blogsListing.allPosts.nodes}/> */}

            {/* <FaqsSection /> */}

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
