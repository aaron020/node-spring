import React, { useState } from 'react';
import NavBar from './components/Navbar';
import {Button, Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';





export const CreateUser = (props) => {

return(
    <>
    <NavBar></NavBar>
    <Container>
        <Row className="justify-content-center">
            <Col className='mt-5' lg={6}>
                <h3>Create an Account</h3>
                <Card className="mb-4 mt-4 shadow">
                <Card.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-4 mt-4"
                    >
                    <Form.Control type="text" placeholder="johndoe" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-4 mt-4"
                    >
                    <Form.Control type="email" placeholder="john@gmail.com"/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3 mt-3"
                    >
                    <Form.Control type="password" placeholder="123"/>
                    </FloatingLabel>
                    

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Confirm Password"
                        className="mb-3 mt-3"
                    >
                    <Form.Control type="password" placeholder="123"/>
                    </FloatingLabel>

                </Card.Body>
                </Card>
            
            </Col>

        </Row>

    </Container>
    </>
)

}