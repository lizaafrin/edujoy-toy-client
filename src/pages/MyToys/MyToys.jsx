import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyTable from './MyToyTable';
import Swal from "sweetalert2";


const MyToys = () => {
    const [toyInfo, setToyInfo] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const url = `https://edujoy-toy-serverside.vercel.app/mytoys?email=${user?.email}`
    // console.log(user);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToyInfo(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log(id);
            fetch(`https://edujoy-toy-serverside.vercel.app/myToys/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            text: "Toy deleted successfully",
                        });
                        const remaining = toyInfo.filter(booking => booking._id !== id)
                        setToyInfo(remaining);
                    }

                })
        }
    }

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
                        toyInfo.map((singleToy, index) => <MyToyTable key={index}
                            singleToy={singleToy}
                            handleDelete={handleDelete}
                        ></MyToyTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;