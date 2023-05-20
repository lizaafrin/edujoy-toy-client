import React from 'react';
import Rating from 'react-rating';


const SingleKitCard = ({ singleKit }) => {
    const { _id, toyName, sellerName, sellerEmail, rating, price, picURL, discountPercentage, description, availableStock } = singleKit;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='object-cover overflow-hidden w-full h-[300px]' src={picURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>{description.slice(0,100)}...</p>
                    <h4 className='font-semibold'>Price : {price}</h4>
                    <h4 className='font-semibold'>Rating: {rating}</h4>
                    {/* <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    /> */}
                    <span>{rating?.number}</span>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleKitCard;