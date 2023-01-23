import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'
const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myitem, setMyItem] = useState([])
    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `https://electron.onrender.com/myitem?email=${email}`;
            console.log(url)
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(data)
            setMyItem(data);
        }
        getItem();
    }, [user])

    const handleDelete = id => {
        const url = `https://electron.onrender.com/item/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('Are you Sure ?')
                if (proceed) {
                    const remaining = myitem.filter(item => item._id !== id);
                    setMyItem(remaining);
                }
            })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>My Item/s</h2>
            <div>
                <div>
                    {
                        myitem.map(item => <div className='table-item' key={item._id}>
                            <p><span>Name: {item.name} | Supplier: {item.supplier} <button className='btn btn-danger' onClick={() => { handleDelete(item._id) }}>Delete This Item</button></span></p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
};

export default MyItem;