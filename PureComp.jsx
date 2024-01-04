import React, { Component, PureComponent } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

// class PureComp extends Component {
    class PureComp extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increamentCount=() => {
        // this.setState({count:this.state.count})
          this.setState({count:this.state.count+1})

    }
  render() {
    console.log("Inside Render!!");
    return (
      <>
      <h2>Pure Component</h2>
      <h4>Count : {this.state.count} - <Button type="button" className="btn btn-info" onClick={this.increamentCount}>+</Button> </h4>
      </>
    )
  }
//   shouldComponentUpdate(){
//     console.log('Inside shouldComponentUpdate')
//     return true
// }

getSnapshotBeforeUpdate(){
    console.log('Inside getSnapshotBeforeUpdate')
    return null
}

componenDidUpdate(){
    console.log('Inside componenDidUpdate')
    return null
}

static getDerivedStateFromProps(props){
    console.log("Inside getDerivedStateFromProps")
    return null;
}
}
export default PureComp;