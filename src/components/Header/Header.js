import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='headers '>
            <div>
                <img src={logo} alt="" />

            </div>
            <div className='nav-links'>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Order">Order </a></li>
                <li><a href="/Inventory"> Inventory</a></li>
                <li><a href="/About"> About</a></li>
            </div>

        </nav>
    );
};

export default Header;