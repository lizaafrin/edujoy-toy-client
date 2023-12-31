import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TableData = (props) => {
    const singleToy = props.children;
    const { _id, toyName, category, price, availableStock, sellerName } = singleToy;

    const handleDetails = (id) => {
        // console.log(id);
    }
    return (
        <tr>
            <td>{toyName}</td>
            {/* <th>{toyName}</th> */}
            <td>{category}</td>
            <td>{price}</td>
            <td>{availableStock}</td>
            <td>{sellerName}</td>
            <td className='text-xl ps-10'>
                <Link to={`/toys/${_id}`}>
                    <button onClick={() => handleDetails(_id)} className='hover:bg-slate-700 p-2 rounded-md hover:text-white'><FaLongArrowAltRight></FaLongArrowAltRight>
                    </button>
                </Link>
            </td>
        </tr>

    );
};

export default TableData;
