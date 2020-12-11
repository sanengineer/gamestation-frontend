import React, { Component } from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { RegUser } from './../../services/register/Register';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

class Register extends Component {

    state = {
        user : {},
        validated : false,
        classValid : "d-none",
        classHref: "d-none",
        message : "",
        validForm : "",
        typeAlert: "",
        show : false,
        isAuthenticated: true,
        accessToken: localStorage.getItem('accessToken'),
        loading: false
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
        RegUser(this.state.user)
        .then(res => {
            if(res.message === "register success") {
                console.log(res)
                this.showAlert(true, "success", res.message)
                this.setState({ isAuthenticated: false, loading: false})
            } else {
                this.showAlert(true, "danger", res.message)
                this.setState({ isAuthenticated: true, loading: false})
            }
            
        })
        .catch(err => {
            this.showAlert(true, "danger", "404 Page Not Found")
            this.setState({ isAuthenticated: true, loading: false})
        })
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
        if(e.target.name === 'username'){
            user.username = e.target.value
        } else if (e.target.name === 'email'){
            user.email = e.target.value
        } else if (e.target.name === 'password'){
            user.password = e.target.value
        } else if (e.target.name === 'confirmPassword'){
            user.confirmPassword = e.target.value
        }

        if(("confirmPassword" in user)){
            if(user.password !== user.confirmPassword){
                this.invalidPassword()
            } else {
                this.validPassword()
            }
        }
        
        this.setState({user})
    }

    handleSubmit = (event) => {
        this.setState({loading: true})
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
        const { accessToken, isAuthenticated } = this.state
        if(isAuthenticated === false || accessToken !== null){
            return <Redirect to="/login" />
        }
        return (
            <LoadingMask loading={this.state.loading} loadingText={"loading..."}>
            <div className="container mt-5">

                <Alert show={this.state.show} onClose={() => this.showAlert(false) } variant={this.state.typeAlert} dismissible>
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>{this.state.message} <Link className={this.state.classHref} to="/login">Click to Login</Link></p>
                </Alert>
                
                <h3 className="h3 text-center">Register</h3>

                <div className="box-login m-auto border rounded">
                    <Form className="mx-5 my-4" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Username</Form.Label>
                            <Form.Control type="text" onChange={ (e)=>this.onChangeForm(e) } name="username" placeholder="Enter Username"  required />
                            <Form.Control.Feedback type="invalid">Please provide a valid username.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Email address</Form.Label>
                            <Form.Control type="email" onChange={ (e)=>this.onChangeForm(e) } name="email" placeholder="Enter email"  required />
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold">Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="password" placeholder="Password"  required />
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className="font-weight-bold">Confirm Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="confirmPassword" placeholder="Confirm Password" required />
                            <div className={this.state.classValid} type="invalid">{this.state.message}</div>
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </div>
                <p className="mt-2 text-center">
                    Have An Account? Let's <Link to="/login">Login</Link>
                </p>
            </div>
            </LoadingMask>
        )
    }
}

export default Register;