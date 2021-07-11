import React from 'react';

import styled from 'styled-components';

const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat fringilla molestie. Nunc ornare ex nec odio tincidunt, sit amet fringilla mi commodo. Cras sit amet arcu fermentum, venenatis arcu id, scelerisque libero. Nam vel consequat purus. Proin egestas sit amet risus sed egestas. Nunc sed odio ut mi consequat rutrum ac at velit. Proin nec elit lectus. In at efficitur dui. Proin egestas sit amet risus sed egestas. Nunc sed odio ut mi consequat rutrum ac at velit. Proin nec elit lectus. In at efficitur dui. ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat fringilla molestie. Nunc ornare ex nec odio tincidunt, sit amet fringilla mi commodo. Cras sit amet arcu fermentum, venenatis arcu id, scelerisque libero. Nam vel consequat purus. Proin egestas sit amet risus sed egestas. Nunc sed odio ut mi consequat rutrum ac at velit. Proin nec elit lectus. In at efficitur dui. Proin egestas sit amet risus sed egestas. Nunc sed odio ut mi consequat rutrum ac at velit. Proin nec elit lectus. In at efficitur dui. ',
]

const MainContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    //border: 1px solid red;
    margin: 0 auto;
    padding: 70px 10px 70px 10px;
    overflow: auto;
    color: #181818;

    h4 {
            font-size: 40px;
            margin: 20px 0;
        }

    .block-basic {
        width: 100%;
        //border: 2px solid green;
        padding: 5px 0;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;

        .description {
            width: 65%;
            //border: 1px solid red;
            padding: 0 50px 0 0;

            h5 {
                font-size: 28px;
                font-weight: 300;
            }
        }

        .description-other {
            width: 100%;

            h5 {
                font-size: 28px;
                font-weight: 300;
            }
        }

        .prices {
            width: 35%;
            font-size: 18px;
            //border: 1px solid #707070;
            //display: flex;
            //flex-wrap: wrap;

            .row {
                display: flex;
                border-bottom: 2px solid #707070;
                width: 100%;
                padding: 10px 20px;

                .column-1 {
                    flex: 5; 
                }

                .column-2 {
                    flex: 3;
                    text-align: right;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .block-basic {
            flex-direction: column;

            .description {
                width: 100%;
                padding: 0;
            }

            .prices {
                width: 90%;
                margin: 25px auto;
            }
        }

    }

`;


const pricesWedding = (
    <>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>        
    </>
)

const pricesClassicParty = (
    <>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>
        <div className="row">
            <div className="column-1">Film 3-5 min</div>
            <div className="column-2">500-900 zł</div>
        </div>        
    </>
)


const Offers = () => {
    return ( 
        <MainContainer>
            <h4>Oferty i cennik</h4>
            <div className="block-basic">
                <div className="description">
                    <h5>Ślub/wesele</h5>
                    <p>{descriptions[0]}</p>
                </div>
                <div className="prices">
                    {pricesWedding}
                </div>
            </div>
            <div className="block-basic">
                <div className="description">
                    <h5>Klasyczna impreza okolicznościowa</h5>
                    <p>{descriptions[0]}</p>
                </div>
                <div className="prices">
                    {pricesClassicParty}
                </div>
            </div>
            <div className="block-basic">
                <div className="description-other">
                    <h5>Nagrajmy coś innego</h5>
                    <p>{descriptions[0]}</p>
                </div>
            </div>
        </MainContainer>
     );
}
 
export default Offers;