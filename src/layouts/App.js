import Footer from './Footer';
import Navigation from './Navigation';

import '../style/App.css';
import Content from './Content'

import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

const App = () => {
  return ( 
    <>
     <Router>
       <Navigation />
       <Content/>
     </Router>
    </>
   );
}
 
export default App;