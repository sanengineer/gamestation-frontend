import React, { Component } from 'react';
import { Form, Row, Col, Container, Image, Button, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import {GetProfile} from './../../services/profile/Profile';

class Profile extends Component  {
    state = {
        token : localStorage.getItem('accessToken'),
        id : localStorage.getItem('user_id'),
        user: {}
    }

    ceckUser = () => {
        GetProfile(this.state.token, this.state.id)
        .then(res => {
            console.log(res)
            this.setState({user: res})
        })
        .catch(err => {
            console.log(err);
        })
    }

    onChange = (e) => {
        let user = this.state.user;
        if(e.target.name === 'username'){
            user.username = e.target.value
        } else if(e.target.name === 'email'){
            user.email = e.target.email
        } else if (e.target.name === 'firstname'){
            user.firstname = e.target.firstname
        } else if (e.target.name === 'lastname') {
            user.lastname = e.target.value
        } else if(e.target.name === 'birthday') {
            user.birthday = e.target.value
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

    componentDidMount() {
        this.ceckUser()
    }

    render() {
        if( this.state.token === "" || this.state.token === null ) {
            return <Redirect to="/login" />
        }
        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={3}>
                        <Table hover>
                            <tbody>
                                <tr>
                                    <td>Profile</td>
                                </tr>
                                <tr>
                                    <td>History</td>
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
                        <Form >
                            <Form.Group>
                                <Form.Label >UserName</Form.Label>
                                <Form.Control value={this.state.user.username} onChange={(e) => this.onChange(e)} name="username" placeholder="username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >FirstName</Form.Label>
                                <Form.Control value={this.state.user.firstname} onChange={(e) => this.onChange(e)} name="firstname" placeholder="firstname" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >LastName</Form.Label>
                                <Form.Control value={this.state.user.lastname} onChange={(e) => this.onChange(e)} name="lastname" placeholder="lastname" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.user.email} onChange={(e) => this.onChange(e)} name="email" placeholder="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>FullName</Form.Label>
                                <Form.Control value={this.state.user.fullname} onChange={(e) => this.onChange(e)} name="fullname" placeholder="fullname"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>BirthDay</Form.Label>
                                <Form.Control value={this.state.user.birthday} onChange={(e) => this.onChange(e)} name="birthday" placeholder="birthday"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sex</Form.Label>
                                <Form.Control as="select" value={this.state.user.gender} onChange={(e) => this.onChange(e)} name="gender" >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={this.state.user.address} onChange={(e) => this.onChange(e)} name="address" placeholder="address"/>
                            </Form.Group>
                            <Button type="submit">Update</Button>
                        </Form>
                    </Col>
                    <Col md={2}>
                        <Image src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" width="171px" height="180px" roundedCircle />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Profile;