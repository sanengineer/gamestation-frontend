import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

export const NavHeader = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="nav-link" to="/game">Game</NavLink>
                    <NavLink className="nav-link" to="/user">User</NavLink>
                    <NavLink className="nav-link" to="/history">History</NavLink>
                </Nav>
                <Nav>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                
            </Nav>
        </Navbar>
    )
}

export default NavHeader;