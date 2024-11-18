import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList } from "@/lib/posts";
// import graphqlRequest from "@/lib/graphqlRequest";
import BlogListing from "@/components/blogs/blogListing";
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

async function getCategoryData(params) {
    const allPosts = await getCategoriesPostList();
    return { allPosts: allPosts };
}

export default async function BlogsList({params}) {
    const { categorySlug } = params;
    const posts = await getData(categorySlug);
    const categoriesList = await getCategoriesPostList();

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts.posts.nodes}
                categoriesList={categoriesList.categories.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
