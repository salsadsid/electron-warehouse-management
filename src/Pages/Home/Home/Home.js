import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;