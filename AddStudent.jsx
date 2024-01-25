import React, { useContext } from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

//import Employee Context
import { StudentContext } from './StudentStore';


import { addStudent } from '../CRUD_ContextApi/StudentSlice';
import { useDispatch } from 'react-redux';


const AddStudent = () => {
  const [validated, setValidated] = useState(false);
  const[studentid, setStudentID] = useState('')
  const[name, setName] = useState('')
  const[position, setPosition] = useState('')
  const[compony, setCompony] = useState('')

  const navigate = useNavigate()
  
  // const{students, addStudent} = useContext(StudentContext)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const student = {id:Date.now() ,studentid, name, position, compony}
    console.log(student)
    dispatch(addStudent(student))
    // addStudent(student)
    navigate('/')
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Student ID"
            value={studentid}
            onChange={(e)=>setStudentID(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Student name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Division</Form.Label>
            <Form.Control
              type="text"
              placeholder="Student Division"
              aria-describedby="inputGroupPrepend"
              required
              value={position}
              onChange={(e)=>setPosition(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3" style={{marginLeft:'60px'}}>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Qualification</Form.Label>
          <Form.Control type="text" placeholder="Qualification" required 
            value={compony}
            onChange={(e)=>setCompony(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Compony.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Button type="submit">ADD STUDENT</Button>
    </Form>
  );
}

export default AddStudent;


