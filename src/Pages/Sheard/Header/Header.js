import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div>
            <>

                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top" sticky='top'>
                    <Container>
                        <Navbar.Brand as={Link}  to="/">
                            <img
                                src={logo}
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link  href="home#experts">Experts</Nav.Link>
                                
                            </Nav>
                            <Nav>
                                <Nav.Link  as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/login">
                                  Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;