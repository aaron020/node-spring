import React, { useState, useEffect } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import NavBar from './components/Navbar';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PersonalInfoForm from './components/CreateProfile/PersonalInfoForm';
import CareerInfoForm from './components/CreateProfile/CareerInfoForm';
import FatherForm from './components/CreateProfile/FatherForm';
import MotherForm from './components/CreateProfile/MotherForm';
import { useLocation } from 'react-router-dom';



export const EditProfile = (props) => {
    // get the url id 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');


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



    useEffect(() => {
        fetch('http://localhost:8080/profile/findAllById?id='  + id)
          .then(response => response.json())
          .then(data => {
            const updatedFormData = {...formData};
            // create copy 
            updatedFormData.firstName = data.profiledata.first_name
            updatedFormData.lastName = data.profiledata.last_name
            updatedFormData.DOB = data.profiledata.birthday
            updatedFormData.nationality = data.profiledata.nationality
            updatedFormData.netWorth = data.profiledata.net_worth

            setFormData(updatedFormData)
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
    }, []);




    const convertFormDataToJson = (formData) => {
        const jsonData = {
        pagedata:{
            lastUpdated: "19/17/12",
            updatedBy: "aaron",
            accuracy: 90
        },    
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
        console.log(formData)
        var postData = convertFormDataToJson(formData);
        console.log(postData)
        fetch('http://localhost:8080/profile/updateAll?id='+id,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postData
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response data after the POST request is successful
          console.log('Data posted successfully:', data);
        })
        .catch(error => {
          // Handle any errors during the request
          console.error('Error posting data:', error);
        });
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