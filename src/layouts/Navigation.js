import Navbar from '../components/navigation/Navbar';

import styled from 'styled-components';

const NavigationBlock = styled.div`
    width: 100%;
`

const Navigation = () => {
    return ( 
        <NavigationBlock>
            <Navbar/>
        </NavigationBlock>
     );
}
 
export default Navigation;