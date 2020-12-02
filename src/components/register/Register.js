import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h3 className="h3 text-center">Register</h3>
                <div className="box-login m-auto border rounded">
                    <Form className="mx-5 my-4">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Username</Form.Label>
                            <Form.Control type="email" name="username" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font-weight-bold">Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold">Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font-weight-bold">Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirm_password" placeholder="Confirm Password" />
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