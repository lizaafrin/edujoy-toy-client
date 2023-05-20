import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    return (
        <div>
            <h2>This is toy details component.</h2>
        </div>
    );
};

export default ToyDetails;