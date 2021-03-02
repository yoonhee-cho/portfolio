import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {


  return (
    <Navbar className="shadow-sm border-bottom" bg="transparent" expand="lg">

        <Link to='/'>
            <Navbar.Brand className="m-3 p-3 logo-box">
            YOON HEE CHO
            </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

        <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto justify-content-center">

                <Link className="nav-link m-3 p-3" to="/">
                    <div className="nav-link-text"> WORK</div>
                
                </Link>

                <Link className="nav-link m-3 p-3" to="/about">
                    <div className="nav-link-text">ABOUT</div>   
                </Link>

                
            
            </Nav>
        </Navbar.Collapse>

    </Navbar>
  )
}

export default NavBar

