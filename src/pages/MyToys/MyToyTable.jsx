import React from 'react';
import { FaTrash } from 'react-icons/fa';


const MyToyTable = ({ singleToy, handleDelete }) => {
    const { _id, toyName, category, price, availableStock, sellerName } = singleToy;

    
    return (
        <tr>
            <td>{toyName}</td>
            {/* <th>{toyName}</th> */}
            <td>{category}</td>
            <td>{price}</td>
            <td>{availableStock}</td>
            <td>{sellerName}</td>
            <td className='text-xl ps-5'>
                <button onClick={() => handleDelete(_id)} className='hover:bg-slate-700 p-2 rounded-md hover:text-white'><FaTrash></FaTrash>
                </button>
            </td>
        </tr>

    );
};

export default MyToyTable;