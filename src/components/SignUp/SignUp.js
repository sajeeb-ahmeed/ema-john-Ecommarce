import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='py-4'>
            <h2 className='text-light text-center my-5'>Please Register Now </h2>
            <Form className='col-md-3  mx-auto'>
                <Form.Group className="mb-3" id='1' controlId="formBasicEmail">
                    <Form.Label>Frist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter frist name" />

                </Form.Group>
                <Form.Group className="mb-3" id='22' controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" />

                </Form.Group>
                <Form.Group className="mb-3" id='11' controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Group className="mb-3" id='2' controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number  " />

                    </Form.Group>
                </Form.Group>

                <Form.Group className="mb-3" id='3' controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" id='4' controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" id='5' controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree Trems & Condition" />
                </Form.Group>
                <input className='btn btn-outline-info' type="button" value="Register Now" />
                <Link className='ms-4   text-light' to=''> Forget Password</Link>
            </Form>
        </div>
    );
};

export default SignUp;