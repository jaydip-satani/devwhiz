import React from 'react';
import { notFound } from 'next/navigation';
import Slug from '../Slug';

interface Blog {
    title: string;
    content: string;
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
        return notFound();
    }

    const response = await fetch(`http://localhost:3000/api/get-blog?slug=${slug}`);

    if (!response.ok) {
        return <Slug blog={null} slug={slug} error="Failed to fetch blog." />;
    }

    const blog: Blog = await response.json();

    if (!blog) {
        return <Slug blog={null} slug={slug} error="Blog not found." />;
    }

    return <Slug blog={blog} slug={slug} error={null} />;
}

export default BlogPage;
