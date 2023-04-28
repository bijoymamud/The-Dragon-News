import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import bg from '../../../assets/bg.png';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='text-center fw-bold'>Login with</h4>
                <Button className='w-100' variant="outline-primary"> <FaGoogle className='me-2'></FaGoogle><span className='font-monospace fw-bold fs-6'>Login with Google</span></Button>
                <Button className='mt-2 w-100' variant="outline-secondary"> <FaGithub className='me-2'></FaGithub><span className='font-monospace fw-bold fs-6 text-black '>Login with GitHub</span></Button>
            </div>

            <div className='mt-5'>
                <h4 className='mb-3 fs-4 fw-bold '>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook className='me-2 fs-4 '></FaFacebook> <span className='font-monospace  fs-4  text-secondary fw-bold'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='me-2 fs-4  '></FaTwitter> <span className='font-monospace fs-4 text-secondary fw-bold'>Twitter</span></ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='me-2 fs-4 '></FaInstagram> <span className='font-monospace fs-4  text-secondary fw-bold'>Instagram</span></ListGroup.Item>

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