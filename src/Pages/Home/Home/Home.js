import React from 'react';
import AllNews from '../AllNews/AllNews';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Items from '../Items/Items';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <AllNews></AllNews>
            <Companies></Companies>
        </div>
    );
};

export default Home;