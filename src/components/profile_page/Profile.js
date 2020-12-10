import React, { Component } from 'react';
import { Form, Row, Col, Container, Image, Button, Table } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { GetProfile, UpdateProfile} from './../../services/profile/Profile';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

class Profile extends Component  {
    state = {
        isAuthenticated: true,
        token : localStorage.getItem('accessToken'),
        id : localStorage.getItem('user_id'),
        user: {},
        loading: true
    }

    ceckUser = () => {
        GetProfile(this.state.token, this.state.id)
        .then(res => {
            console.log(res)
            if(res.success === false){
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

    componentDidMount() {
        console.log("component did mount");
        this.ceckUser()
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    onChange = (e) => {
        let user = this.state.user;
        if(e.target.name === 'username'){
            user.username = e.target.value
        } else if(e.target.name === 'email'){
            user.email = e.target.email
        } else if (e.target.name === 'firstname'){
            user.firstname = e.target.value
        } else if (e.target.name === 'lastname') {
            user.lastname = e.target.value
        } else if(e.target.name === 'birthdate') {
            user.birthdate = e.target.value
        } else if(e.target.name === 'gender') {
            user.gender = e.target.value
        } else if (e.target.name === 'address') {
            user.address = e.target.value
        } else if (e.target.name === 'avatar') {
            user.avatar = e.target.value
        } else if(e.target.name === 'newPassword') {
            user.newPassword = e.target.value
        }
        this.setState(user)
        console.log(user)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.user)
        UpdateProfile(this.state.token, this.state.id, this.state.user)
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
    }

    render() {
        // if( this.state.token === "" || this.state.token === null ) {
        //     return <Redirect to="/login" />
        // }
        let isAuthenticated = this.state.isAuthenticated;
        if(!isAuthenticated){
            return <Redirect to="/login" />
        }
        return (
            <LoadingMask loading={this.state.loading} loadingText={"loading..."}>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={3}>
                        <Table hover>
                            <tbody>
                                <tr>
                                    <td>Profile</td>
                                </tr>
                                <tr>
                                    <td><Link className="text-dark" to="/change-password">Change Password</Link></td>
                                </tr>
                                <tr>
                                    <td>Log Activity</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    
                    <Col md={6}>
                        <h3>Public Profile</h3>
                        <hr></hr>
                        
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label >UserName</Form.Label>
                                <Form.Control value={this.state.user.username} onChange={(e) => this.onChange(e)} name="username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >FirstName</Form.Label>
                                <Form.Control value={this.state.user.firstname} onChange={(e) => this.onChange(e)} name="firstname"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >LastName</Form.Label>
                                <Form.Control value={this.state.user.lastname} onChange={(e) => this.onChange(e)} name="lastname" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.user.email} onChange={(e) => this.onChange(e)} name="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>BirthDate</Form.Label>
                                <Form.Control value={this.state.user.birthdate} onChange={(e) => this.onChange(e)} name="birthdate" placeholder="2020-12-12" />
                                {/* <DatePicker selected={this.state.user.birthdate}></DatePicker> */}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sex</Form.Label>
                                <Form.Control as="select" value={this.state.user.gender} onChange={(e) => this.onChange(e)} name="gender" >
                                    <option value="">Choosee</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" col={3} value={this.state.user.address} onChange={(e) => this.onChange(e)} name="address"/>
                            </Form.Group>
                            <Button type="submit">Update</Button>
                        </Form>
                    </Col>
                    <Col md={2}>
                        <Image src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" width="171px" height="180px" roundedCircle />
                    </Col>
                </Row>
            </Container>
            </LoadingMask>
        )
    }

}

export default Profile;