import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    console.log(allToys);
    
    return (
        <div>
            <h2>This is all toy page</h2>
        </div>
    );
};

export default AllToys;