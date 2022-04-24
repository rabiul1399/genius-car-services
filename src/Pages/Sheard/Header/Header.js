import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] =useAuthState(auth);
    const handleSignOut =() =>{
        signOut(auth);
    }
    return (
        <div>
            <>

                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"  fixed="top" sticky='top'>
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
                                <Nav.Link href="home#home">Home</Nav.Link>
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link  href="home#experts">Experts</Nav.Link>
                                
                            </Nav>
                            <Nav>
                                <Nav.Link  as={Link} to="/about">About</Nav.Link>
                                {
                                    user && <>
                                    <Nav.Link  as={Link} to="/addservice">Add</Nav.Link>
                                    <Nav.Link  as={Link} to="/manage">ManageService</Nav.Link>
                                    </>
                                }
                                {
                                    user ? 
                                    <button className='btn btn-primary ' onClick={handleSignOut}> Sign Out</button>
                                    :
                                <Nav.Link as={Link} to="/login">
                                  Login
                                </Nav.Link>  }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;