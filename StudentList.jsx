import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import './exampleStyle.css'
import Table from 'react-bootstrap/Table'

import { useNavigate } from 'react-router-dom'
import { StudentContext } from './StudentStore'

const StudentList = () => {
    
    const navigate = useNavigate()
    const{students, deleteStudent} = useContext(StudentContext)

    const handleDelete =(stdid)=>{
      deleteStudent(stdid)
    }
  return (
    <div>
            <h5> Student List</h5>
            <div className='addStudentBtn'>
            <Button variant="primary" onClick={()=>navigate('/addStudent')}>Add Student</Button>

            </div>
            <div>
      <Table striped bordered hover style={{marginLeft:'10px', marginRight:'30px', marginTop:'10px'}}>
      <thead>
        <tr>
          <th>STUDENT ID</th>
          <th>STUDENT NAME</th>
          <th>DIVISION</th>
          <th>QUALIFICATION</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
      <th></th>
              { students.map((student, index) =>(
                  <tr key={student.stdid}>
                      <td>{student.studentid}</td>
                      <td>{student.name}</td>
                      <td>{student.position}</td>
                      <td> {student.compony}</td>
                      <td>
                      <Button variant="primary" size="sm" onClick={()=>navigate(`/editStudent/${student.stdid}`)}>EDIT</Button>
                      <Button variant="danger" size="sm" onClick={()=>handleDelete(student.stdid)} style={{marginLeft:'10px'} }>DELETE</Button>
                      </td>
                  </tr>

              ))}
      </tbody>
    </Table>
            </div>
           
    </div>
  )
}

export default StudentList
