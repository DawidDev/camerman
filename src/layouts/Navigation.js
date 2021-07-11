import React, {useEffect, useState} from 'react';

import Navbar from '../components/navigation/Navbar';

import styled from 'styled-components';

const NavigationBlock = styled.div`
    width: 100%;
    position: fixed;
    z-index: 10;
    transition-duration: 1s;
    background-color: ${({ isScrolled }) => (isScrolled ? "#1F1F1F" : "transparent")};
    height: ${({ isScrolled }) => (isScrolled ? "70px" : "90px")};
`

const Navigation = () => {

    // Change style navigation after scroll
    const [scroll, setScroll] = useState(false)

    const handleScroll = (e) => {
      const value = window.pageYOffset;
      value > 300 ? setScroll(true) : setScroll(false)
     }

    useEffect(() => { 
      window.addEventListener('scroll', handleScroll)
    });

    return ( 
        <NavigationBlock isScrolled={scroll}>
            <Navbar/>
        </NavigationBlock>
     );
}
 
export default Navigation;