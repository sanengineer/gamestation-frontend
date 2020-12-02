import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h3 className="h3 text-center">Login</h3>
                <div className="box-login m-auto border rounded">
                    <Form className="mx-5 my-4">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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