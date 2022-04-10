import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';





const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    //handle from submit 
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError(toast.error('Password MisMatched', { id: "error" }));
            // console.log(error);
            return;
            //  alert(error ? error : 'MisMatched Password')
        }
        if (password.length < 6) {
            // setError(toast.error('Password is too short', { id: "error" }));
            toast.error('Password is too short', { id: "error" })

            return;
        }
        createUserWithEmailAndPassword(email, password);
        toast.success(' Account Create Successfully !', { id: "success" })
    }


    // use react-firebase-hooks -to create user with email and passowrd 
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    // navigate user 
    if (user) {
        navigate("/shop")
    }
    return (
        <div className='py-4'>
            <h2 className='text-light text-center my-5'>Please Register Now </h2>
            <Form onSubmit={handleCreateUser} className='col-md-3 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} name='confirmPassword' type="password" placeholder="Password" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with Trems & Condition " />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Link className='ms-4 text-light' to='/signin'> Reset All</Link> <br /> <br />
                <div className='text-center'>
                    <p > <i>already have an account ? <Link className='text-info px-2' to="/login">Login</Link></i>  </p>
                    <p className='btn border text-light '> <FcGoogle className='me-2 fw-bold'></FcGoogle> <span>Sign up   by useing Google</span></p>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;