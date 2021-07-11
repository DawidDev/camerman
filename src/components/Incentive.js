import React from 'react';

import styled from 'styled-components';

import {animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import background from '../images/background.jpg'

const MainContainer = styled.div`
    width: 100%;
    min-height: 150px;
    background-color: silver;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${({ typeBackground }) => (typeBackground === "contact" ? `url(${background})` : ` `)};
    background-position: center;
    background-size: 100% auto;
    position: relative;
    margin-bottom: 70px;

    ::before{
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: #181818;
        opacity: ${({ typeBackground }) => (typeBackground === "contact" ? `0.5` : `1`)};
    }

    .block {
        width: 100%;
        padding: 20px;
        max-width: 1400px;
        display: flex;
        justify-content: space-around;
        z-index: 1;

        p {
            font-size: 30px;
            font-weight: 600;
            color: #fff;
            text-align: center;
        }

        button {
            border: none;
            padding: 3px 7px;
            background-color: #9C0189;
            font-size: 20px;
            color: #fff;
            float: right;
            height: 40px;
            width: 120px;
        }

        button:hover {
            cursor: pointer;
        }

    }

    @media (max-width: 768px) {
        .block {
            flex-wrap: wrap;
            p {
                font-size: 25px;
                width: 100%;
                margin-bottom: 15px;
            }
        }
    }
`

const ContactIncentive = ({scrollToContactFnk}) => {

    return ( 
        <>
        <div className="block">
            <p>Nagrajmy piękne chwile z twojego życia</p>
            <button  onClick={scrollToContactFnk.bind(this, "contact")}>Kontakt</button>
        </div>
        </>
    );
}

const OfferIncentive = (
    <>
        <div className="block">
            <p>Sprawdź moją ofertę i cennik</p>
            <button>Sprawdź</button>
        </div>
    </>
)

const Incentive = ({type}) => {

    const scrollContact = (nameContainer) => { 
        setTimeout( function(){
            scroller.scrollTo(nameContainer, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: nameContainer === "start-position" ? 0 : -70,
              });
        }, 300 ) 
     }
    const whatReturn = type === "contact" ? <ContactIncentive scrollToContactFnk={scrollContact}/> : OfferIncentive;

    return ( 
        <MainContainer typeBackground={type}>
            {whatReturn}
        </MainContainer>
     );
}
 
export default Incentive;