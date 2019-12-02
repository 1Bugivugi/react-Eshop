import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';
import '../css/NavBar.css'
import styled from 'styled-components'; /* explore */

/**
 * Navbar
 */
class NavBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='mx-3'><Link to='/'><img src={logo} alt='store' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=''>
          <Nav className="mr-auto">
          <Nav.Link href="/">Products</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
          <Link to="/cart" className='mx-3'>
            <Button variant='outline-info'><FontAwesomeIcon icon='shopping-cart' /> Cart</Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

/* Styled components (can be exported from a seperate file) */
// Styled components allow us to store all this in a seperate file and reuse it throughout the project(this one or multiple projects)

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.1rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out; /* all - for all properties*/
  &:hover{ /* & - is for targeting styled component */
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
