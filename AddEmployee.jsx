import React, { useContext } from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

//import Employee Context
import { EmployeeContext } from './EmployeeStore';

const AddEmployee = () => {
  const [validated, setValidated] = useState(false);
  const[empId, setEmpID] = useState('')
  const[name, setName] = useState('')
  const[position, setPosition] = useState('')
  const[compony, setCompony] = useState('')

  const navigate = useNavigate()
  
  const{employees, addEmployee} = useContext(EmployeeContext)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
     // event.stopPropagation();
    }

    const employee = {id:Date.now() ,empId, name, position, compony}
    console.log(employee)
    addEmployee(employee)
    navigate('/')
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>EMP ID</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Employee ID"
            value={empId}
            onChange={(e)=>setEmpID(e.target.value)} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Employee name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employee Position"
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
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company" required 
            value={compony}
            onChange={(e)=>setCompony(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Compony.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Button type="submit">ADD EMPLOYEE</Button>
    </Form>
  );
}

export default AddEmployee;

