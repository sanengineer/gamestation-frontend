import React from "react";
import {NavDropdown,Button,Nav} from "react-bootstrap";
import "./navHeader.css"

export const CornerComponent=({token,whoMe})=>{
    const logOut=()=>{
        localStorage.removeItem('accessToken');
        window.location.reload();
    }   
   console.log("on corner "+ whoMe)
    if(token){
        return(
            <NavDropdown className="" title={
                 <img className="img-avatar avatar rounded-circle" 
                 src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" 
                 alt="user pic"/>} 
                 id="collasible-nav-dropdown">
                        <NavDropdown.Item ><strong>SignIn as :</strong><br/>{whoMe}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/main-profile">Your Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/gamePlay"><Button className="btn-block" variant="secondary">Play</Button></NavDropdown.Item>
                        <NavDropdown.Item ><Button className="btn-block" variant="warning" onClick={()=>logOut()}>Log Out</Button></NavDropdown.Item>
            </NavDropdown>
        )
    } else {
        return(
            <div>
                <Nav>
                 <Nav.Link href="/login">Login</Nav.Link>
                 <Nav.Link href="/register">SignUp</Nav.Link>
              </Nav>
            </div>
        )
    }
}