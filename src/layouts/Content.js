import React from 'react';

import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import styled from 'styled-components';

import Home from '../pages/Home'
import Offer from '../pages/Offer'

const Content = () => {
    return ( 
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/offer-and-price" component={Offer}/>
            </Switch>
     );
}
 
export default Content;