import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import PopularProducts from './PopularProducts';
import ShopByCAtegory from './ShopByCAtegory';

const Home = () => {
    return (
        <div className='bg-purple-100'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCAtegory></ShopByCAtegory>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;