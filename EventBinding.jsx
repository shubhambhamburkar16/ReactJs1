import { Button } from 'react';
import React, { Component } from 'react';

export default class EventBinding extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName:"Shubham"
        }
    }
    // 
    userNameChange =()=>{
        console.log(this.state.userName);
    }
    render(){
    return (
        <> 
      
        <h1>Inside Event Binding Class</h1>

        <h5>User Name: {this.state.userName}</h5>

        {/* <button variant="Primary" onClick={this.userNameChange.bind(this)}>ChangeUser</button> */}

        <button variant="primary" onClick={this.userNameChange}>ChangeUser</button>
    
      </>
    )
    }
}