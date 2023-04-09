import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='Learning-title'>Learning More</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;