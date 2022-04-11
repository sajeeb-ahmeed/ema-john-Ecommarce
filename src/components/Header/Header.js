import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (



        <Navbar fixed='top ' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <img src={logo} alt="" />
                    </Nav>
                    <Nav className='link'>
                        <Link to="/shop">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/about">About</Link>
                        {
                            user ?
                                <p className='link'>Sign Out</p>
                                :
                                <Link to="/login">Login</Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>




    );
};

export default Header;