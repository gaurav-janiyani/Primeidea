import BannerSection from "@/components/bannerSection";
import ClientTestimonial from "@/components/clientTestimonial";
import FaqsSection from "@/components/faqsSection";
import Footer from "@/components/footer";
import InsightsSection from "@/components/insightsSection";
import PowerOfStrategy from "@/components/researchWelathManagement/powerOfStrategy";
import PrimeIdeaHelps from "@/components/researchWelathManagement/primeideaHelps";
import WorkSection from "@/components/researchWelathManagement/workSection";
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

export default async function ResearchBasedWealthManagementPage () { 
  const categorySlug= 'Wealth Management';
  const posts = await getData(categorySlug);
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
            
            <BannerSection 
             mainBannerImage={"/images/research-wealth-management/banner.png"}
             bannerRightImg={"/images/research-wealth-management/banner-right.png"}
             mainTitle={"Maximize Your Wealth Potential with Research-Driven Strategies"}
             mainSubTitle={"Transform Idle Savings into Strategic Investments with Data-Backed Insights"}
             mainLinkTitle={"Start Your Wealth Transformation Today"}
             mainLink={"https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"}
             subSectionContent={"Primeidea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
             subSectionTitle1={"Trusted By Clients"}
             subSectionSubTitle1={"80+"}
             subSectionTitle2={"Years of expertise"}
             subSectionSubTitle2={"12+"}
             subSectionTitle3={"Client Satisfaction"}
             subSectionSubTitle3={"92+"}
            />

            <WorkSection />

            <PrimeIdeaHelps />

            <StepperSection title={'Our Process'} steps={steps} />

            <PowerOfStrategy />

            <InsightsSection blogsListing={posts.posts.nodes}/>

            <FaqsSection />

            <ClientTestimonial />

            <Footer />

        </div>
    )
 }
