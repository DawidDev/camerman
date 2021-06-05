import React from 'react';

import Jumbutron from '../components/HomePage/Jumbutron'
import AboutMe from '../components/HomePage/AboutMe'

const Home = () => {
    return ( 
        <>
            <Jumbutron type="homePage" />
            <AboutMe />
        </>
     );
}
 
export default Home;