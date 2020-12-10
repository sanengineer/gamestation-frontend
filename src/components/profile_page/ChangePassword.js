import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Form, Row, Col, Container, Image, Button, Table } from 'react-bootstrap';

class ChangePassword extends Component {

    state = {
        user : {},
        validated : false,
        classValid : "d-none",
        classHref: "d-none",
        message : "",
        validForm : "",
        typeAlert: "",
        show : false,
    }

    showAlert = (status, type, message) => {
        if(type === "success"){
            this.setState({classHref: ""})
        } else {
            this.setState({classHref: "d-none"})
        }
        this.setState({ show : status, typeAlert: type, message: message})
    }

    reg = () => {
        console.log(this.state.user)
        // RegUser(this.state.user)
        // .then(res => {
        //     if(res.message === "register success") {
        //         console.log(res)
        //         this.showAlert(true, "success", res.message)
        //     } else {
        //         this.showAlert(true, "danger", res.message)
        //     }
            
        // })
        // .catch(err => {
        //     this.showAlert(true, "danger", "404 Page Not Found")
        // })
    }

    invalidPassword = () => {
        this.setState({
            classValid: "invalid-feedback d-block", 
            message: "Passwords don't match.",
            validForm: "is-invalid"
        })
    }

    validPassword = () => {
        this.setState({
            classValid: "valid-feedback d-block",  
            message: "Passwords is match.",
            validForm: "is-valid"
        })
    }

    onChangeForm = (e) => {
        let user = this.state.user;
        if (e.target.name === 'password'){
            user.password = e.target.value
        } else if (e.target.name === 'newPassword'){
            user.newPassword = e.target.value
        } else if (e.target.name === 'confirmNewPassword'){
            user.confirmNewPassword = e.target.value
        }
        if(("confirmNewPassword" in user)){
            if(user.newPassword !== user.confirmNewPassword){
                this.invalidPassword()
            } else {
                this.validPassword()
            }
        }
        console.log(user);
        this.setState({user})
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.reg();
        }
        
        this.setState({ validated: true })
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md={3}>
                        <Table hover>
                            <tbody>
                                <tr>
                                    <td><Link className="text-dark" to="/profile">Profile</Link></td>
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
                        <h3>Change Password</h3>
                        <hr></hr>
                        <Form className="" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold">Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="password" placeholder="Password"  required />
                        </Form.Group>

                        <Form.Group controlId="validationCustom02">
                            <Form.Label className="font-weight-bold">New Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="newPassword" placeholder="New Password" required />
                            <div className={this.state.classValid} type="invalid">{this.state.message}</div>
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className="font-weight-bold">Confirm New Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="confirmNewPassword" placeholder="Confirm New Password" required />
                            <div className={this.state.classValid} type="invalid">{this.state.message}</div>
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ChangePassword;