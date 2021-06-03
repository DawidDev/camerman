import React from 'react';
import styled from 'styled-components';

import Burger from './Burger'

const Nav = styled.nav`
margin: 0 auto;
width: 100%;
max-width: 1600px;
height: 65px;
border-bottom: 2px solid silver;
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
}

`


const Navbar = () => {
    return ( 
       <Nav>
           <div className="logo">Name Surname</div>
           <Burger />
       </Nav>
     );
}
 
export default Navbar;
