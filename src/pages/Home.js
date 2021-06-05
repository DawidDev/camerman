import React from 'react';

import Jumbutron from '../components/Jumbutron'
import AboutMe from '../components/HomePage/AboutMe'
import Incentive from '../components/Incentive'
import HowWorking from '../components/HomePage/HowWorking'

const Home = () => {
    return ( 
        <>
            <Jumbutron type="homePage" />
            <AboutMe />
            <Incentive type="contact"/>
            <HowWorking />
        </>
     );
}
 
export default Home;