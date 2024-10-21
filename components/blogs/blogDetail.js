'use client';
const BlogDetail = (props) => {
    console.log(props);
    return (
        <div>{props?.slug}</div>
    )
}

export default BlogDetail;