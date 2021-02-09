import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import NavbarMenu from './NavbarMenu';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ' ',
    };
  }
  loginHandler() {
    fetch('http://localhost:3000/login?q=' + this.state.name).then((data) => {
        data.json().then((resp) => {
          if(resp.length>0){
            localStorage.setItem('login',JSON.stringify(resp))
            console.log(this.props.history.push('list'))
          }else{
              alert("Please check username & password.")
          }
        });
      });
  }
  render() {
    return (
      <Container>    
        <NavbarMenu/>    
        <Form.Label>Username
        <Form.Control
          type="text"
          placeholder="username"
          onChange={(event) => this.setState({ name: event.target.value })}
        /></Form.Label><br/>
        <Form.Label>Password
        <Form.Control type="password" placeholder="password" onChange={(event) => this.setState({ password: event.target.value })}/></Form.Label><br/>
        <Button type="submit" onClick={() => {this.loginHandler()}}>Login</Button>
      </Container>
    );
  }
}
