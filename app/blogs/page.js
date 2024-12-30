import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList, getCategoriesPostList } from "@/lib/posts";
// import graphqlRequest from "@/lib/graphqlRequest";
import BlogListing from "@/components/blogs/blogListing";


export const metadata = {
    title: 'PrimeIdea Blog: Insights, Tips & Ideas for Financial Journey',
    description: 'Explore PrimeIdea Ventures blog for expert insights on financial planning, investment strategies, retirement planning, tax savings, and wealth management to make informed financial decisions.',
}

async function getData(params) {
    const allPosts = await getPostList();
    return { allPosts: allPosts };
}

async function getCategoryData(params) {
    const allPosts = await getCategoriesPostList();
    return { allPosts: allPosts };
}

export default async function BlogsList() {
    const posts = await getData();
    const categoriesList = await getCategoriesPostList();

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts.allPosts.nodes}
                categoriesList={categoriesList.categories.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
