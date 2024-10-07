import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPostList } from "@/lib/posts";
// import graphqlRequest from "@/lib/graphqlRequest";
import BlogListing from "@/components/blogs/blogListing";


async function getData(params) {
    const allPosts = await getPostList();
    return { allPosts: allPosts };
}

export default async function BlogsList() {
    const posts = await getData();

    return (
        <div>

            <Header />

            <div className="py-12">
                <BlogListing 
                posts={posts.allPosts.nodes}
                />
            </div>

            <Footer />
        </div>
    )
}
