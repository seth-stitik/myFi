import React from 'react';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function Navbar() {
    return (
        <BSNavbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
                <BSNavbar.Brand href="#home">MyFi</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Features</Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}

export default Navbar;