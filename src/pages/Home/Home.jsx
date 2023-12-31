import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import PopularProducts from './PopularProducts';
import ShopByCAtegory from './ShopByCAtegory';
import useTitle from '../../hooks/useTitle';
import Testimonial from './Testimonial';


const Home = () => {
    useTitle('Home');
    return (
        <div className='bg-purple-100'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCAtegory></ShopByCAtegory>
            <PopularProducts></PopularProducts>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;