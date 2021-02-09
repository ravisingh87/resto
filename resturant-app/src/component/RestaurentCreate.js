import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu';



export default class RestaurentCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            rating:null,
            email:null
        }
    }
    createRest(){
        fetch('http://localhost:3000/restaurant',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Resturant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu/>
                <h1>Restaurent Create</h1>
                <input onChange={(event)=>{this.setState({name:event.target.value})}} 
                placeholder="Resturant Name"/><br/><br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} 
                placeholder="Resturant Address"/><br/><br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
                placeholder="Resturant Rating"/><br/><br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} 
                placeholder="Resturant Email"/><br/><br/>
                <button onClick={()=>{this.createRest()}}>Add Restaurent</button>
            </div>
        )
    }
}
