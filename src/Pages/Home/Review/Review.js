import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, review, img, email, rating } = props.review
    return (
        <div className='review-container colors'>
            <div className='overlay'> </div>
            <div className='review'>
                <img src={img} alt="" className='circle' />
                <div className='review-title'>
                    <p className='reviewer-name'>{name}</p>
                    <p>{email}</p>
                    <p>Rating: {rating}/5</p>
                </div>
            </div>
            <div>
                <p>"{review}"</p>
            </div>
        </div>
    );
};

export default Review;