import React, { Component } from 'react'

 class StateInClassComp extends Component {

    constructor(props){
        super(props)
        this.name = "Shubham "
        this.state={
            userName: "Bhamburkar"
        }
        this.state={
            number: 15,
            sName: 'Aakanksha',
            flag: true,
            arrayValue:[1,2,3,4,5],
            person:{
                name: "Bhavesh",
                age: 23
            }

        }
    }

    UserChange(){
        // alert('User change function called')
        console.log("Button Clicked");
        this.name = "Shubh";
        console.log(this.name);
    }

    changeuserName(){
        // alert('Inside Change user name')
        this.setState({userName: "Akshu"})
    }

  render() {
    return (
      <>
        <h1>State in class Component</h1>
        <h4>Name is:{this.name}</h4>
        <button onClick={this.UserChange.bind(this)}>Change User</button>
        
        <h4>User Name: {this.state.userName}</h4>
        <button onClick={this.changeuserName.bind(this)}> User Name Change</button>

        <p>Number Is: {this.state.number}</p>
        <p>Name Is: {this.state.sName}</p>
        <p>Number Is: {this.state.flag?"true":"False"}</p>
        <p>arrayValue Is: {this.state.arrayValue.join(',')}</p>
        <p>Object value is:{JSON.stringify(this.state.person)}</p>
      </>
    )
  }
}
export default StateInClassComp;