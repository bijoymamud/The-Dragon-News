import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import bg from '../../../assets/bg.png';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login with</h4>
                <Button variant="outline-primary"> <FaGoogle></FaGoogle>Login with Google</Button>
                <Button className='mt-2' variant="outline-secondary"> <FaGithub />Login with GitHub</Button>
            </div>

            <div className='mt-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>

                </ListGroup>
            </div>

            <div className=' mt-3 p-2 bg-light text-center'>
                <h3>Q-Zone</h3>

                <Qzone></Qzone>

            </div>

            <div>
                <img className='mt-5' src={bg} alt="" />


                <h1>Create an Amazing Newspaper</h1>

            </div>
        </div>
    );
};

export default RightNav;