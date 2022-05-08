import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/'>Electron</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            {user ?
                                <Nav>
                                    <Nav.Link as={Link} to="manage">
                                        Manage INV
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="add">
                                        Add Items
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="myitem">
                                        My Item
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="home" onClick={handleSignout}>Log out</Nav.Link>
                                </Nav>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;