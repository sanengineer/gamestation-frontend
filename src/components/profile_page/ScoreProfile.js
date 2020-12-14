import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ScoreProfile extends Component {

    state = {
        user : {},
        listScore: [],
        token : localStorage.getItem('accessToken'),
        id : localStorage.getItem('user_id'),
    }

    render() {
        if(this.props.location !== 'History'){
            console.log('props ok', this.props.location)
            return null
        }
        return (
            
            <Table striped bordered hover className="text-center" >
                <thead>
                    <tr>
                        <th>Nama Game</th>
                        <th>Play History</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>RPS</th>
                        <td>Has Played on October 2020</td>
                        <td><h4>21</h4></td>
                    </tr>
                    <tr>
                        <th>ULAR</th>
                        <td>Has Played on October 2020</td>
                        <td><h4>54</h4></td>
                    </tr>
                    <tr>
                        <th>AMONG</th>
                        <td>Larry the Bird</td>
                        <td><h4>91</h4></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ScoreProfile;