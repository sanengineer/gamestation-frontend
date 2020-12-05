import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class ListGame extends Component {
    render() {
        return (
            <div className="mt-5">
                <Table hover className="w-50 mx-auto">
                    <tbody>
                        <tr>
                            <td>Rock Sirsor Paper</td>
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