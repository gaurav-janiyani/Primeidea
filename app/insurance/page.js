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
import graphqlRequest from "@/lib/graphqlRequest";

async function getData(categorySlug) {
  const query = {
      query: `query getPostListByCategory($categorySlug: String!) {
          posts(where: {categoryName: $categorySlug, orderby: {field: DATE, order: DESC}}) {
              nodes {
                  date
                  slug
                  title
                  excerpt(format: RENDERED)
                  featuredImage {
                      node {
                          uri
                          sourceUrl
                          mediaDetails {
                              file
                              sizes {
                                  sourceUrl
                                  width
                                  height
                              }
                          }
                      }
                  }
                  categories {
                      nodes {
                          name
                          slug
                      }
                  }
                  author {
                      node {
                          avatar {
                              url
                          }
                          name
                      }
                  }
              }
              pageInfo {
                  endCursor
                  hasNextPage
                  hasPreviousPage
                  startCursor
              }
          }
      }`,
      variables: { categorySlug } // Pass categorySlug as a variable
  };

  const data = await graphqlRequest(query);
  return data.data; // Return the post data from the response
}

export default async function InsurancePage() {
  const categorySlug= 'Insurance';
    const posts = await getData(categorySlug);
  return (
    <div className="bg-[#F6FDFF]">
      <BannerSection 
        mainBannerImage={"/images/insurance/banner.jpg"}
        bannerRightImg={"/images/insurance/banner-right.png"}
        mainTitle={"Protect Your Family's Future with Confidence"}
        mainSubTitle={"Expert Assistance in Navigating Insurance Claims and Ensuring Financial Security"}
        mainLinkTitle={"Get Expert Guidance Now"}
        mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
        subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
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

      <InsightsSection  blogsListing={posts.posts.nodes} bgColor="bg-[#F6FDFF]" />
      
      <FaqsSection />

      <ClientTestimonial />

      <Footer />

    </div>
  );
};

