import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';
import './InventoryDetail.css'
const InventoryDetail = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const url = `https://electron.onrender.com/item/${id}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [quantity])
    const handleDeliver = (id) => {
        const data = {
            id: id,
            quantity: item.quantity - 1,
        }

        fetch(`https://electron.onrender.com/item/`, {
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
    const handleSubmit = event => {
        event.preventDefault();
        const newQuantity = parseInt(item.quantity) + parseInt(event.target.number.value);
        const data = {
            id: id,
            quantity: newQuantity,
        }

        fetch(`https://electron.onrender.com/item/`, {
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
                <p><span className='head'>Quantity:</span> {quantity == 0 ? item.quantity : quantity} </p>
                <p><span className='head'>Sold:</span> {item.sold}</p>
                <p><span className='head'>About This Item:</span></p>
                <p>
                    {item.description}
                </p>
                <button onClick={() => handleDeliver(id)} className='update-btn'>Delivered</button>
            </div>

            <div className="login">
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <p className="fs-1">Restock</p>
                        <input name='number' type="number" placeholder="Enter a number" required />
                        <button type='submit'>Restock</button>
                    </form>

                </div>
            </div>
            <h1 className='text-center'><Link className='update-btn' to='/manage'>Manage Inventories</Link></h1>
        </div>

    );
};

export default InventoryDetail;