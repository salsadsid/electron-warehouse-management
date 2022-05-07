import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='w-100 bg-success'>
            <h5 className='text-center text-white pt-3'>Useful Links</h5>
            <p className='text-center text-white'><Link className='text-white text-decoration-none' to='/home'>Home</Link></p>
            <p className='text-center text-white'><Link className='text-white text-decoration-none' to='/login'>Login</Link></p>
            <p className='text-center text-white'><Link className='text-white text-decoration-none' to='/blogs'>blogs</Link></p>
            <p className='text-center text-white'><Link className='text-white text-decoration-none' to='/about'>About</Link></p>

            <p className='text-center text-white py-3'>Copyright &copy; {year} salsadsid</p>
        </div>
    );
};

export default Footer;