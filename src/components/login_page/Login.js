import React, { Component } from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {SignIn} from './../../services/login/Login';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

class Login extends Component {
    state = {
        user: {},
        validated : false,
        classHref: "d-none",
        message : "",
        show: false,
        accessToken: localStorage.getItem('accessToken'),
        isAuthenticated: true,
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

    signin = () => {
        console.log(this.state.user)
        SignIn(this.state.user)
        .then(res=>{
            if(res.status === "success"){
                console.log(res);
                localStorage.setItem('accessToken', res.accessToken);
                localStorage.setItem('user_id', res.id);
                this.setState({ accessToken: localStorage.getItem('accessToken'), isAuthenticated: false,  loading: false})
                window.location.reload();
            } else if( res.status === "failed" || res.status === false) {
                console.log(res);
                this.showAlert(true, "danger", res.message)
                this.setState({ isAuthenticated: true,  loading: false})
            }
        })
        .catch(err => {
            this.showAlert(true, "danger", "404 Page Not Found")
            this.setState({ isAuthenticated: true, loading: false})
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
        this.setState({loading: true})
        console.log("handle")
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.signin();
        }
        
        this.setState({ validated: true})
        event.preventDefault();
    }
   

    render() {
        const { accessToken, isAuthenticated, loading } = this.state
        // console.log(isAuthenticated)
        console.log(loading)
        // if (accessToken !== "") return <Redirect to="/" />
        // let isAuthenticated = this.state.isAuthenticated;
        if(isAuthenticated === false || accessToken !== null){
            return <Redirect to="/" />
        }
        return (
            <LoadingMask loading={this.state.loading} loadingText={"loading..."}>
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
            </LoadingMask>
        )
    }
}

export default Login;