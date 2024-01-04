import React, { useState } from 'react'
import ChildFuncComp from './ChildFuncComp'

const ParentFuncComp = () => {
    let [name,setName] = useState('');

    const getFromChild=(childName)=>{
        setName(childName);
    }
  return (
    <>
      <h2>Parent Functional Component</h2><br/>
      <h4>Start Application:{name}</h4><br/>
      <ChildFuncComp sendToParent={getFromChild}/>
    </>
  )
}

export default ParentFuncComp