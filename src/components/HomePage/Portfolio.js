import React from 'react';

import styled from 'styled-components';

const MainContainer = styled.div`
    max-width: 1400px;
    //border: 1px solid red;
    margin: 0 auto;
    padding: 0 10px 70px 10px;
    overflow: auto;
    color: #181818;

    h3 {
        font-size: 40px;
    }

    .row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .video {
        max-width: 500px;
        width: 100%;
        min-width: 200px;
        height: 300px;
        background-color: silver;
        margin: 20px;
    }

    p {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 768px) {
        .video {
            height: 170px;
            margin: 10px;
        }

        p {
            margin-top: 15px;
        }
    }
`

const Portfolio = () => {
    return ( 
        <MainContainer>
            <h3>Portfolio</h3>
            <div className="main-block">
                <div className="row">
                    <div className="video"></div>
                    <div className="video"></div>
                </div>
                <div className="row">
                    <div className="video"></div>
                    <div className="video"></div>
                </div>
            </div>
            <p>Jeśli chcesz zobaczyć więcej moich filmów odwiedź mój kanał na <strong>YouTube</strong></p>
        </MainContainer>
     );
}
 
export default Portfolio;