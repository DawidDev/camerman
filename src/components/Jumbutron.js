import React from 'react';
import styled from 'styled-components';

import backgroundImg1 from '../images/jumbutron-1.jpg'
import backgroundImg2 from '../images/jumbutron-2.jpg'

import { FaFacebookF, FaInstagram, FaYoutube  } from 'react-icons/fa';



const ContaineraJumbutron = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 500px;
    max-height: 900px;
    background-image: ${({ typeBackground }) => (typeBackground === "homePage" ? `url(${backgroundImg1})` : `url(${backgroundImg2})`)};
    //background-image: url(${backgroundImg1});
    background-position: center;
    transition-delay: 2s;
`

const MainContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    //border: 1px solid red;
    height: 100%;
    padding-top: 90px;
    color: #fff;
    display: flex;
    align-items: center;

    .social-block {
        width: 10%;
        height: 100%;
        //border: 1px solid yellow;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 30vh 0;
        float: left;

        i {
            width: 100%;
            text-align: center;
            font-size: 35px;  
        }
    }

    .header-block {
        color: #fff;
        //border: 1px solid red;
        height: 100%;
        width: 90%;
        float: left;
        height: auto;
        margin-left: 20px;

        h1 {
            font-size: 70px;
            font-weight: 600;
            text-transform: uppercase;
        }

        h3 {
            font-size: 40px;
            font-weight: 600;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: flex-start;

        .social-block {
            width: auto;
            height: auto;
            padding: 0;
            transform: translateY(-20%);
            margin-left: 20px;

            i {
                width: auto;
                margin-right: 20px;
                font-size: 40px;
            }
        }

        .header-block {
            transform: translateY(40%);

            h1 {
                font-size: 50px;
            }

            h3 {
                font-size: 30px;
            }
        }
    }
`

const Jumbutron = ({type}) => {
    const homePage = (
        <>
            <div className="social-block">
                <i><FaInstagram /></i>
                <i><FaFacebookF /></i>
                <i><FaYoutube /></i>
            </div>
            <div className="header-block">
                <h1>Imię Nazwisko</h1>
                <h3>Kamerzysta</h3>
            </div>
        </>
    )

    const offerPage = (
        <>
        <div className="social-block">
            <i><FaInstagram /></i>
            <i><FaFacebookF /></i>
            <i><FaYoutube /></i>
        </div>
        <div className="header-block">
            <h1>Offer and price</h1>
        </div>
    </>
    )

    return ( 
        <ContaineraJumbutron typeBackground={type} name="start-position">
            <MainContainer>
                {type === "homePage" ? homePage : offerPage}
            </MainContainer>
        </ContaineraJumbutron>
     );
}
 
export default Jumbutron;