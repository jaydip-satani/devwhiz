'use client'; // This component will be a Client Component
import React from 'react';
import { Card, CardLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

interface BlogProps {
    blogs: {
        title: string;
        content: string;
        slug: string;
    }[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
    return (
        <>
            <div className="container p-3">
                <div className="container mt-5 pt-5">
                    <h1>Blogs</h1>
                </div>
                <div className="container p-3">
                    <Card>
                        <Card.Header>Featured Blogs</Card.Header>
                        {blogs.map((blog, index) => (
                            <Card.Body key={index}>
                                <Card.Title>
                                    <CardLink className='text-decoration-none' as={Link} href={`/blog-post/${blog.slug}`}>
                                        {blog.title}
                                    </CardLink>
                                </Card.Title>
                                <Card.Text>
                                    {blog.content.substr(0, 200)}...
                                </Card.Text>
                                <hr />
                            </Card.Body>
                        ))}
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Blog;
