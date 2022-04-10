import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
const Login = () => {
    return (
        <div className='bg-dark  '>
            <h2 className='text-light text-center my-5'>Login </h2>
            <Form className='col-md-3 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Password " />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link className='ms-4 text-light' to=''> Forget Password</Link> <br /> <br />
                <div className='text-center'>
                    <p > <i>New to Ema-jhon ? <Link className='text-info px-2' to="/signin">Create an Account</Link></i>  </p>
                    <p className='btn border text-light '> <FcGoogle className='me-2 fw-bold'></FcGoogle> <span>Login  by useing Google</span></p>
                </div>
            </Form>


        </div>
    );
};

export default Login;