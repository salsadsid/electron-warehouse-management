import React from 'react';
import img from '../../../images/Comp-2.gif'
const Loading = () => {
    const style = {
        background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
      };
    
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 w-100 h-100 position-relative'>
                <div style={style}className="h-100 w-100 position-absolute top-0"></div>
                <img src={img} alt="" srcset="" />
        </div>
    );
};

export default Loading;