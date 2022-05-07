import React from 'react';
import googleicon from '../../../images/icon-google.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center px-3'>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
                <p className='fw-bolder mt-2 px-3'>OR</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
            </div>
            <button id='google-btn'>
                <img src={googleicon} alt="" className='mt-2' />
                <p className='fw-bold'>Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;