import React, { Component } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { ChangePasswd } from "./../../services/profile/Profile";

class ChangePassword extends Component {
  state = {
    user: {},
    validated: false,
    classValid: "d-none",
    classHref: "d-none",
    message: "",
    validForm: "",
    typeAlert: "",
    show: false,
    token: localStorage.getItem("accessToken"),
    id: localStorage.getItem("user_id"),
  };

  showAlert = (status, type, message) => {
    if (type === "success") {
      this.setState({ classHref: "" });
    } else {
      this.setState({ classHref: "d-none" });
    }
    this.setState({ show: status, typeAlert: type, message: message });
  };

  reg = () => {
    console.log(this.state.user);
    ChangePasswd(this.state.token, this.state.id, this.state.user)
      .then((res) => {
        console.log(res);
        if (res.message === "Change password was updated successfully") {
          this.showAlert(true, "success", res.message);
        } else {
          this.showAlert(true, "danger", res.message);
        }
      })
      .catch((err) => {
        this.showAlert(true, "danger", "404 Page Not Found");
      });
  };

  invalidPassword = () => {
    this.setState({
      classValid: "invalid-feedback d-block",
      message: "Passwords don't match.",
      validForm: "is-invalid",
    });
  };

  validPassword = () => {
    this.setState({
      classValid: "valid-feedback d-block",
      message: "Passwords is match.",
      validForm: "is-valid",
    });
  };

  onChangeForm = (e) => {
    let user = this.state.user;
    if (e.target.name === "newPassword") {
      user.password = e.target.value;
    } else if (e.target.name === "confirmNewPassword") {
      user.confirm_password = e.target.value;
    }
    if ("confirm_password" in user) {
      if (user.password !== user.confirm_password) {
        this.invalidPassword();
      } else {
        this.validPassword();
      }
    }
    console.log(user);
    this.setState({ user });
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.reg();
    }

    this.setState({ validated: true });
    event.preventDefault();
  };

  render() {
    if (this.props.location !== "Change Password") {
      console.log("props ok", this.props.location);
      return null;
    }
    return (
      <div>
        <Alert
          show={this.state.show}
          onClose={() => this.showAlert(false)}
          variant={this.state.typeAlert}
          dismissible
        >
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>{this.state.message}</p>
        </Alert>
        <Form
          className=""
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="validationCustom02">
            <Form.Label className="font-weight-bold">New Password</Form.Label>
            <Form.Control
              className={this.state.validForm}
              type="password"
              onChange={(e) => this.onChangeForm(e)}
              name="newPassword"
              placeholder="New Password"
              required
            />
            <div className={this.state.classValid} type="invalid">
              {this.state.message}
            </div>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label className="font-weight-bold">
              Confirm New Password
            </Form.Label>
            <Form.Control
              className={this.state.validForm}
              type="password"
              onChange={(e) => this.onChangeForm(e)}
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              required
            />
            <div className={this.state.classValid} type="invalid">
              {this.state.message}
            </div>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ChangePassword;
