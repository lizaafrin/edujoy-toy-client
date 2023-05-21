import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import TableData from '../AllToys/TableData';
import MyToyTable from './MyToyTable';


const MyToys = () => {
    const [toyInfo, setToyInfo] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/mytoys?email=${user.email}`
    // console.log(user);

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToyInfo(data))
    }, [])

    // const { toyInfo } = useContext(AuthContext);
    // console.log(toyInfo);
    useTitle('My Toys');
    return (
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toyInfo.map((singleToy, index) => <MyToyTable key={index}>{singleToy}</MyToyTable>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyToys;