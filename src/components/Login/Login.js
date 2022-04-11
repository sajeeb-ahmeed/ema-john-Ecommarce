import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleLoginUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

        if (user) {
            toast.success('successfully login');
            navigate(from, { replace: true })
        }
        if (!user) {
            toast.error('Make confrm you identity', { id: "error" });
            return
        }
        if (error) {
            toast.error({ error })
        }

    }


    return (
        <div className='bg-dark  '>
            <h2 className='text-light text-center my-5'>Login </h2>
            <Form onSubmit={handleLoginUser} className='col-md-3 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
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