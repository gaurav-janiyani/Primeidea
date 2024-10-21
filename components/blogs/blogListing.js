'use client';
import Image from "next/image";
import React from "react";


export default function BlogListing ({ posts }) {
    console.log(posts);
    return (
        <section className="max-w-[1320px] my-16 mx-auto flex flex-wrap">
            <div className="flex flex-wrap">
                {posts.slice(0, 7).reverse().map((item, index) => {
                    return (
                        <div className="border border-black p-4 mb-2 mr-2 w-[48%]" key={index}>
                            <Image src={item.featuredImage?.node?.sourceUrl} width={1320} height={565} alt={item.title} className="mb-2"/>
                            <h1 className="text-2xl font-semibold"><a href={`blogs/${item.slug}`}>{item.title}</a></h1>
                            <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
