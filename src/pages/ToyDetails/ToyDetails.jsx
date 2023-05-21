import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    const { _id, toyName, sellerName, sellerEmail, rating, price, picURL, discountPercentage, description, availableStock } = toyData;

    return (
        <div className="card bg-base-100 shadow-xl w-96 lg:w-[700px] mx-auto mt-20">
            <figure><img src={picURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <p>{description}</p>
                <h3><span className='font-bold'>Seller Name:</span> {sellerName}</h3>
                <h3><span className='font-bold'>Seller Email:</span>  {sellerEmail}</h3>
                <div className="flex gap-2 mt-4">
                    <div className="badge border-0 bg-fuchsia-400 w-1/2 p-4 text-black text-base"><span className='font-bold'>Price:</span>${price}</div>
                    <div className="badge border-0 bg-fuchsia-400 w-1/2 p-4 text-black text-base"><span className='font-bold '>Stock: {" "}</span> {availableStock}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;