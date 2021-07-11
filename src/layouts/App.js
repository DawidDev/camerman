import Footer from './Footer';
import Navigation from './Navigation';

import styled from 'styled-components';

import '../style/App.css';
import Content from './Content'

import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect, useState } from 'react';

const App = () => {
  return ( 
    <>
     <Router basename={process.env.PUBLIC_URL}>
       <Navigation />
       <Content/>
     </Router>
     <Footer />
    </>
   );
}
 
export default App;