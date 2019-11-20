import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Input,
  Container} from 'reactstrap';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className='header'>
        <Container>
          <NavbarBrand href="/"><img alt='logo' className='logo' src={logo}/> BlueStacks</NavbarBrand>
          <Input type="select" name="select" id="language">
            <option>English</option>
            <option>German</option>
          </Input>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;