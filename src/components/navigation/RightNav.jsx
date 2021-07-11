import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom'

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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

const RightNav = ({open, close}) => {

    // Handle closing menu. Function from upper component. 
    const closeMenuFnk = () => { close() }

    const fnk = (nameContainer) => { 
        setTimeout( function(){
            scroller.scrollTo(nameContainer, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: nameContainer === "start-position" ? 0 : -70,
              });
        }, 300 ) 
     }

     const clickFnk = (nameContainer) => {
        fnk(nameContainer)
        closeMenuFnk()
     }

   return ( 
            <Ul open={open}>
               <li><NavLink to="/" exact={true} onClick={clickFnk.bind(this, "start-position")}>Home</NavLink></li>
               <li><NavLink to="/" exact={true} onClick={clickFnk.bind(this, "about-me")} >O mnie</NavLink></li>
               <li><NavLink to="/" exact={true} onClick={clickFnk.bind(this, "how-working")} >Jak pracuje</NavLink></li>
               <li><NavLink to="/" exact={true} onClick={clickFnk.bind(this, "portfolio")}>Portfolio</NavLink></li>
               <li><NavLink to="/offer-and-price" exact={true}>Oferta i cennik</NavLink></li>
               <li><button onClick={clickFnk.bind(this, "contact")}><NavLink to="/" exact={true}>Kontakt</NavLink></button></li>
        </Ul>
     );
}
 
export default RightNav;

