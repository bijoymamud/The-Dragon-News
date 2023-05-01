import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>

            <Container>
                <Navbar className='mt-3 mb-5' collapseOnSelect expand="lg" bg="white" variant="light">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto ">

                                <Link className='text-decoration-none text-secondary' to='/category/0' >Home</Link>

                                <Nav.Link className='fw-bold fs-5' href="#pricing">About</Nav.Link>
                                <Nav.Link className='fw-bold fs-5' href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                {user &&
                                    <FaRegUserCircle style={{ fontSize: '2rem', color: "black" }}></FaRegUserCircle>
                                }

                                {user ?
                                    <Button variant="secondary">LogOut</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>

                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;