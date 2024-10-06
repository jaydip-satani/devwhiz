'use client';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomeContent = () => {
    const articles = [
        {
            title: 'Understanding React Hooks',
            description: 'A deep dive into React hooks and how they can simplify your code.',
            link: 'https://react.dev/reference/react/hooks'
        },
        {
            title: 'Getting Started with Next.js',
            description: 'An introductory guide to building applications with Next.js.',
            link: 'https://nextjs.org/docs'
        },
        {
            title: 'JavaScript ES2022 Features',
            description: 'Explore the latest features in JavaScript ES2022 that will blow your mind.',
            link: 'https://dev.to/jasmin/whats-new-in-es2022-1de6'
        }
    ];

    return (
        <Container className="mt-5 p-5">
            <Row className="justify-content-md-center mb-4">
                <Col md={8}>
                    <h1 className="text-center">Welcome to Devwhiz</h1>
                    <p className="text-center">
                        Your go-to blog for insightful articles, tutorials, and resources in the tech world.
                    </p>
                </Col>
            </Row>
            <Row>
                {articles.map((article, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <Button variant="primary" href={article.link} target='_blank'>
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeContent;
