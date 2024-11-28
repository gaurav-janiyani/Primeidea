import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import FinancialPlanning from "@/components/financialPlanning&Investment/financialPlanning";
import GetStarted from "@/components/financialPlanning&Investment/getStarted";
import HelpWealthCreation from "@/components/financialPlanning&Investment/helpWealthCreation";
import KeyComponentsOfFinancialPlanning from "@/components/financialPlanning&Investment/keyComponentsFinancialPlanning";

import ReportSection from "@/components/financialPlanning&Investment/reportSection";
import StepperSection from "@/components/financialPlanning&Investment/steppers";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
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

export default async function FinancialPlanningAndInvestmentAdvisory() { 
    const categorySlug= 'Finance Planning';
    const posts = await getData(categorySlug);

    const steps = [
        {
          id: '01',
          title: "Getting to know you.",
          content:
            "We begin the financial planning process by understanding your unique needs, goals, and existing assets and liabilities. We also pay close attention to the crucial details that impact your financial plan.",
        },
        {
          id: '02',
          title: "Finding the right investments",
          content:
            "We use our expertise and AI-driven Robo Advisor to match investment avenues with your goals, covering retirement and tax planning for a complete financial solution.",
        },
        {
          id: '03',
          title: "Recommending the best plan",
          content:
            "We recommend investments and manage your portfolio, including performance analysis and rebalancing, to help you achieve your financial goals.",
        },
      ];

    return (
        <div className="bg-[#F6FDFF]">
            <BannerSection 
             mainBannerImage={"/images/financial-planning/banner.png"}
             bannerRightImg={"/images/financial-planning/banner-right.png"}
             mainTitle={"Empowering Young Professionals & Enterprenuers to Secure Their Financial Future"}
             mainSubTitle={""}
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

            <FinancialPlanning />

            <KeyComponentsOfFinancialPlanning />

            <StepperSection />

            <HelpWealthCreation />

            <ReportSection />

            <div className="mt-28">
                <InsightsSection blogsListing={posts.posts.nodes} />
            </div>

            <FaqsSection />

            <ClientTestimonial />

            <GetStarted />

            <Footer />
        </div>
    )
 }
