import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RegUser } from './../../services/register/Register';

class Register extends Component {

    state = {
        user : {},
        validated : false,
        classValid : "d-none",
        message : "",
        validForm : ""
    }

    reg = () => {
        RegUser(this.user)
        .then(res => {
            console.log(res)
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
            user.name = e.target.value
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
                console.log("tidak sama")
            } else {
                this.validPassword()
                console.log("sama")
            }
        }
        
        this.setState({user})
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        console.log("tes");
        console.log(this.state.validated);

        this.setState({ validated: true })
    }

    render() {
        return (
            <div className="container mt-5">
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
                            {/* <div className={this.state.classValid} type="invalid">{this.state.message}</div> */}
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group controlId="validationCustom02">
                            <Form.Label className="font-weight-bold">Confirm Password</Form.Label>
                            <Form.Control className={this.state.validForm} type="password" onChange={ (e)=>this.onChangeForm(e) } name="confirmPassword" placeholder="Confirm Password" required />
                            <div className={this.state.classValid} type="invalid">{this.state.message}</div>
                            <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <p className="mt-2 text-center">
                    Have An Account? Let's <Link to="/login">Login</Link>
                </p>
            </div>
        )
    }
}

export default Register;