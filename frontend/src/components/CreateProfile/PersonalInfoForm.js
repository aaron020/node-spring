import React from 'react';
import { Form, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const PersonalInfoForm = ({ formData, handleInputChange }) => {
  return (
    <Accordion defaultActiveKey="0" className="shadow">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Personal Information</Accordion.Header>
        <Accordion.Body>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Col className="mb-4">
                <Form.Label htmlFor="inputFirstName">First Name</Form.Label>
                <Form.Control
                  type="text"
                  id="inputFirstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Col>

              <Col className="mb-4">
                <Form.Label htmlFor="inputLastName">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  id="inputLastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Col>

              <Col className="mb-4">
                <Form.Label htmlFor="inputNationality">Nationality</Form.Label>
                <Form.Control
                  type="text"
                  id="inputNationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                />
              </Col>


              <Col className="mb-4">
                <Form.Label htmlFor="inputDOB">Date of Birth (dd-mm-yyyy)</Form.Label>
                <Form.Control
                  type="text"
                  id="inputDOB"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleInputChange}
                />
              </Col>
              
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PersonalInfoForm;
