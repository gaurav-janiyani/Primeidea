'use client';

import Image from "next/image";
import Header from "../header";
import moment from "moment";
import Footer from "../footer";
import GetStarted from "../financialPlanning&Investment/getStarted";
  

const BlogDetail = (props) => {
    const { post } = props;
    console.log(post);
    return (
        <>
        <Header />
        <section className="pt-[120px]">
            <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
                <ul className="flex flex-wrap mb-6">
                    <li className="font-bold text-[#0077FF]">
                        <a href="/" >Home</a> <span className="inline-block px-1 text-[#171717]">/</span>
                    </li>
                    <li className="font-bold text-[#0077FF]">
                        <a href="/blogs" >Blogs</a> <span className="inline-block px-1 text-[#171717]">/</span>
                    </li>
                    <li className="font-bold text-[#171717]">
                        <span>{post?.title}</span>
                    </li>
                </ul>
                <h1 className="text-2xl md:text-3xl xl:text-4xl text-[#2D2D2D] font-bold mb-3 max-w-[768px] leading-[130%]">
                    {post?.title}
                </h1>
                <div className="border-y-2 border-black py-4 my-4 flex flex-col sm:flex-row sm:justify-between items-baseline sm:items-center">
                    <div className="flex items-center  mb-3 sm:mb-0">
                        <Image
                            src={post?.author.node.avatar.url}
                            width={120}
                            height={120}
                            alt={post?.title}
                            className="max-w-[100px] lg:max-w-[120px] max-h-[100px] lg:max-h-[120px] rounded-[5px]"
                        />
                      <h3 className="mt-3 leading-[100%] text-sm ml-2 sm:ml-4 text-[#727272] font-bold">
                        Written by{" "}
                        <span className="text-xl font-bold capitalize block text-black">{post?.author.node.name}</span>
                      </h3>
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-base md:text-xl lg:text-2xl sm:mb-[4px]">Updated: {moment(post.modified).format('MMMM D, YYYY')}</h3>
                        <h3 className="font-semibold text-sm md:text-lg lg:text-xl text-[#727272]">Published: {moment(post.date).format('MMMM D, YYYY')}</h3>
                    </div>
                </div>
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="w-full lg:w-[calc(100%-300px)] mb-[40px] lg:mb-0">
                        <div className="mb-4">
                            <Image src="/images/blogs/single-blog.jpg" width={1920} height={600} alt="Single Blog" className="rounded-[10px]"/>
                        </div>
                        <div className="single-blog-content">
                            <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
                        </div>
                    </div>
                    <div className="w-full max-w-[350px] lg:w-[280px] lg:max-w-[280px] bg-[#fff] shadow-[0_0_2px_0_#00000040] rounded-[10px] h-full">
                        <div className="p-4 border-b-2 border-[#eaeaea]">
                            <h2 className="mb-4 text-xl font-medium">FOLLOW US</h2>
                            <ul className="flex justify-between">
                                <li>
                                    <a href="">
                                        <Image src="/images/blogs/social-media/fb.png" width={42} height={42} alt="Facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image src="/images/blogs/social-media/instagram.png" width={42} height={42} alt="Instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image src="/images/blogs/social-media/linkedin.png" width={42} height={42} alt="LinkedIn" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image src="/images/blogs/social-media/whatsapp.png" width={42} height={42} alt="WhatsApp" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h2 className="mb-1 text-xl font-bold">
                                Subscription
                            </h2>
                            <p className="mb-3">
                                Subscribe to our newsletter and receive a selection of cool articles every weeks
                            </p>
                            <input type="email" placeholder="Enter your email" className="border rounded-[5px] border-[#00000080] text-[#00000080] mb-2 w-full p-3"/>
                            <button type="submit" className="border rounded-[5px] border-[#232D63] text-[#fff] bg-[#232D63] p-3 w-full" >Subscribe</button> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <GetStarted />

        <Footer />

        </>
    )
}

export default BlogDetail;