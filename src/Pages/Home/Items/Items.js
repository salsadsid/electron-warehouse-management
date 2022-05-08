import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css'
const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://protected-river-63833.herokuapp.com/item")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'>Inventory</h1>
            <div className="items-container">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <h1 className='text-center'><Link className='update-btn' to='/manage'>Manage Inventories</Link></h1>
        </div>
    );
};

export default Items;