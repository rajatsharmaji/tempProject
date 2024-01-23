import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const CenteredForm = () => {

   
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
   const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json()
      })
      .then((data) => {
        // Handle the response from the server
        alert("Success");
      })
      .catch((error) => {
        // Handle errors during the fetch
        console.error("Error:", error);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add your form submission logic here
  // };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
};

export default CenteredForm;
