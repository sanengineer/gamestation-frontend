import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

import { Button, NavDropdown, Form, FormControl } from 'react-bootstrap';


export const NavHeader = () => {
    return(
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#About Us">About Us</Nav.Link>
                <Nav.Link href="#Requirement">#Requirement</Nav.Link>
                <Nav.Link href="#Contact">#Contact</Nav.Link>
                <Nav.Link href="#Help">#Help</Nav.Link>
                <Nav.Link href="#Reviews">#Reviews</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-sm-2">
                    <NavDropdown.Item href="#action/3.1">Signing as</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Your Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Log Activity</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
                </Navbar>
    )
}

export default NavHeader;