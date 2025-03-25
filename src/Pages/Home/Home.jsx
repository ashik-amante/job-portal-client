import React from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Hotjobs></Hotjobs>
        </div>
    );
};

export default Home;