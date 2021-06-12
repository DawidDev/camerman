import Footer from './Footer';
import Navigation from './Navigation';

import styled from 'styled-components';

import '../style/App.css';
import Content from './Content'

import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return ( 
    <>
     <Router>
       <Navigation />
       <Content/>
     </Router>
     <Footer />
    </>
   );
}
 
export default App;