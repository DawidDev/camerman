import React, {useState} from 'react';

import styled from 'styled-components';

import MeImg1 from '../../images/me-1.jpg'
import MeImg2 from '../../images/me-2.jpg'

const MainContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    //border: 1px solid red;
    margin: 0 auto;
    padding: 70px 10px 70px 10px;
    overflow: auto;
    color: #181818;

    .block-1 {
        width: 60%;
        float: left;

        h4 {
            font-size: 40px;
            margin: 20px 0;
        }

        img {
            width: 95%;
            max-height: 370px;
            object-fit: cover;
        }

        .column-txt {
            column-count: 2;
            column-width: 250px;
            column-gap: 30px;
        }

        button {
            border: none;
            padding: 3px 7px;
            background-color: #9C0189;
            font-size: 17px;
            color: #fff;
            float: right;
            display: none;
        }
    }

    .block-2 {
        width: 40%;
        float: left;
        padding: 0 0 0 10px;

        img {
            width: 100%;
            object-fit: cover;
            float: right;
            max-height: 650px;
        }
    }

    @media (max-width: 768px) {
        
        .block-1 {
            width: 100%;

            img {
                width: 100%;
            }

            .column-txt{
                column-count: 1;
            }

            .read-more-target {
                opacity: ${({ readMore }) => (readMore === false ? `0` : `1`)};
                max-height: 0;
                font-size: ${({ readMore }) => (readMore === false ? `0` : `15px`)};
                transition: .25s ease;
            }

            button {
                display: inline-block;
            }
        }

        .block-2 {
            display: none;
        }
    }

`
//<img src={MeImg1} alt=""/>
const AboutMe = () => {

    const [ReadMore, setReadMore] = useState(false);
    const titleButton = ReadMore ? "Pokaż mniej" : "Czytaj więcej";

    
    return ( 
        <>
            <MainContainer readMore={ReadMore} name="about-me">
                <div className="block-1"> 
                    <img src={MeImg1} alt=""/>
                    <h4>O mnie</h4>
                    <div className="column-txt">
                        <p className="read-more-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ullamcorper nibh. Cras posuere dignissim lorem, a lacinia quam viverra non.  <span className="read-more-target"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet tincidunt nibh, in euismod elit. Aliquam quis lacus fermentum, dictum massa et, pharetra lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a velit posuere, pharetra dolor viverra, venenatis lectus. Phasellus at bibendum mi. Duis eu felis dictum, luctus magna eget, cursus magna. Nam consectetur faucibus sapien, vitae luctus dui facilisis at.</span> </p>
                        <button onClick={setReadMore.bind(this, !ReadMore)}>{titleButton}</button>
                    </div>
                </div>
                <div className="block-2">
                    <img src={MeImg2} alt=""/>
                </div>
            </MainContainer>
        </>
     );
}
 
export default AboutMe;