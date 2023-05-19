import React from 'react';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const TableData = (props) => {
    const singleToy = props.children;
    const { _id, toyName, category, price, availableStock, sellerName } = singleToy;

    const handleDetails = (id) => {
        console.log(id);
    }
    return (
            <tr>
                <td>{toyName}</td>
                {/* <th>{toyName}</th> */}
                <td>{category}</td>
                <td>{price}</td>
                <td>{availableStock}</td>
                <td>{sellerName}</td>
                <td className='text-xl ps-10'><button onClick={() => handleDetails(_id)} className='hover:bg-slate-700 p-2 rounded-md hover:text-white'><FaLongArrowAltRight></FaLongArrowAltRight></button></td>
            </tr>
            
    );
};

export default TableData;

/*
 return (
    <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.toyName}</td>
    <td>{item.category}</td>
    <td>{item.price}</td>
</tr>
) 

{
                            toyInfo.map((singleToy, index) => (
                                <TableData key={index}>{singleToy}</TableData>
                            ))
            }
*/ 