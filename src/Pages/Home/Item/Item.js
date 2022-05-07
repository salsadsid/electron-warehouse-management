import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = ({ item }) => {
    const { id, img, name, description } = item
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`)
    }
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
                <Button onClick={() => navigateToServiceDetail(id)} className="update-btn">Update</Button>
            </div>
        </div>
    );
};

export default Item;