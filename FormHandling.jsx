import React, { useRef, useEffect } from 'react';

const FormBasic = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${firstNameRef.current.value} Last Name: ${lastNameRef.current.value} Email: ${emailRef.current.value}`);
  };


  useEffect(()=>{
    // Example of using ref to focus on an input field
    firstNameRef.current.focus()
    //emailRef.current.focus()
  })
  return (
    <>
      <h2>Form Handling Basic</h2>

      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input type="text" ref={firstNameRef} />
        </div>
        <br />

        <div>
          Last Name: <input type="text" ref={lastNameRef} />
        </div>
        <br />

        <div>
          Email: <input type="email" ref={emailRef} />
        </div>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default FormBasic;

