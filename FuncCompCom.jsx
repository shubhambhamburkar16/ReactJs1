import React from 'react'

export default function FuncCompCom(props) {
  console.log(this.props)
    const {myName, Company, employeeObj} = props
  return (
    <>
    <div>
      <h1>Class Communication Component</h1>
        <h3>My Name: {myName}</h3>
        <h3>Company:{Company}</h3>
        Employee Details: {JSON.stringify(employeeObj)}
    </div>
    </>
  )
}
