import React, { useEffect, useState } from 'react';
import './Companies.css'
const Companies = () => {
    const [logos, setLogos] = useState([])

    useEffect(() => {
        fetch('https://electron.onrender.com/logo')
            .then(res => res.json())
            .then(data => setLogos(data))
    }, [])
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4' style={{ fontFamily: "'Gugi', monospace" }}>Trusted By</h1>
            <div className="logo-container d-flex flex-wrap justify-content-center align-items-center">
                {
                    logos.map(logo => <div
                        key={logo._id} className='mx-auto'
                    >
                        <img src={logo.img} alt="" />
                    </div>)
                }
            </div>
        </div >
    );
};

export default Companies;