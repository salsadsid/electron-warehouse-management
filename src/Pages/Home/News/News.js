import React from 'react';
import './News.css'
const News = (props) => {
    const { name, news, img, email } = props.n
    return (
        <div className='anews-container colors'>
            <div className='overlay'> </div>
            <div className='news'>
                <img src={img} alt="" className='circle' />
                <div className='news-title'>
                    <p className='reporter-name'>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div>
                <p>"{news}"</p>
            </div>
        </div>
    );
};

export default News;