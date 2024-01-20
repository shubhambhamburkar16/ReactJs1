import React, { useEffect } from 'react'
import{ Button, Form, Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

//import Employee Context
import { EmployeeContext } from './EmployeeStore';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {

  const [validated, setValidated] = useState(false);
  const[empId, setEmpID] = useState('')
  const[name, setName] = useState('')
  const[position, setPosition] = useState('')
  const[compony, setCompony] = useState('')

  const navigate = useNavigate()
  
  const{employees, updateEmployee} = useContext(EmployeeContext)

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    const employee = employees.find(emp=> emp.id === parseInt(id))
    if(employee){
      setEmpID(employee.empId)
      setName(employee.name)
      setPosition(employee.position)
      setCompony(employee.compony)
    }
  },[id, employees])

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const updatedEmployee = {id:parseInt(id) ,empId, name, position, compony}
    console.log(updatedEmployee)
    updateEmployee(parseInt(id), updatedEmployee)
    navigate('/')
    setValidated(true);
  };

  return (
    <>
    <h5> EDIT EMPLOYEE </h5>
   <Form noValidate validated={validated} onSubmit={handleUpdate}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>EMP ID</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Employee ID"
            value={empId}
            onChange={(e)=>setEmpID(e.target.value)}
          />
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
          <Form.Label>Psition</Form.Label>
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
          <Form.Label>Compony</Form.Label>
          <Form.Control type="text" placeholder="City" required 
            value={compony}
            onChange={(e)=>setCompony(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Compony.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Button type="submit">EDIT EMPLOYEE</Button>
    </Form>
    </>
  )
}

export default EditEmployee
