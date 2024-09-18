import BannerSection from "@/components/aboutUs/bannerSection";
import ExpertiseSection from "@/components/aboutUs/expertiseSection";
import MeetOurTeam from "@/components/aboutUs/meetourTeam";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import JoinCommunity from "@/components/joinCommunity";
import StepperSection from "@/components/steppers";

const AboutUs = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <ExpertiseSection />

            <div className="bg-white">
                <StepperSection />
            </div>

            <JoinCommunity />

            <MeetOurTeam />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default AboutUs;