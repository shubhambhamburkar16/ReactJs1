import axios from "axios";
import React, {Component} from "react";
import Table from 'react-bootstrap/Table';

class ApiIntegration extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         user :[],
      }
    }
    

    componentDidMount(){
        console.log('Inside componentDidMount')
        this.fetchUserDetails()
    }

    fetchUserDetails= async()=>{
        const userData = await axios.get('https://fakestoreapi.com/users')
        console.log(userData.data)
        this.setState({user : userData.data})
    }

    render(){

        return(
            <>
            {/* <div>
            <h3> ApiIntegration called</h3>
            <ul>
                {this.state.user.map((user) => (
                    <li> {user.username} - {user.password}</li>
                ))}

            </ul>

            </div> */}
    <div className="container">
    <h3> ApiIntegration called</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {this.state.user.map((user) => (

            <tr key={user.id}>
                <td> {user.name.firstname} </td>
                <td> {user.name.lastname} </td>
                <td> {user.username} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
            </tr>
                   
                
        ))}
        
      </tbody>
    </Table>
    </div>
            </>
        )

    }

}

export default ApiIntegration;