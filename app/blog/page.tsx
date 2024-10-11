import React from 'react';

// Define the structure of a blog item
interface Blog {
    title: string;
    content: string;
    // [key: string]: any; // Add this if your blog has additional fields
}

// Fetch blog data directly inside the component
async function fetchBlogs(): Promise<Blog[]> {
    const baseURL = process.env.NODE_ENV === 'production'
        ? 'https://yourdomain.com'  // Replace with your production URL
        : 'http://localhost:3000';   // Use localhost during development

    const res = await fetch(`${baseURL}/api/blog-fetch`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return res.json();
}

const BlogPage = async () => {
    const blogs = await fetchBlogs(); // Fetching the blogs inside the component

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
