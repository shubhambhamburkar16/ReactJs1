import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    handleClick=()=>{
        this.setState(({counter})=>({
            counter : counter+1
        }))
    }
    
    render() {
        if(this.state.counter===5){
            throw  new Error('No Internet ?');
        }
        return (
            <>
            <br/> <br/>
                <Button onClick={this.handleClick}> Clicked : {this.state.counter}</Button>
            </>
        );
    }
}

export default Counter;