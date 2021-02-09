import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu';
// yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
export default class RestaurentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name:null,
            address:null,
            rating:null,
            email:null,
            id:null
        };
      }
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+ this.props.match.params.id).then((response) => {
            response.json().then((result) => {
              this.setState({ 
                name:result.name,
                address:result.address,
                rating:result.rating,
                email:result.email,
                id:result.id
              });
        });
        })
    }
    updateRest(){
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Resturant has been updated.")
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu/>
                <h1>Restaurent Update</h1>
                <input onChange={(event)=>{this.setState({name:event.target.value})}} 
                placeholder="Resturant Name" value={this.state.name}/><br/><br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} 
                placeholder="Resturant Address"value={this.state.address}/><br/><br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
                placeholder="Resturant Rating" value={this.state.rating}/><br/><br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} 
                placeholder="Resturant Email" value={this.state.email}/><br/><br/>
                <button onClick={()=>{this.updateRest()}}>Update Restaurent</button>
            </div>
        )
    }
}
