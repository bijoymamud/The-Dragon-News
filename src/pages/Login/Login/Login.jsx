import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    //Taking singin value from AuthProvider.
    const { signIn } = useContext(AuthContext)


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //for singin/login user

        //call the signin
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>



                <Button className='w-100 mx-auto' variant="primary" type="submit">
                    Login
                </Button>
                <br />

                <Form.Text className="text-secondary">

                    Don't Have an Account? <Link to={'/register'}>Register</Link>

                </Form.Text>

                <Form.Text className="text-Success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;