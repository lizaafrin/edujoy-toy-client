import React, { useEffect, useState } from 'react';


const Gallery = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])
    console.log(productData);
    return (
        <div className='mt-20'>
            <div className='w-fit mx-auto  bg-slate-800 rounded-lg'>
                <h2 className='text-xl text-white px-10 py-3'>Check Out Our Photo Gallery</h2>
            </div>
            {/* <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3'> */}
            <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box mx-auto mt-20">
                {
                    productData.map((product) => {
                        console.log(product.toyName);
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl carousel-item">
                                <figure><img className='object-cover w-full h-cover' src={product.picURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.toyName}</h2>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
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

export default Gallery;