import React from 'react';
import salman from '../../images/author/salman-lg.png';
import './About.css'
const About = () => {
    return (

        <div className='about-container d-flex flex-column justify-content-center align-items-center my-4'>
            <h2 className='text-center mb-3'>About Me</h2>
            <img src={salman} alt="" />
            <p className='my-4 w-50 text-center'>I am Salman Sadik Siddiquee. My goal is be a web developer. Currently I am learning authentication. I can make websites with HTML5, CSS3, Bootstrap, Tailwind CSS. I am also learnt Javascript and React. I am working hard to get my first job. I am doing 6-10 hours of coding to make myself a master of web technologies. Coding is the top-musted priority in my daily routine. I will be happy to see myself in a web developer position. It is like dream come true.</p>
        </div>
    );
};

export default About;