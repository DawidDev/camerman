import React, { useState } from 'react';
import styled from 'styled-components';

import RightNav from './RightNav'

const StyledBurger = styled.div`
    width: 3rem;
    height: 3rem;
    position: fixed;
    right: 28px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 2;
    display: none;

    @media (max-width: 768px) {
        display: flex;
    }

    div {
        width: 100%;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#9C0189;" : "#fff")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
         transform: ${({ open }) => (open ? "rotate(31deg)" : "rotate(0deg)")};
        }

        &:nth-child(2) {
            transform: ${({ open }) => (open ? "rotate(-31deg)" : "rotate(0deg)")};
        }
    }
`

const Burger = () => {

    const [open, setOpen] = useState(false);
  

    return ( 
        <>
        <StyledBurger open = { open } onClick={ () => { setOpen(!open) } } >
            <div />
            <div />
        </StyledBurger>
        <RightNav open={ open }/>
        </>
     );
}
 
export default Burger;