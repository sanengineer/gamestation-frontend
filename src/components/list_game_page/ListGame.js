import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'

class ListGame extends Component {
    render() {
        return (
            <div className="mt-5 text-center">
                <Table hover className="w-50 mx-auto">
                    <tbody>
                        <tr>
                            <td><Link className="text-dark" to="/gameplay">RPS</Link></td>     
                        </tr>
                        <tr>
                            <td>Chicken Cross</td>
                        </tr>
                        <tr>
                            <td>Ular Tangga</td>
                        </tr>
                    </tbody>
                </Table>
          </div>
        )
    }
}

export default ListGame;