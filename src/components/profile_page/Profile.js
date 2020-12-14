import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import { UpdateProfile} from './../../services/profile/Profile';

class Profile extends Component  {
    state = {
        isAuthenticated: this.props.isAuthenticated,
        user: this.props.user,
    }

    componentDidMount() {
        console.log("component did mount on profile page");
        console.log(this.props.user)
    }

    onChange = (e) => {
        let user = this.props.user;
        if(e.target.name === 'username'){
            user.username = e.target.value
        } else if(e.target.name === 'email'){
            user.email = e.target.value
        } else if (e.target.name === 'firstname'){
            user.firstname = e.target.value
        } else if (e.target.name === 'lastname') {
            user.lastname = e.target.value
        } else if(e.target.name === 'birthdate') {
            user.birthdate = e.target.value
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

    handleSubmit = (event) => {
        this.setState({loading: true})
        event.preventDefault();
        console.log(this.props.user)
        UpdateProfile(this.state.token, this.state.id, this.props.user)
        .then(res=> {
            console.log(res);
            this.setState({loading: false})
        })
        .catch(err=>{
            console.log(err);
            this.setState({loading: false})
        })
    }

    render() {
        console.log('props ok', this.props.location)
        console.log('props user ok', this.props.user)

        if(this.props.location !== 'Profile'){
            return null
        }
        return (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label >UserName</Form.Label>
                        <Form.Control value={this.props.user.username} onChange={(e) => this.onChange(e)} name="username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >FirstName</Form.Label>
                        <Form.Control value={this.props.user.firstname} onChange={(e) => this.onChange(e)} name="firstname"  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >LastName</Form.Label>
                        <Form.Control value={this.props.user.lastname} onChange={(e) => this.onChange(e)} name="lastname" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={this.props.user.email} onChange={(e) => this.onChange(e)} name="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>BirthDate</Form.Label>
                        <Form.Control value={this.props.user.birthdate} onChange={(e) => this.onChange(e)} name="birthdate" placeholder="2020-12-12" />
                        {/* <DatePicker selected={this.props.user.birthdate}></DatePicker> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sex</Form.Label>
                        <Form.Control as="select" value={this.props.user.gender} onChange={(e) => this.onChange(e)} name="gender" >
                            <option value="">Choosee</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" col={3} value={this.props.user.address} onChange={(e) => this.onChange(e)} name="address"/>
                    </Form.Group>
                    <Button type="submit">Update</Button>
                </Form>
        )
    }

}

export default Profile;