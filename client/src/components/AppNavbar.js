import React from 'react';
import {
  Navbar,
  NavbarBrand
 } from 'reactstrap';

const AppNavBar = () => {
    return (
      <div>
        <Navbar color='dark' dark>
          <NavbarBrand href='#' className='mr-auto'>Todos</NavbarBrand>
        </Navbar>
      </div>
    );
}
export default AppNavBar;
