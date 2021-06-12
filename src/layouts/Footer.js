import React from 'react';
import styled from 'styled-components';

import { FaFacebookF, FaInstagram, FaYoutube  } from 'react-icons/fa';

const MainContainer = styled.div`
    width: 100%;
    background-color: #1F1F1F;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;

    .social-footer {
        width: 100%;
        text-align: center;

        i {
            font-size: 40px;
            margin: 0 20px;
        }
    }

    p {
        font-size: 25px;
    }
`

const Footer = () => {
    return ( 
        <MainContainer>
            <div className="social-footer">
                <i><FaInstagram /></i>
                <i><FaFacebookF /></i>
                <i><FaYoutube /></i>
            </div>
            <p>NAME SURNAME</p>
        </MainContainer>
     );
}
 
export default Footer;