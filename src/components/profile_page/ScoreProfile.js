import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { GetScoreSummary } from './../../services/profile/Profile';

class ScoreProfile extends Component {

    state = {
        user : {},
        listScore: [],
        token : localStorage.getItem('accessToken'),
        id : localStorage.getItem('user_id'),
    }

    componentDidMount() {
        console.log("compoennt didi mount on score profile")
        GetScoreSummary(this.state.token, this.state.id)
        .then(res => {
            if(('data' in res)){
                this.setState({ listScore: res.data})
            } else {
                this.setState({ listScore: res.data})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        if(this.props.location !== 'History'){
            console.log('props ok', this.props.location)
            return null
        }

        const GameRow = (game, index) => {
            return (
                <tr key={ index }>
                    <th>{ game.name }</th>
                    <td>{ game.lastGame }</td>
                    <td><h4> { game.score } </h4></td>
                </tr>
            )
        }

        // const gameTable = this.state.listScore.map((game, index) => GameRow(game, index))

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
                    {/* { gameTable } */}
                </tbody>
            </Table>
        )
    }
}

export default ScoreProfile;
