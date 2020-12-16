import React, { Component } from 'react';
import {Container,Navbar, Nav,NavDropdown,Button} from 'react-bootstrap';
import {CornerComponent} from "./CornerComponent";
import UserService from "../services/userService";


class NavHeader extends Component{

    state={
        token:localStorage.getItem('accessToken'),
        id:localStorage.getItem('user_id'),
        me:""
    }
    componentDidMount=()=>{
        if(this.state.token){
            UserService.me(this.state.token).then((result)=>{
                this.setState({me:result.data.data.email})
            }).catch((err)=>{
                console.log(err);
            })
        } else {
            console.log("no token")
            return
        }
    }
    render(){
        let{token,me} = this.state;
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto ml-5">
                <Nav.Link href="/under-construction">About Us</Nav.Link>
                <Nav.Link href="/under-construction">Requirements</Nav.Link>
                <Nav.Link href="/under-construction">Players</Nav.Link>
                <Nav.Link href="/under-construction">Contact</Nav.Link>
                <Nav.Link href="/under-construction">Help</Nav.Link>
              </Nav>
              <Nav>
                  <CornerComponent
                  whoMe={me}
                  token={token}/>
              </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
  
}
export default NavHeader;