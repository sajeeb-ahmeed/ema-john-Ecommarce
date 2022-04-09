import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
const Login = () => {
    return (
        <div className='bg-dark  '>
            <h2 className='text-light text-center my-5'>Login </h2>
            <Form className='col-md-3 mx-auto text-light'>
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
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <input className='btn btn-outline-info' type="button" value="Login" />
                <Link className='ms-4  text-light' to=''> Forget Password</Link> <br /> <br />
                <div className='text-center'>
                    <p className='btn border text-light '> <FcGoogle className='me-2 fw-bold'></FcGoogle> <span>Sign in by useing Google</span></p>
                </div>

            </Form>
        </div>
    );
};

export default Login;