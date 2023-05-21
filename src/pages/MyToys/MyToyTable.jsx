import React from 'react';
import { FaLongArrowAltRight, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const MyToyTable = (props) => {
    const singleToy = props.children;
    const { _id, toyName, category, price, availableStock, sellerName } = singleToy;

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: 'DELETE',
                // headers: {
                //     'content-Type': 'application/json'
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            text: "Toy deleted successfully",
                        });
                    }
                })
        }
    }
    return (
        <tr>
            <td>{toyName}</td>
            {/* <th>{toyName}</th> */}
            <td>{category}</td>
            <td>{price}</td>
            <td>{availableStock}</td>
            <td>{sellerName}</td>
            <td className='text-xl ps-5'>
                <Link to={`/myToys/${_id}`}>
                    <button onClick={() => handleDelete(_id)} className='hover:bg-slate-700 p-2 rounded-md hover:text-white'><FaTrash></FaTrash>
                    </button>
                </Link>
            </td>
        </tr>

    );
};

export default MyToyTable;