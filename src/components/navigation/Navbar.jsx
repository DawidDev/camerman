import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// https://www.npmjs.com/package/react-scroll

import Burger from './Burger'

const Nav = styled.nav`
margin: 0 auto;
width: 100%;
max-width: 1600px;
height: 100%;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;

.logo {
    display: flex;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 2px;
    width: auto;
    color: #fff;
}

`


const Navbar = () => {
  
    return ( 
       <Nav>
           <div className="logo">Imię Nazwisko</div>
           <Burger />
       </Nav>
     );
}
 
export default Navbar;
