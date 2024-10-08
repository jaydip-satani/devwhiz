import React from 'react';
import Blog from './Blog';

interface Blog {
    title: string;
    content: string;
    slug: string;
}

const BlogPage = async () => {
    const blogs: Blog[] = await fetch('/api/blog-fetch')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error fetching blogs:", error);
            return [];
        });

    return <Blog blogs={blogs} />;
};

export default BlogPage;
