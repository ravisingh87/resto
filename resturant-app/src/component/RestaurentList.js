import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './NavbarMenu';

export default class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getdata();
  }
  getdata(){
    fetch('http://localhost:3000/restaurant').then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  deleleRest(id){
    fetch('http://localhost:3000/restaurant/'+id,{
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        alert('Resturant has been deleted.');
        this.getdata();
      });
    });
  }
  render() {
    return (
      <div>
        <NavbarMenu/>
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
                  <th>Operation</th>
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
                    <td>
                      <Link to={'/update/' + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                      <span onClick={() => this.deleleRest(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="grey" />
                      </span>
                    </td>
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
