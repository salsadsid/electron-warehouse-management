import React from 'react';
import salman from '../../images/author/salman-lg.png';
import './About.css'
const About = () => {
    return (

        <div className='about-container d-flex flex-column justify-content-center align-items-center my-4'>
            <h2 className='text-center mb-3'>About Me</h2>
            <img src={salman} alt="" />
            <p className='my-4 w-50 text-center'>github.com/salsadsid</p>
        </div>
    );
};

export default About;