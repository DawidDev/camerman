import React from 'react';

import Jumbutron from '../components/Jumbutron'
import AboutMe from '../components/HomePage/AboutMe'
import Incentive from '../components/Incentive'
import HowWorking from '../components/HomePage/HowWorking'
import Portfolio from '../components/HomePage/Portfolio'
import Reference from '../components/HomePage/Reference'
import Contact from '../components/HomePage/Contact'

const Home = () => {
    return ( 
        <>
            <Jumbutron type="homePage" />
            <AboutMe />
            <Incentive type="contact"/>
            <HowWorking />
            <Portfolio />
            <Incentive type="offer"/>
            <Reference />
            <Contact />
        </>
     );
}
 
export default Home;