import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys');
    return (
        <div>
            <h2>This route shows my all toys</h2>
        </div>
    );
};

export default MyToys;