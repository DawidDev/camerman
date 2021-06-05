import React from 'react';

import styled from 'styled-components';

const Benefit = styled.div`
    width: 20%;
    min-width: 200px;
    height: auto;
    margin-top: 25px;
    padding: 0 10px 5px 10px;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.66);
    transition: 0.25s;

    h5 {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        padding: 10px;
    }

    p {
        font-size: 14px;
    }

    :hover {
        box-shadow: 0px 0px 11px 0px  #9C0189;
    }

    @media (max-width: 768px) {
        width: 80%;

        h5 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
            margin: 0 20px 20px 20px;
        }
    }

`

const tab = [
    {
    title: "Ujęcia z drona",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."
    },
    {
    title: "Video 4k",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."
    },
    {
    title: "Montaż filmu",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."
    },
    {
    title: "Nowoczesność",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a bibendum est. Sed eget augue eget metus egestas efficitur sit amet nec velit."
    },    
]

const Benefits = () => {  
    const readyData = tab.map(item => {
        return(
            <Benefit key={item.title}>
                <h5>{item.title}</h5>
                <p>{item.txt}</p>
            </Benefit>
        )
    })

    return ( 
        <>
            {readyData}
        </>
     );
}
 
export default Benefits;