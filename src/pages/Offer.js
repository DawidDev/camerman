import React from 'react';

import Jumbutron from '../components/Jumbutron'
import Offers from '../components/OfferPage/offers'

const Offer = ({type}) => {
    return ( 
        <>
            <Jumbutron type="offerPage" />
            <Offers />
        </>
     );
}
 
export default Offer;