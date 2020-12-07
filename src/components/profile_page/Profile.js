import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {GetProfile} from './../../services/profile/Profile';

class Profile extends Component {
    state = {
        isAuthenticated: false,
        user : {}
    }
    async UNSAFE_componentWillMount(){
        const token = localStorage.getItem('accessToken');
        const id = localStorage.getItem('user_id')

        await GetProfile(token, id)
        .then( res => {
            console.log(res);
            this.setState({ isAuthenticated: true});
        })
        .catch(err => {
            console.log(err);
        })

        console.log("compoennt will mount" + token + id)
    }
    // componentWillMount() {
    //     // this.checkUser();
    //     const token = localStorage.getItem('accessToken');
    //     const id = localStorage.getItem('user_id')
    //     GetProfile(token, id)
    //     .then( res => {
    //         console.log(res);
    //         this.setState({ isAuthenticated: true});
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {
        const { isAuthenticated } = this.state
        console.log("render " + isAuthenticated);
        // if(isAuthenticated === false) return <Redirect to="/login" />
        return (
            <div><h1>Hello profile Page</h1></div>
        )
    }

}

export default Profile;