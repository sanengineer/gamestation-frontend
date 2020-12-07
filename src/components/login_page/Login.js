import React, { Component } from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {SignIn} from './../../services/login/Login';

class Login extends Component {
    state = {
        user: {},
        validated : false,
        classHref: "d-none",
        message : "",
        show: false,
        accessToken: ""
    }

    showAlert = (status, type, message) => {
        if(type === "success"){
            this.setState({classHref: ""})
        } else {
            this.setState({classHref: "d-none"})
        }
        this.setState({ show : status, typeAlert: type, message: message})
    }

    signin = () => {
        console.log(this.state.user)
        SignIn(this.state.user)
        .then(res=>{
            if(res.status === "success"){
                console.log(res);
                localStorage.setItem('accessToken', res.accessToken);
                // history.push('/')
                this.setState({ accessToken: localStorage.getItem('accessToken')})
            } else if( res.status === "failed") {
                console.log(res);
                this.showAlert(true, "danger", res.message)
            }
        })
        .catch(err => {
            this.showAlert(true, "danger", "404 Page Not Found")
        })
    }

    onChangeForm = (e) => {
        let user = this.state.user;
        if(e.target.name === 'email'){
            user.email = e.target.value
        } else if (e.target.name === 'password'){
            user.password = e.target.value
        }
        console.log(user)
        this.setState({user})
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.signin();
        }
        
        this.setState({ validated: true })
        event.preventDefault();
    }

    render() {
        const { accessToken } = this.state
        if (accessToken !== "") return <Redirect to="/" />
        return (
            <div className="container mt-5">

                <Alert show={this.state.show} onClose={() => this.showAlert(false) } variant={this.state.typeAlert} dismissible>
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>{this.state.message}</p>
                </Alert>

                <h3 className="h3 text-center">Login</h3>
                <div className="box-login m-auto border rounded">
                    <Form className="mx-5 my-4" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={(e) => this.onChangeForm(e)} placeholder="Enter email" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={(e) => this.onChangeForm(e)} placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <p className="mt-2 text-center">
                    Don't Have An Account? Let's <Link to="/register" >Create Account</Link>
                </p>
            </div>
        )
    }
}

export default Login;