import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
const Item = ({ item }) => {
    const { img, name, description } = item
    return (
        <div className='card'>
            <img src={img} className="card-img-top" alt="..." />

            <div className="card-body">
                <div className="title">
                    <h3 className='text-center'>{name}</h3>
                </div>
                <div className="content">
                    <p>
                        {description}
                    </p>
                </div>
                <Link to='/checkout' className="update-btn">Check out</Link>
            </div>
        </div>
    );
};

export default Item;