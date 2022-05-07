import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';
import './InventoryDetail.css'
const InventoryDetail = () => {
    const { id } = useParams()
    const [item] = useInventoryDetail(id)
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        setQuantity(item.quantity);
    }, [quantity])
    const handleDeliver = (id) => {
        const data = {
            id: id,
            quantity: item.quantity - 1,
        }
        fetch(`http://localhost:5000/item/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount > 0) {
                    setQuantity(data.quantity);
                }
            })

    }
    return (

        <div className='text-center my-4 item-container'>
            <div className='detail mx-auto'>
                <h2 >Detailed Information</h2>
                <h4>Name: <span className='title'>{item.name}</span></h4>
                <img src={item.img} alt="" />
                <p className='mt-3'><span className='head'>Price:</span> {item.price}</p>
                <p><span className='head'>Quantity:</span> {quantity}</p>
                <p><span className='head'>Supplier:</span> {item.supplier}</p>
                <p><span className='head'>Sold:</span> {item.sold}</p>
                <p><span className='head'>About This Item:</span></p>
                <p>
                    {item.description}
                </p>
                <button onClick={() => handleDeliver(id)} className='update-btn'>Delivered</button>

            </div>
        </div>

    );
};

export default InventoryDetail;