import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

import brand from '../assets/thumbs_up.png'

type TopNavProps = {}

const TopNav: React.FC = ({ }: TopNavProps) => (
  <>
    <Navbar className='static-top' bg='light' variant='light'>
      <Navbar.Brand>
        <Image src={brand} height='50px' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link disabled href='/'>Home</Nav.Link>
          <Nav.Link disabled href='/about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default TopNav;