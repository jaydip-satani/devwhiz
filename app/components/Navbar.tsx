'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../logo.png"
import Image from 'next/image';

const NavBar: React.FC = () => {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logo} alt='' height={40} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} href="/" className="text-decoration-none">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} href="/about" className="text-decoration-none">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} href="/blog" className="text-decoration-none">
                            Blog
                        </Nav.Link>
                        <Nav.Link as={Link} href="/contact-us" className="text-decoration-none">
                            Contact-Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default NavBar;
