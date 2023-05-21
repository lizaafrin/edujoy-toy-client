import React, { useContext, useState } from 'react';
import TableData from './TableData';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [searchText, setSearchText] = useState([]);
    const [filterData, setFilterData] = useState([]);
    // const [toyInfo, setToyInfo] = useState([]);

    const toyInfo = useLoaderData();
    useTitle('All Toys');
    // console.log(searchText);
    useTitle('All Toys');
    const handleOnchange = (e) => {
        setSearchText(e.target.value);
        setFilterData(toyInfo);
    }
    const handleToySearch = () => {
        if(searchText != ''){
            const filteredToys = toyInfo.filter(toy => Object.keys(toy).some(k => String(toy[k]).toLowerCase().includes(searchText.toLowerCase())));
            setFilterData([...filteredToys]);
            console.log(filteredToys);
        }
        // 
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <div className="form-control my-10">
                    <div className="input-group">
                        <input type="text" placeholder="Search toy"
                        onChange={handleOnchange} className="input input-bordered" />
                        <button onClick={handleToySearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <table className="table table-zebra w-full">
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
                        { searchText!=''  ? filterData.map((singleToy, index) => <TableData key={index}>{singleToy}</TableData>) :
                            toyInfo.map((singleToy, index) => <TableData key={index}>{singleToy}</TableData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;