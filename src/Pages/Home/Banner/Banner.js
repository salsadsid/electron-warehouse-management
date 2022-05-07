import React from 'react';
import img from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div className='w-100'>
            <div className="mx-auto">
                <img src={img} className="img-fluid banner" alt="" />
            </div>
        </div>
    );
};

export default Banner;