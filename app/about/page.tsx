import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <Container className="mt-5 p-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <h1 className="text-center mb-4">About Devwhiz</h1>
                    <p>
                        Welcome to <strong>Devwhiz</strong>! We are a passionate community of developers, bloggers, and tech enthusiasts dedicated to sharing knowledge and fostering innovation in the tech world. Whether you are a seasoned developer, a curious learner, or someone looking to stay updated on the latest trends in the tech industry, Devwhiz has something for you.
                    </p>
                    <p>
                        At <strong>Devwhiz</strong>, we aim to provide insightful articles, tutorials, and resources on a wide range of topics, including web development, programming languages, frameworks, tools, and much more. Our goal is to create a platform where developers can share their experiences, learn from one another, and grow together.
                    </p>
                    <p>
                        Our blog is designed to be an engaging space for learning and interaction. We believe that through sharing knowledge and experiences, we can help each other overcome challenges, discover new ideas, and continue to evolve as developers.
                    </p>
                    <p>
                        <strong>Join us on this journey of discovery, learning, and growth. Together, lets make the web a better place, one blog post at a time!</strong>
                    </p>
                    <p className="text-center mt-5">
                        <strong>Happy coding!</strong><br />
                        - The Devwhiz Team
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
