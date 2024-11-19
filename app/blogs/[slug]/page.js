
import React from "react";
import BlogDetail from "@/components/blogs/blogDetail";
import graphqlRequest from "@/lib/graphqlRequest";

export async function getSinglePost(slug) {
    const query = {
      query: `query getSinglePost {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          excerpt(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
          databaseId
          featuredImage {
            node {
              uri
              sourceUrl
              mediaDetails {
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
      }`,
      variables: { slug }
    };

    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export default async function BlogDetailPage ({params}) {
    const { slug } = params;
    const post = await getSinglePost(slug);

    return (
        <div className="bg-[#F6FDFF]">
            <BlogDetail slug={slug} post={post} />
        </div>
    )
}
