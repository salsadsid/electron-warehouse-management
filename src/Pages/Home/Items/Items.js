import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Login/Loading/Loading';
import Item from '../Item/Item';
import './Items.css'
const Items = () => {
    const { data: items, isLoading } = useQuery('items', () => fetch(`https://electron.onrender.com/item`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container my-4'>
            <h1 style={{ fontFamily: "'Gugi', monospace" }} className='text-center my-4'>Inventory</h1>
            <div className="items-container">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <h1 className='text-end my-4'><Link className='btn btn-success' to='/manage'>Manage Inventories <i class="ms-2 fas fa-arrow-right"></i></Link></h1>
        </div>
    );
};

export default Items;