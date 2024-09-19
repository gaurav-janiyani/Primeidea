import BannerSection from "@/components/bannerSection"
import ClientTestimonial from "@/components/clientTestimonial"
import FaqsSection from "@/components/faqsSection"
import Footer from "@/components/footer"
import InsightsSection from "@/components/insightsSection"
import ExpertiseSection from "@/components/landingPage/expertiseServices"
import OurCommitment from "@/components/landingPage/ourCommitment"
import PrimeIdeaBenchmarks from "@/components/landingPage/primeIdeaBenchmarks"

const LandingPage = () => { 
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <ExpertiseSection />

            <PrimeIdeaBenchmarks />

            <OurCommitment />

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }

 export default LandingPage