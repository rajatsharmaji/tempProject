import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const UserLookupForm = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState([]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3002/user/get${userName}`);
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Enter User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={userName}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Get User
            </Button>
          </Form>
        </Col>
      </Row>

      {userData && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                <Card.Text>
                  {userData.map((user, index) => (
                    <div key={index}>
                      <strong>Name:</strong> {user.name}
                      <br />
                      <strong>Password:</strong> {user.password}
                      <br />
                      <strong>Age:</strong> {user.age}
                      {/* Add more user data fields as needed */}
                      <br />
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default UserLookupForm;
