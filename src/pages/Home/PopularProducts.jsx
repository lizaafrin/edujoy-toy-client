import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PopularProducts = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { toyInfo } = useContext(AuthContext);
    // console.log(toyInfo);
    const descendingRating = [...toyInfo].sort((a, b) => b.rating - a.rating);
    // console.log(descendingRating);
    return (
        <div className='max-w-screen-2xl mx-auto gap-x-1 pb-20'>
            <div className='w-fit mx-auto  bg-slate-800 rounded-lg mt-20'>
                <h2 className='text-xl text-white px-10 py-3'>Check Out Our Best Products</h2>
            </div>
            <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 mx-auto ms-10'>
                {
                    descendingRating.slice(0, 3).map(product => {
                        return (
                            <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.picURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.toyName}
                                        <div className="badge badge-secondary">{product.rating}</div>
                                    </h2>
                                    <p className='mt-4'>{product.description.slice(0, 60)}...
                                        <span>
                                            <button className="border-0 border-fuchsia-300 font-bold">
                                                See More{" "}
                                            </button>
                                        </span>
                                    </p>
                                    <div className="flex flex-col">
                                        <div className="badge badge-outline w-full mt-4 p-4 bg-fuchsia-600 text-white text-md">Category: {product.category}</div>
                                        <div className="badge badge-outline w-1/2 mt-4 p-4 bg-fuchsia-600 text-white mx-auto">Buy Now</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default PopularProducts;