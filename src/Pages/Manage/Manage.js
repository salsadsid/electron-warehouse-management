import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Login/Loading/Loading';
import ProductRow from './ProductRow/ProductRow';

const Manage = () => {
    const { data: items, isLoading ,refetch} = useQuery('items', () => fetch(`https://electron.onrender.com/item`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
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
                    refetch();
                })
        }else{
            return;
        }
    }
  
    return (
        <div className='container'>
            <h1 className="text-center my-3">Manage Inventories</h1>
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
                items.map((item,index)=><ProductRow
                key={item._id}
                item={item}
                index={index}
                handleDelete={handleDelete}
                ></ProductRow>)
            }
      </tbody>
    </Table>
            <h1 className='text-end my-4'><Link className='btn btn-success' to='/add'>Add Item <i class="ms-2 fas fa-arrow-right"></i></Link></h1>
            
        </div>
    );
};

export default Manage;