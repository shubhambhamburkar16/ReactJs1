import React, {Component} from "react";
import { Button } from "react-bootstrap";
class CompLifeCycle extends Component{
    //1. Initialization Phase
    constructor(props){
        super(props)
        console.log("Class Component Constructor");

        this.state={
            name:"Welcome to Class Comp"
        }

    }
    //2. Mounting Phase 
    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("inside componentDidMount");
    }
    updateName=()=>{
        this.setState({name:"Welcome to React Comp"});
    }
    shouldComponentUpdate(){
        console.log("inside shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("Inside getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate");
    }
    render(){
        console.log("inside render method");
        return(
        <>

        <h1>Class Compo Life Cycle</h1>
        <h2>{this.state.name}</h2>
        <Button variant="primary" onClick={this.updateName}>UpdateName</Button>
        </>
        )
    }
}

export default CompLifeCycle;