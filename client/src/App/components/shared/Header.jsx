import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'
import './shared.scss'

const Header = () => {
  return (
    <Navbar fixed='top'  bg='dark' expand='lg'>
      <NavLink to='/'>Statistic</NavLink>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/reset-password'>Reset password</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
