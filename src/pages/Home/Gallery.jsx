import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Gallery = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    const { toyInfo } = useContext(AuthContext);
    // console.log(toyInfo);
    // console.log(productData);
    return (
        <div className='mt-20'>
            <div className='w-fit mx-auto  bg-slate-800 rounded-lg'>
                <h2 className='text-xl text-white px-10 py-3'>Check Out Our Photo Gallery</h2>
            </div>
            {/* <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3'> */}
            <div className="carousel relative carousel-center max-w-screen-2xl p-4 space-x-4 bg-neutral rounded-box mx-auto mt-14">
                {
                    toyInfo.map((product, index) => {
                        return (
                            <div data-aos="flip-right" key={product._id} className="card w-96 bg-base-100 shadow-xl carousel-item">
                                <figure><img className='object-cover w-full h-cover overflow-hidden' src={product.picURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.toyName}</h2>
                                    <h4 className="card-title text-sm">Seller: {product.sellerName}</h4>
                                    
                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
};

export default Gallery;