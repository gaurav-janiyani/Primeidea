

import BlogDetail from "@/components/blogs/blogDetail";

const BlogDetailPage = ({params}) => {
    const { slug } = params;

    return (
        <>
        abcd
        <BlogDetail slug={slug} /></>
    )
}

export default BlogDetailPage;