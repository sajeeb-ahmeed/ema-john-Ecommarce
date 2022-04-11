import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth)



    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [textArea, setTextArea] = useState('');
    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleTextarea = (event) => {
        setTextArea(event.target.value);
    }


    const handleShippingUser = (event) => {
        event.preventDefault();
        const shipping = document.getElementById('shippingInfo');
        shipping.classList = 'bg-info p-4'
        shipping.innerHTML = `
        <h5>Name: ${name}</h5>
        <h5>Phone: ${phone}</h5>
        <h5>Address: ${address}</h5>
        <h5>Feedback: ${textArea}</h5>
        `

    }
    return (
        <div className='py-4  container'>
            <h2 className='text-light text-center my-5'> Shipping Information </h2>
            <div className="row">
                <Form onSubmit={handleShippingUser} className='col-md-8 mx-auto w-25'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Name </Form.Label>
                        <Form.Control onBlur={handleName} name='text' type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onBlur={handlePhone} name='text' type="text" placeholder="Phone Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control onBlur={handleAddress} name='text' type="text" placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} readOnly name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <label htmlFor="textarea">Write Your Comment</label>
                    <textarea onBlur={handleTextarea} name="textarea" id="textarea" cols="50" rows="5" placeholder='type something here ...'></textarea>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree with Trems & Condition " />
                    </Form.Group>
                    <Button className='btn btn-outline-light' variant='dark' type="submit">
                        Add Shipping
                    </Button>
                    <input className='ms-3 btn btn-outline-light' type="reset" value="Reset All" />
                    <br /> <br />
                    <div className='text-center'>
                        <p className=''> <i>  <Link className='btn btn-outline-light px-2' to="/shop"> Chosse more items ?</Link></i>  </p>
                        <p className='btn border text-light '> <FcGoogle className='me-2 fw-bold'></FcGoogle> <span>Sign up   by useing Google</span></p>
                    </div>
                </Form>
                <div className='col-md-4'>
                    {
                        name ?
                            <h4>Shipping Information </h4> : ''

                    }
                    <div id="shippingInfo">


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Shipping;