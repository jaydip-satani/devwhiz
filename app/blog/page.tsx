import React from 'react';
import Blog from './Blog';

interface Blog {
    title: string;
    content: string;
    slug: string;
}

async function fetchBlogs(): Promise<Blog[]> {
    const baseURL = process.env.NODE_ENV === 'production'
        ? 'https://devwhiz.jaydipsatani.com'
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
            <Blog blogs={blogs} />
        </div>
    );
};

export default BlogPage;
