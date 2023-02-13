import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        // console.log(data);

        fetch('https://electron.onrender.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    toast.success("Item Added",{
                        theme: "colored"
                    })
                }else{
                    toast.error("Item Not Added",{
                        theme: "colored"
                    })
                }
            })
    }
    return (
        <div className='form-container mx-auto'>
            <h2 className='text-center my-4' style={{ fontFamily: "'Gugi', monospace" }}>Add new item</h2>
            <form className='d-flex flex-column my-3' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 form-control' placeholder='Photo URL' {...register("img", { required: true })} />
                <input className='mb-2 form-control' type="number" placeholder='Price' {...register("price", { required: true })} />
                <input className='mb-2 form-control' type="number" placeholder='Quantity' {...register("quantity", { required: true })} />
                <input className='mb-2 form-control' placeholder='Supplier' {...register("supplier", { required: true })} />
                <input className='mb-2 form-control' type="number" placeholder='Sold' {...register("sold", { required: true })} />
                <textarea className='mb-2 form-control' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2 form-control' placeholder='Email' {...register("email", { required: true })} value={user?.email} readOnly />
                <input className='btn w-25 mx-auto btn-success' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;