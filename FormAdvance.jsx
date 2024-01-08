import React, { useState, useRef, useEffect } from 'react'

const AdvanceForm = () => {

    const[form, setForm]=useState({
        fname:'',
        email:'',
        color:'',
        date:'',
        range:'50'
    })

    // Creating a ref object
    const nameRef = useRef()
    const emailRef = useRef()

    const handleChange=(event)=>{
        console.log(event)
        const{name,value, file} = event.target
        console.log(`Name: ${name} Value: ${value}`)

        setForm((preState)=>({
            ...preState, [name]: file ? file[0]:value
        }))

    }

    const handleSubmit=(e)=>{
        alert(`First Name : ${form.fname} Emial : ${form.email}`)
        console.log("Inside handleSubmit")
        e.preventDefault()
      }

      useEffect(()=>{
        // Example of using ref to focus on an input field
        nameRef.current.focus()
        //emailRef.current.focus()
      })

  return (
    <>
        <h4> Advance React Form Handling</h4>

        <form  onSubmit={handleSubmit}>
              {/* Ref is assigned to the input element */}
            <label>
           First Name : <input type='text'  name='fname' value={form.fname} onChange={handleChange} required ref={nameRef}/>
           </label> <br/><br/>
           <label>
           Email : <input type='email'  name='email' value={form.email} onChange={handleChange} required ref={emailRef}/>
           </label><br/><br/>
           <label>
            Colors : <input type='color' name='color' value={form.color} onChange={handleChange} required/>
           </label> <br/><br/>
           <label>
            Date: <input type='date' name='date' value={form.date} onChange={handleChange} required/>
           </label> <br/><br/>
           <label>
            Range: <input type='range' name='range' value={form.range} onChange={handleChange} required/>
           </label> <br/><br/>
           <label>
            Options: <select type='options' name='options' value={form.options} onChange={handleChange} required>
                    <option value="">Please select option</option>
                    <option value="Java">Java</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="JavaScript">JavaScript</option>
                </select>

           </label> <br/><br/>

           <label>
                File Upload: <input type='file' name='file' onChange={handleChange}></input>
           </label> <br/><br/>
           <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default AdvanceForm

