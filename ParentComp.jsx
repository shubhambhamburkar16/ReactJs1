import React, { Component } from 'react'
import ChildComp from './ChildComp'
export default class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         messageFromChildComp:''
      }
    }
    
    handleDataFromChild=(message)=>{
        this.setState({messageFromChildComp:message})
    }

  render() {
    return (
      <>
        <h2>Parent Comp</h2>
        <h4> Message From Child Comp : {this.state.messageFromChildComp}</h4>
        <ChildComp sendDataToParentComp={this.handleDataFromChild}/>

      </>
    )
  }
}
