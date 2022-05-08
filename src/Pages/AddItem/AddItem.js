import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './AddItem.css'
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        // console.log(data);

        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='form-container mx-auto'>
            <h2 className='text-center my-3'>Add new item</h2>
            <form className='d-flex flex-column my-3' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='Photo URL' {...register("img", { required: true })} />
                <input className='mb-2' placeholder='Price' {...register("price", { required: true })} />
                <input className='mb-2' placeholder='Quantity' {...register("quantity", { required: true })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true })} />
                <input className='mb-2' placeholder='Sold' {...register("sold", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='Email' {...register("email", { required: true })} value={user?.email} readOnly />
                <input className='update-btn submit mx-auto' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;