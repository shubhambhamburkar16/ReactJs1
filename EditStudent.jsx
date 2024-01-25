import React, { useEffect } from 'react'
import{ Button, Form, Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

//import Employee Context
// import { EmployeeContext } from './EmployeeStore';
import { StudentContext } from './StudentStore';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { updateStudent } from '../CRUD_ContextApi/StudentSlice';
const EditStudent = () => {

  const [validated, setValidated] = useState(false);
  const[studentid, setStudentID] = useState('')
  const[name, setName] = useState('')
  const[division, setDivision] = useState('')
  const[compony, setCompony] = useState('')

  const navigate = useNavigate()
  
  // const{students, updateStudent} = useContext(StudentContext)
  const students = useSelector(state => state.student.students)
  const dispatch = useDispatch()

  const {stdid} = useParams()
  console.log(stdid)

  useEffect(()=>{
    const student = students.find(std=> std.id === parseInt(stdid))
    if(student){
      setStudentID(student.studentid)
      setName(student.name)
      setDivision(student.division)
      setCompony(student.compony)
    }
  },[stdid, students])

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const updatedStudent = {stdid:parseInt(stdid) ,studentid, name, division, compony}
    console.log(updatedStudent)
    updateStudent(parseInt(stdid), updatedStudent)
    navigate('/')
    setValidated(true);
  };

  return (
    <>
    <h5> EDIT STUDENT FORM </h5>
   <Form noValidate validated={validated} onSubmit={handleUpdate}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>STUDENT ID</Form.Label>
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
          <Form.Label>Employee Name</Form.Label>
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
              value={division}
              onChange={(e)=>setDivision(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3" style={{marginLeft:'60px'}}>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>QUALIFICATION</Form.Label>
          <Form.Control type="text" placeholder="Qualification" required 
            value={compony}
            onChange={(e)=>setCompony(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Compony.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    
      <Button type="submit">EDIT STUDENT</Button>
    </Form>
    </>
  )
}

export default EditStudent