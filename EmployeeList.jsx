import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import './crudStyle.css'
import Table from 'react-bootstrap/Table'

import { useNavigate } from 'react-router-dom'
//import { EmployeeContext } from './EmployeeStore'

import { useSelector } from 'react-redux'

import { deleteEmployee } from './EmployeeSlice'
import { useDispatch } from 'react-redux'

const EmployeeList = () => {
    
    const navigate = useNavigate()
    //const{employees, deleteEmployee} = useContext(EmployeeContext)
    
    const dispatch = useDispatch()

    const employees = useSelector(state => state.employee.employees)

    const handleDelete =(id)=>{
      //deleteEmployee(id)
      dispatch(deleteEmployee(id))
    }
  return (
    <div>
            <h5> Employee List</h5>
            <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')}>Add Employee</Button>

            </div>
            <div>
      <Table striped bordered hover style={{marginLeft:'10px', marginRight:'30px', marginTop:'10px'}}>
      <thead>
        <tr>
          <th>EMP ID</th>
          <th>EMPLOYEE NAME</th>
          <th>POSITION</th>
          <th>COMPONY</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
      <th></th>
              { employees.map((employee, index) =>(
                  <tr key={employee.id}>
                      <td>{employee.empId}</td>
                      <td>{employee.name}</td>
                      <td>{employee.position}</td>
                      <td> {employee.compony}</td>
                      <td>
                      <Button variant="primary" size="sm" onClick={()=>navigate(`/editEmployee/${employee.id}`)}>EDIT</Button>
                      <Button variant="danger" size="sm" onClick={()=>handleDelete(employee.id)} style={{marginLeft:'10px'} }>DELETE</Button>
                      </td>
                  </tr>

              ))}
      </tbody>
    </Table>
            </div>
           
    </div>
  )
}

export default EmployeeList
