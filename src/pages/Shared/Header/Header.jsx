import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Button, Container} from 'react-bootstrap';
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

            <div className='d-flex bg-light p-2 align-items-center'>
                <Button variant="danger" className='fw-bold '>Latest</Button><Marquee speed={70} className='fw-bold text-danger text-danger'>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.......
                    I can be a React component, multiple React components, or just some text
                </Marquee>


            </div>
            
        </Container>
    );
};

export default Header;