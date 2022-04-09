import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (



        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Ema-Jhon</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <img src={logo} alt="" />
                    </Nav>
                    <Nav>
                        <Link className='link' to="/shop">Shop</Link>
                        <Link className='link' to="/orders">Orders</Link>
                        <Link className='link' to="/inventory">Inventory</Link>
                        <Link className='link' to="/about">About</Link>
                        <Link className='link' to="/login">Login</Link>
                        <Link className='link' to="/signin">Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>




    );
};

export default Header;