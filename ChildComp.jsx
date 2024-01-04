import React, { Component } from 'react'

export default class ChildComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to React"
      }
    }
    
    sendMessage=()=>{
        this.props.sendDataToParentComp(this.state.message)
    }

  render() {
    return (
      <>
         <h2>Child Comp</h2>

         <button onClick={this.sendMessage}> Send Message to Parent Comp</button>
      </>
    )
  }
}
