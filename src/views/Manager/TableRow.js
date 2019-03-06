import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.password}</td>
              
                <td>
                    <button className="btn btn-primary">Sua</button>
                </td>
                <td>
                    <button className="btn btn-danger">Xoa</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;