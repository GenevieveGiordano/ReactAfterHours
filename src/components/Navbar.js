
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Row,
  Col,
} from 'reactstrap';
import SearchBar from './SearchBar';

import { NavLink } from 'react-router-dom';

function SiteNavbar() {
    return (
        <div className='sticky-top container-fluid'>
            <Row>
            <Navbar className='bg-dark'>
            
                <Col className='col-3'>
                    <NavbarBrand></NavbarBrand>
                </Col>
                    
                <Col className='col-5'>    
                    <Nav className='justify-content-center'>
                        <NavItem className=''>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </NavItem>

                        <NavItem className='active'>
                            <NavLink className='nav-link' to='Shop'>Shop</NavLink>
                        </NavItem>

                        <NavItem className=''>
                            <NavLink className='nav-link' to='AboutMe'>About Me</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                
                <Col className='col-3'>
                    <SearchBar/>
                    
                </Col>
                
            </Navbar>
            </Row>
        </div>
       
    );
}

export default SiteNavbar;