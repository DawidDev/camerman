import React from 'react';

import Jumbutron from '../components/Jumbutron'
import AboutMe from '../components/HomePage/AboutMe'
import Incentive from '../components/Incentive'

const Home = () => {
    return ( 
        <>
            <Jumbutron type="homePage" />
            <AboutMe />
            <Incentive type="contact"/>
        </>
     );
}
 
export default Home;