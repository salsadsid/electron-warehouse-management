import React from 'react';
import img from '../../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div>
            <h3 className='text-center text-dark mt-3'>Page Not Found</h3>
            <div className='d-flex justify-content-center'>
                <img className='w-75' src={img} alt="" />
            </div>

        </div>
    );
};

export default NotFound;