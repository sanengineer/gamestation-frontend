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
        let user = this.state.user;
        GetProfile(this.state.token, this.state.id)
        .then(res => {
            console.log(res)
            this.setState({user: res})
        })
        .catch(err => {
            console.log(err);
        })
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
                                <Form.Label >Username</Form.Label>
                                <Form.Control value={this.state.user.username} name="username" placeholder="username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>FullName</Form.Label>
                                <Form.Control value={this.state.user.fullname} name="fullname" placeholder="fullname"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.user.email} name="email" placeholder="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.user.address} name="bio" placeholder="bio"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sex</Form.Label>
                                <Form.Control as="select" value={this.state.user.gender} name="gender" >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Job</Form.Label>
                                <Form.Control value={this.state.user.job} name="job" placeholder="job"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={this.state.user.address} name="address" placeholder="address"/>
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