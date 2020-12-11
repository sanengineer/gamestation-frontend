import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
//import Avatar from "../assets/a"
import { Button, NavDropdown, Form, FormControl } from 'react-bootstrap';


export const NavLoggedIn = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto order-1">
            
            <li className="nav-item active">
              <a className="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Requirement</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Review</a>
            </li>
            
          </ul> 
            //<ul className="navbar-nav d-none d-lg-flex ml-2 order-3">
            <li className="nav-item dropdown" class="ml-2">
              

              <NavDropdown title="user" id="basic-nav-dropdown"> <div className="image">  </div> 
              <NavDropdown.Item href="#action/3.1">Signing as</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Your Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log Activity</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Play</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </nav>
    )
}

