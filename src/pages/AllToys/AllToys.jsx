import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AllToys = () => {
    const {toyInfo} = useContext(AuthContext);
    console.log(toyInfo);
    
    return (
        <div>
            <h2>This is all toy page</h2>
        </div>
    );
};

export default AllToys;