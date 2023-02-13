import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProductRow from '../Manage/ProductRow/ProductRow';
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
    }, [user,myitem])

    const handleDelete = id => {

        const confirm = window.confirm("Are you sure")
        const url = `https://electron.onrender.com/item/${id}`;

        if(confirm){
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        toast.success("Successfully Deleted",{
                            theme: "colored"
                        })
                    }else{
                        toast.error("Not Deleted",{
                            theme: "colored"
                        })
                    }
                })
        }else{
            return;
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center my-4' style={{ fontFamily: "'Gugi', monospace" }}>My Item</h2>
            <div>
            <Table  striped="columns">
      <thead>
        <tr>
          <th>#</th>
         <th>Product Name</th>
         <th>Supplier</th>
         <th>Action</th>
        </tr>
      </thead>
      <tbody>
            {
                myitem.map((item,index)=><ProductRow
                key={item._id}
                item={item}
                index={index}
                handleDelete={handleDelete}
                ></ProductRow>)
            }
      </tbody>
    </Table>
                {/* <div>
                    {
                        myitem.map(item => <div className='table-item' key={item._id}>
                            <p><span>Name: {item.name} | Supplier: {item.supplier} <button className='btn btn-danger' onClick={() => { handleDelete(item._id) }}>Delete This Item</button></span></p>
                        </div>)
                    }
                </div> */}
            </div>
            
        </div>
    )
};

export default MyItem;