import React from 'react';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom'


const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
align-items: center;
color: #fff;

li {
    font-size: 17px;
    margin-left: 20px;
}

li a {
    text-decoration: none;
    color: #fff;
}

button {
    border: none;
    padding: 3px 7px;
    background-color: #9C0189;
    font-size: 17px;
    color: #fff;
    margin-right: 0;
}

@media (max-width: 768px) {
    align-items: center; 
    padding: 15vh 0 15vh 5vh;
    flex-wrap: wrap;
    list-style: none;
    background-color: #181818;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;


    li {
        color: white;
        width: 100%;
        font-size: 40px;
    }

    button {
        font-size: 40px;
    }
}
`

const RightNav = ({open}) => {
    return ( 
            <Ul open={open}>
               <li><NavLink to="/" exact={true}>Home</NavLink></li>
               <li>O mnie</li>
               <li>Jak pracuje</li>
               <li>Portfolio</li>
               <li><NavLink to="/offer-and-price" exact={true}>Oferta i cennik</NavLink></li>
               <li><button>Kontakt</button></li>
        </Ul>
     );
}
 
export default RightNav;