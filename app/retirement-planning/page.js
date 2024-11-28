import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import WorkSection from "@/components/researchWelathManagement/workSection";
import GetStarted from "@/components/retirement-planning/getStarted";
import ReportSection from "@/components/retirement-planning/reportSection";
import StepperSection from "@/components/steppers";
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

export default async function RetirementPlanning() { 
  const categorySlug= 'Retirement Planning';
  const posts = await getData(categorySlug);
    const steps = [
        {
          id: '01',
          title: "Planning",
          content:
            "The first step in retirement planning is identifying your target retirement age, desired post-retirement lifestyle, life expectancy, and the retirement corpus needed to support it.",
        },
        {
          id: '02',
          title: "Designing",
          content:
            "This step involves selecting investment options to build your retirement corpus and creating a realistic plan to achieve your goal.",
        },
        {
          id: '03',
          title: "Execution",
          content:
            "Assisting you at every step in dedicatedly following the created plan for the required tenure to successfully complete the investment journey and achieve the desired goals.",
        },
        {
          id: '04',
          title: "Review",
          content: "Regularly review your investments' performance and make adjustments as needed to stay on track and achieve your desired returns.",
        },
      ];
    
    return (
        <div className="bg-[#F6FDFF]">

            <BannerSection 
            mainBannerImage={"/images/retirement-planning/banner.png"}
            mainTitle={"Retirement Planning Made Simple and Effective"}
            mainSubTitle={"With tailored strategies from Prime Idea, prepare for a retirement that reflects your dreams and goals."}
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

            <WorkSection />

            <StepperSection title={'Steps for Dream Retirement Planning'} steps={steps}/>

            <div className="md:mb-[140px]">
                <ReportSection blogsListing={posts.posts.nodes}/>
            </div>

            <InsightsSection />

            <FaqsSection />

            <ClientTestimonial />

            {/* <>Get Started</> */}
            <GetStarted />

            <Footer />

        </div>
    )
 }

 