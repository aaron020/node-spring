import React from 'react';
import { Form, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const CareerInfoForm = ({ formData, handleInputChange }) => {
  return (
        <Accordion defaultActiveKey="0" className="shadow">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Career Related Information</Accordion.Header>
        <Accordion.Body>
            <Card className="mb-4 shadow">
                <Card.Body>


                <Col className='mb-4'>
                <Form.Label htmlFor="inputjobTitle">Job Title</Form.Label>
                <Form.Control
                  type="text"
                  id="inputjobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                />
                </Col>

                <Col className='mb-4'>
                <Form.Label htmlFor="inputknownFor">Best Known For</Form.Label>
                <Form.Control
                  type="text"
                  id="inputknownFor"
                  name="knownFor"
                  value={formData.knowFor}
                  onChange={handleInputChange}
                />
                </Col>

                <Col className="mb-4">
                <Form.Label htmlFor="inputnetWorth">Est Net Worth</Form.Label>
                <Form.Control
                  type="number"
                  id="inputnetWorth"
                  name="netWorth"
                  value={formData.netWorth}
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

export default CareerInfoForm;