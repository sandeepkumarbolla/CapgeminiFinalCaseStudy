import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h2 style={{paddingRight:'120px'}}>Indian Railways</h2>
          {/* <img src='./logo.png' alt='logo' /> */}
        </NavLink>
        <Bars/>
        <NavMenu > 
          <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>
          <NavLink to='/booking' activeStyle>
            Book tickets
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            pnr status
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign in
          </NavLink>
           
          {/* Second Nav
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up' activeStyle>
              Register
           </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;