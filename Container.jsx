import React from "react";
class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {show: true};
        console.log("Inside Constructor");
    }
    delHeader = () => {
        this.setState({show:false});
        console.log("Inside delHeader");
    }
    render(){
        let myheader;
        if(this.state.show) {
            myheader = <Child/>;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}
class Child extends React.Component {
    componentWillUnmount(){
        console.log("Inside componentWillUnmount");
        alert("The Component named Header is about to be unmounted.")
    }
    render(){
        console.log("inside render Child");
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default Container;