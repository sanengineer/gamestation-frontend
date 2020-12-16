import React, { Component } from 'react';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import ChangePassword from './ChangePassword';
import ScoreProfile from './ScoreProfile';
import Profile from './Profile';
import { GetProfile} from './../../services/profile/Profile';
import LoadingMask from 'react-loadingmask';
import {Redirect} from 'react-router-dom';
import 'react-loadingmask/dist/react-loadingmask.css';
import Navbar from "../NavHeader";
import Footer from "../footer/index";

class MainProfile extends Component {

    state = {
        user : {},
        listScore: [],
        token : localStorage.getItem('accessToken'),
        id : localStorage.getItem('user_id'),
        disable: "disabled",
        location: "Profile",
        isAuthenticated: true,
        loading: true
    }

    ceckUser = () => {
        GetProfile(this.state.token, this.state.id)
        .then(res => {
            console.log(res)
            if(!('id' in res)){
                this.setState({ isAuthenticated: false})
            } else {
                this.setState({user: res, isAuthenticated: true, loading: false})
            }
            
        })
        .catch(err => {
            console.log(err);
            this.setState({ isAuthenticated: false })
        })
    }

    componentWillMount() {
        console.log("component will mount");
        this.ceckUser()
    }

    componentDidMount() {
        console.log("component did mount");
        if(('id' in this.state.user)){
            console.log("loading false")
            this.setState({loading: false})
        }
    }

    clickMe = (e) => {
        this.setState({ location: e.target.outerText})
    }

    render() {
        let isAuthenticated = this.state.isAuthenticated;
        if(!isAuthenticated){
            return <Redirect to="/login" />
        }

        return (
            <LoadingMask loading={this.state.loading} text={"loading..."} >
                <Navbar/>
                <Container>
                    <Row className="justify-content-md-center mt-5">
                        <Col md={3}>
                            <Nav defaultActiveKey="#main-profile" variant="pills" className="flex-column">
                                <Nav.Link href="#main-profile" onClick={(e) => this.clickMe(e)}>Profile</Nav.Link>
                                <Nav.Link href="#change-password" eventKey="click1" onClick={(e) => this.clickMe(e)}>Change Password</Nav.Link>
                                <Nav.Link href="#history" eventKey="click2" onClick={(e) => this.clickMe(e)}>History</Nav.Link>
                            </Nav>
                        </Col>
                        <Col md={8}>
                            <h3>{this.state.location} *</h3>
                            <hr></hr>
                            <ChangePassword
                                location={this.state.location}
                            />
                            <ScoreProfile
                                location={this.state.location}
                            />
                            <Profile 
                                user={this.state.user}
                                isAuthenticated={this.state.isAuthenticated}
                                location={this.state.location}
                            />
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </LoadingMask>
        )
    }
}

export default MainProfile;