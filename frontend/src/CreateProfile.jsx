import React, { useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import NavBar from './components/Navbar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PersonalInfoForm from './components/CreateProfile/PersonalInfoForm';
import CareerInfoForm from './components/CreateProfile/CareerInfoForm';
import FatherForm from './components/CreateProfile/FatherForm';
import MotherForm from './components/CreateProfile/MotherForm';



export const CreateProfile = (props) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        nationality: '',
        DOB: '',
        netWorth: '',
        jobTitle: '',
        fatherSame: '',
        fatherDifferent: '',
        fatherWealth: '',
        fatherInheritance: '',
        fatherNotCurrent: '',
        fatherExplain: '',
        motherInheritance: ''
    });

    const convertFormDataToJson = (formData) => {
        const jsonData = {
          profiledata: {
            name: formData.firstName + " " + formData.lastName,
            birthday: formData.DOB,
            nationality: formData.nationality,
            first_name: formData.firstName,
            last_name: formData.lastName,
            about: formData.about,
            net_worth: formData.netWorth,
            knownFor: formData.knownFor
          }
        };
      
        return JSON.stringify(jsonData);
      };

    const handleFormSubmit = () => {
        var postData = convertFormDataToJson(formData);
        console.log(postData);
        // Access the form data here
        // console.log(formData.firstName);
        // console.log(formData.lastName);
        // console.log(formData.nationality);
        // console.log(formData.DOB);
        // console.log(formData.netWorth);
        // console.log(formData.jobTitle);
        // console.log(formData.fatherSame);
        // console.log(formData.fatherDifferent)
        // console.log(formData.fatherWealth)
        // console.log(formData.fatherInheritance)
        // console.log(formData.fatherNotCurrent)
        // console.log(formData.fatherExplain)
        // console.log(formData.motherInheritance)
        // ...other form values
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };


    return(
        <>
        <NavBar></NavBar>
        <Container>
            <Row className="mt-4">
                <Col lg={4} className="mt-4">
                    {/* Personal Info */}
                    <PersonalInfoForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    />                     
                </Col>
                <Col lg={8} className="mt-4">
                    <CareerInfoForm                   
                    formData={formData}
                    handleInputChange={handleInputChange}
                    />                        
                </Col>


            <Col lg={12} className='mt-5'>
                


                    <Card className="mb-4 shadow">
                        <Card.Body>
                        <p class="text-muted mb-4">The following questions apply to close family members regardless of their relantionship (e.g., biological parent, step-sibling, adoptive parent) but excludes in-laws</p>

                        {/* Father */}
                        <FatherForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        /> 

                        {/* Start Mother */}
                        <MotherForm
                        formData={formData}
                        handleInputChange={handleInputChange}
                        />

                        {/* Start Sibling */}
                        <Accordion defaultActiveKey="0" className="shadow">
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Sibling(s)</Accordion.Header>
                        <Accordion.Body>
                        <Row>

                        <Col sm={8} xs={12} className=''>
                        <Form.Label htmlFor="inputfirstname">The person's <strong>sibling(s)</strong> works (or worked) in the <strong>same</strong> industry as them which influenced their career/position</Form.Label>
                        </Col>

                        <Col sm={4} xs={12} className='mb-3'>
                        <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3 col d-flex flex-column align-items-right">
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Disagree</span>}
                                name="mother-q-same"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Disagree</span>}
                                name="mother-q-same"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Neutral</span>}
                                name="mother-q-same"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Agree</span>}
                                name="mother-q-same"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Agree</span>}
                                name="mother-q-same"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            </div>
                        ))}
                        </Form>                            
                        </Col>

                        <hr></hr>

                        <Col sm={8} xs={12} className=''>
                        <Form.Label htmlFor="inputfirstname">The person's <strong>sibling(s)</strong> works (or worked) in a <strong>different</strong> industry which influenced their career/position</Form.Label>
                        </Col>

                        <Col sm={4} xs={12} className='mb-3'>
                        <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3 col d-flex flex-column align-items-right">
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Disagree</span>}
                                name="mother-q-diff"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Disagree</span>}
                                name="mother-q-diff"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Neutral</span>}
                                name="mother-q-diff"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Agree</span>}
                                name="mother-q-diff"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Agree</span>}
                                name="mother-q-diff"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            </div>
                        ))}
                        </Form>                            
                        </Col>

                        <hr></hr>



                        <Col sm={8} xs={12} className=''>
                        <Form.Label htmlFor="inputfirstname">The person's <strong>sibling(s)</strong> <strong>wealth</strong> influenced their career/position.</Form.Label>
                        </Col>

                        <Col sm={4} xs={12} className='mb-3'>
                        <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3 col d-flex flex-column align-items-right">
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Disagree</span>}
                                name="mother-q-wealth"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Disagree</span>}
                                name="mother-q-wealth"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Neutral</span>}
                                name="mother-q-wealth"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Agree</span>}
                                name="mother-q-wealth"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Agree</span>}
                                name="mother-q-wealth"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            </div>
                        ))}
                        </Form>                            
                        </Col>

                        <hr></hr>


                        <Col sm={8} xs={12} className=''>
                        <Form.Label htmlFor="inputfirstname">The person would <strong>not</strong> be in their current position/career without their <strong>sibling(s)</strong></Form.Label>
                        </Col>

                        <Col sm={4} xs={12} className='mb-3'>
                        <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3 col d-flex flex-column align-items-right">
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Disagree</span>}
                                name="mother-q-not"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Disagree</span>}
                                name="mother-q-not"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Neutral</span>}
                                name="mother-q-not"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Agree</span>}
                                name="mother-q-not"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label={<span style={{ fontWeight: 'bold' }}>Strongly Agree</span>}
                                name="mother-q-not"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            </div>
                        ))}
                        </Form>                            
                        </Col>

                        <hr></hr>

                        </Row>

                        <Row>

                        <Col sm={12} className='mb-4'>
                        <Form.Label htmlFor="inputfirstname">Please provide information about your responses:</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                        </Col>
                        </Row>

                        </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        {/* End Sibling */}


                        </Card.Body>
                    </Card> 
                    <Button variant="primary" className='mb-5' onClick={handleFormSubmit}>Save</Button>{' '}

                        
            </Col>

            </Row>
        </Container>
        </>
    )
}