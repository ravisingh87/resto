import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

export default class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/restaurant').then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Restaurent List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {this.state.list.map((item, i) => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait...</p>
        )}
      </div>
    );
  }
}
