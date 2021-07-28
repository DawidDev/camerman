import React from 'react';

import Jumbutron from '../components/Jumbutron'
import Offers from '../components/OfferPage/offers'
import Valuation from '../components/OfferPage/Valuation';

const Offer = () => {
    return ( 
        <div name="offer-price">
            <Jumbutron type="offerPage"/>
            <Offers />
            <Valuation />
        </div>
     );
}
 
export default Offer;