import React from 'react';

import styled from 'styled-components';

import Benefits from '../Benefits'

const MainContainer = styled.div`
    width: 100%;
    margin-bottom: 70px;
    padding: 0 10px;

    .block, .block-2 {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;

        h3 {
            font-size: 40px;
            margin-bottom: 20px;
        }
    }

    .block-2 {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }


`

const HowWorking = () => {
    return ( 
        <MainContainer>
            <div className="block">
                <h3>Jak pracuje</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ullamcorper nibh. Cras posuere dignissim lorem, a lacinia quam viverra non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet tincidunt nibh, in euismod elit. Aliquam quis lacus fermentum, dictum massa et, pharetra lacus. </p>
            </div>
            <div className="block-2">
                <Benefits />
            </div>
        </MainContainer>
     );
}
 
export default HowWorking;