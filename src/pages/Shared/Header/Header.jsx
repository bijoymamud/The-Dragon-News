import moment from 'moment/moment';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import logo from "../../../../src/assets/logo.png";

const Header = () => {
    return (
        <Container >
            <div className="text-center">
                <img src={logo} alt='logo' />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>


                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <div className='d-flex bg-light p-2 '>
                <Button variant="danger" className='fw-bold '>Latest</Button><Marquee speed={70} className='fw-bold text-danger text-danger'>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.......
                    I can be a React component, multiple React components, or just some text
                </Marquee>


            </div>
            <Navbar className='mt-3 mb-5' collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className='fw-bold fs-5' href="#features">Home</Nav.Link>
                            <Nav.Link className='fw-bold fs-5' href="#pricing">About</Nav.Link>
                            <Nav.Link className='fw-bold fs-5' href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;