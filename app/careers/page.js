import ApplyNow from "@/components/careers/applyNow";
import BannerSection from "@/components/careers/bannerSection";
import CoreValues from "@/components/careers/coreValues";
import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
  description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  keywords: 'mutual funds, investment advisory, financial planning, wealth management, retirement planning, insurance solutions, Partha Shah, PrimeIdea Ventures, Gujarat financial advisor, investment consultant',
  author: 'Partha Shah',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://primeidea.in/careers/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://primeidea.in/careers/',
    site_name: 'PrimeIdea Ventures',
    title: 'Careers | PrimeIdea - Your Trusted Financial Partner',
    description: 'Get to know PrimeIdea Ventures, a team of financial experts to help you achieve your personal and business goals. Learn about our values and vision.',
  },
  twitter: {
    handle: '@primeidea',
    site: '@primeidea',
    cardType: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://primeidea.in/careers/',
    languages: {
      'en-US': 'https://primeidea.in/careers/',
    },
  },
};

export default async function Careers() { 
 
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection />

            <CoreValues />
            
            <ApplyNow />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
