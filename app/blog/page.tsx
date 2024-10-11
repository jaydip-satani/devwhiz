import React from 'react';

interface Blog {
    title: string;
    content: string;
}

async function fetchBlogs(): Promise<Blog[]> {
    const baseURL = process.env.NODE_ENV === 'production'
        ? 'https://yourdomain.com'
        : 'http://localhost:3000';

    const res = await fetch(`${baseURL}/api/blog-fetch`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return res.json();
}

const BlogPage = async () => {
    const blogs = await fetchBlogs();

    return (
        <div>
            <h1>All Blogs</h1>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
