import React, { useState } from 'react'
import ChildCmp1 from './ChildCmp1'
import myContext from './MyContext';

const ParentCompUseContext = () => {
    
    const[message, setMessage] = useState('Welcome to CodeMind Technology!!!')
    const[name, setName] = useState('Shubham')

  return (
    <>
        <h5> I am in ParentCompUseContext!!!!</h5>

        <myContext.Provider value={{message, name}}>
             <ChildCmp1/>
        </myContext.Provider>

        
       
    </>
  )
}

export default ParentCompUseContext
