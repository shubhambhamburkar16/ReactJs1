import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ApiCallUsinguseEffect = () => {

  const[postData, setPostData] = useState([])

  //syntax of useEffect hook
  // useEffect(
  //   //It contains callback function, dependency array

  //   ()=>{

  //   }, []
  // )

  useEffect(()=>{

    const getPostData = async ()=>{
      try{

        const postResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setPostData(postResponse.data)

      }catch(error){
        console.log(error)
      }
  }

    getPostData()

  },[])

  

  return (
    <>
    <div className="container">
    <h3>Creating a Form by React Bootstrap</h3>

    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="postData.name">Enter Full Name</Form.Label>
          <Form.Control id= "postData.name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="userData.email"> Enter Your Email</Form.Label>
          <Form.Control id="userData.email">
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {postData.map((userData) => (

            <tr key={userData.postId}>
                <td> {userData.id} </td>
                <td> {userData.name} </td>
                <td> {userData.email} </td>
                <td> {userData.body} </td>
            </tr>    
        ))}
        
      </tbody>
    </Table> */}
    </div>
          
    </>
  )
}

export default ApiCallUsinguseEffect
