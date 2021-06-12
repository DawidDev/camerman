import React from "react";

import styled from 'styled-components';

import '../../style/App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const MainContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px 20px 10px;

    h3 {
        font-size: 40px;
        margin-bottom: 10px;
    }
`

const ReferenceContainer = styled.div`
    margin: 20px 20px;
    padding: 0 10px 5px 10px;
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.66);
    padding: 20px 25px;

    h6 {
        font-size: 20px;
        margin-bottom: 10px;
    }
`

const opinions = [
    {
        id: 1,
        names: 'Anna i Łukasz',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 2,
        names: 'Anna i Tomasz',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 3,
        names: 'Gabriela i Patryk',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 4,
        names: 'Iwona i Radosław',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 5,
        names: 'Anita i Miłosz',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 6,
        names: 'Justyna i Dawid',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 7,
        names: 'Oliwia i Maciej',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    {
        id: 8,
        names: 'Anna i Łukasz',
        txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum ullamcorper accumsan. Proin eget mattis sem. Nam id sem vel nisl lacinia dignissim vitae eget enim. In tincidunt, sem sit amet porta aliquam, nibh enim fermentum ligula, blandit euismod justo nisi eget mi.'
    },
    
]

const Reference = () => {

    const referencesSlides = opinions.map(item => {
        return(
            <SwiperSlide key={item.id}>
                <ReferenceContainer>
                    <h6>{item.names}</h6>
                    <p>{item.txt}</p>
                </ReferenceContainer>
            </SwiperSlide>
        )
    })

    return ( 
        <MainContainer>
        <h3>Referencje</h3>
        <Swiper 
            breakpoints={{
                250: {
                    slidesPerView: 1
                },
                480: {
                    slidesPerView: 1
                },
                780: {
                    slidesPerView: 2
                },
                1000: {
                    slidesPerView: 3
                },

            }} 
            pagination={{ clickable: true }} 
            scrollbar={{ draggable: true }}
            navigation={true} 
            mousewheel={true} 
            keyboard={true} 
            slidesPerView={2}
            className="mySwiper">
                {referencesSlides}
        </Swiper>
        </MainContainer>
     );
}
 
export default Reference;