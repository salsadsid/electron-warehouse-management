import React from 'react';

const ProductRow = ({item,index,handleDelete}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.supplier}</td>
            <td><button className='btn btn-danger' onClick={() => { handleDelete(item._id) }}>Delete</button></td>
        </tr>
    );
};

export default ProductRow;