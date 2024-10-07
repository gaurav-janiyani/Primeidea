'use client';
import React from "react";


export default function BlogListing ({ posts }) {
    return (
        <section className="flex flex-wrap">
            {posts.slice(0, 7).reverse().map((item, index) => {
                return (
                    <div className="border border-black p-4" key={index}>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </section>
    )
}
