
import React, { useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';

const FormReact = () => {
  const [form, setForm] = useState({
    fname: '',
    email: '',
    color: '',
    date: '',
    range: '50',
    options: '',
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    alert(`First Name : ${form.fname} Email : ${form.email} Options: ${form.options}`);
    console.log('Inside handleSubmit');
    e.preventDefault();
  };

  return (
    <>
      <h4>Advance React Form Handling</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formColor">
          <Form.Label>Color:</Form.Label>
          <Form.Control
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formRange">
          <Form.Label>Range:</Form.Label>
          <Form.Control
            type="range"
            name="range"
            value={form.range}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formOptions">
          <Form.Label>Options:</Form.Label>
          <Form.Control
            as="select"
            name="options"
            value={form.options}
            onChange={handleChange}
            required
          >
            <option value="">Please select option</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="JavaScript">JavaScript</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formFile">
          <Form.Label>File Upload:</Form.Label>
          <Form.Control type="file" name="file" onChange={handleChange} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default FormReact;
