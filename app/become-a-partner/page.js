import BannerSection from "@/components/becomeAPartner/bannerSection";
import ExpertiseSection from "@/components/becomeAPartner/expertiseSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import { getPostList } from "@/lib/posts";

export const metadata = {
  title: 'Become A Partner | PrimeIdea - Your Trusted Financial Partner',
  description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/become-a-partner/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/become-a-partner/',
    site_name: 'PrimeIdea Ventures',
    title: 'Become A Partner | PrimeIdea - Your Trusted Financial Partner',
    description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in/become-a-partner/',
    languages: {
      'en-US': 'https://primeidea.in/become-a-partner/',
    },
  },
};


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
          content: "Ethical practices and transparency from the foundation of our financial services, fostering trust and long term partnerships. ",
        },
      ];
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <ExpertiseSection />

            

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
