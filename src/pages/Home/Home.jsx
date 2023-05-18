import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import PopularProducts from './PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;