import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
    const [items, setItems] = useState([])
    const handleDelete = id => {
        const url = `https://electron.onrender.com/item/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('Are you Sure ?')
                if (proceed) {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                }
            })
    }
    useEffect(() => {
        fetch("https://electron.onrender.com/item")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container'>
            <h1 className="text-center my-3">Manage Inventories</h1>
            <div>
                {
                    items.map(item => <div className='table-item' key={item._id}>
                        <p><span>Name: {item.name} | Supplier: {item.supplier} <button className='btn btn-danger' onClick={() => { handleDelete(item._id) }}>Delete This Item</button></span></p>
                    </div>)
                }
            </div>
            <h1 className='text-center'><Link className='update-btn' to='/add'>Add new item</Link></h1>
        </div>
    );
};

export default Manage;