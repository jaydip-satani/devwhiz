'use client';
import React from 'react';
import { Card, Alert } from 'react-bootstrap';

interface BlogProps {
    blog: {
        title: string;
        content: string;
    } | null; // Allow blog to be null
    slug: string;
    error: string | null; // Include error prop
}

const Slug: React.FC<BlogProps> = ({ blog, slug, error }) => {
    return (
        <div className="container align-item-center p-3">
            <div className="container mt-5 pt-5">
                {error ? ( // Show error alert if error is present
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <>
                        <div className="container mx-auto p-4">
                            <h1>{blog?.title}</h1>
                        </div>
                        <div className="container">
                            <Card>
                                <Card.Header>{slug}</Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        {blog?.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Slug;
