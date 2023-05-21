import React, { useEffect } from 'react';
import Rating from 'react-rating';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const SingleKitCard = ({ singleKit }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const { _id, toyName, sellerName, sellerEmail, rating, price, picURL, discountPercentage, description, availableStock } = singleKit;
    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='object-cover overflow-hidden w-full h-[300px]' src={picURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>{description.slice(0, 100)}...</p>
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
                        <Link to={`/toys/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleKitCard;

