import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import TableData from './TableData';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toyInfo = useLoaderData();
    // const { toyInfo } = useContext(AuthContext);
    // console.log(toyInfo);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Seller</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toyInfo.map((singleToy, index) => <TableData key={index}>{singleToy}</TableData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;