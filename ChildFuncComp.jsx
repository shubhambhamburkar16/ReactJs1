import React from 'react'

const ChildFuncComp = (props) => {
    let childName = 'Welcome to Web Application';

    const sendName=()=>{
      props.sendToParent(childName);
    }
  return (
    <>
        <h2>Child Functional Comp</h2>
        <button type="button" class="btn btn-success" onClick={sendName}>Submit</button>
      
    </>
  )
}

export default ChildFuncComp;