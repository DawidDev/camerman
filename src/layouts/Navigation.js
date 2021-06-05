import Navbar from '../components/navigation/Navbar';

import styled from 'styled-components';

const NavigationBlock = styled.div`
    width: 100%;
    position: fixed;
    z-index: 10;
`

const Navigation = () => {
    return ( 
        <NavigationBlock>
            <Navbar/>
        </NavigationBlock>
     );
}
 
export default Navigation;