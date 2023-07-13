import React, { useEffect ,useState } from "react"
import {Button, Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import NavBar from './components/Navbar'
import TestImage from './TestImage.jpg'
import { ListGroup } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from 'react-router-dom';
import ProfileImage from "./components/ProfileImage";



export const Profile = (props) => {
    const [profileData, setProfileData] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    useEffect(() => {
        fetch('http://localhost:8080/profile/findAllById?id='  + id)
          .then(response => response.json())
          .then(data => {
            // Set the fetched data to the state
            setProfileData(data);
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
    }, []);

    useEffect(() => {
        console.log(profileData);
      }, [profileData]);

    const good_prim = 'rgb(0, 255, 0)'
    const good_sec = 'rgb(204, 255, 204)'

    const ok_prim = 'rgb(0, 0, 0,.7)'
    const ok_sec = 'rgb(255, 238, 204,0.4)'
    const ok_stroke = 'rgb(0, 0, 0,0.4)'
    return(
        <>
        
        <NavBar></NavBar>
        <Container>
            <Row className="mt-4">
                

                {/* Profile */}
                <Col lg={4}>
                    <Card className="mb-4 shadow">
                        <Card.Body className="text-center"> 
                            <ProfileImage
                            profileId={id}
                            roundedCircle
                            style={{ objectFit: 'cover', width: '170px', height: '170px' }}
                            />
                            <h5 class="my-3">{profileData?.profiledata?.first_name} {profileData?.profiledata?.last_name}</h5>
                            <p class="text-muted mb-4">{profileData?.profiledata?.occupation_1} {profileData?.profiledata?.occupation_2} {profileData?.career?.occupation_3}</p>
                            <h6 className="mb-4 mt-5">Nepotism Rating: </h6>
                            <Card className="mb-3 shadow">
                            <Card.Body className="text-center">
                            <h6>30 / 100</h6> 
                            <ProgressBar
                                now={40}
                                className="progress-bar shadow"
                                style={{ '--progress-value': `${40}%` , background: `red`}}
                            />
                            </Card.Body>
                             </Card>
                            {/* <Col className="mt-3 d-flex justify-content-center">
                                <div
                                    className="progress-circle"
                                    role="progressbar"
                                    style={{ '--value': `15`, '--col_prim':ok_prim,'--col_sec':ok_sec,'--stroke-color':ok_stroke}}
                                ></div>
                            </Col> */}
                        </Card.Body>
                    </Card>
                </Col>


                <Col lg={8} className="mb-4">

                <Accordion defaultActiveKey="0" className="shadow">


                <Accordion.Item eventKey="0">
                <Accordion.Header>Quick Facts</Accordion.Header>
                <Accordion.Body>
                    <Card className="mb-4 shadow">
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Date Of Birth</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.profiledata?.birthday}</p>
                                </Col>      
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Estimated Net Worth</p>
                                </Col>  
                                <Col  xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.profiledata?.net_worth}</p>
                                </Col>      
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Nationality</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.profiledata?.nationality}</p>
                                </Col>      
                            </Row>
                            </Card.Body>
                        </Card> 
                        </Accordion.Body>
                        </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>About</Accordion.Header>
                <Accordion.Body>
                        <Card className="mb-2 mt-4 shadow">
                        <Card.Body>
                            <p>{profileData?.profiledata?.about}</p>
                        </Card.Body>
                        </Card> 
                        <Card className="mb-4 shadow">
                        <Card.Body>
                            <p>{profileData?.profiledata?.knownFor}</p>
                        </Card.Body>
                        </Card> 
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Page Data</Accordion.Header>
                    <Accordion.Body>
                    <Card className="mb-4 shadow">
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Page Accuracy</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.pagedata?.accuracy}</p>
                                </Col>      
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Last Updated</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.pagedata?.lastUpdated}</p>
                                </Col>      
                            </Row>
                            <hr></hr> 
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Updated By</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">{profileData?.pagedata?.updatedBy}</p>
                                </Col>      
                            </Row> 
                        </Card.Body>
                    </Card>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                





                </Col>
                

                <Col lg={8}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Date Of Birth</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">John Cena</p>
                                </Col>      
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Estimated Net Worth</p>
                                </Col>  
                                <Col  xs={6} md={6}>
                                    <p class="text-muted mb-4">John Cena</p>
                                </Col>      
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col xs={6} md={6}>
                                    <p>Nationality</p>
                                </Col>  
                                <Col xs={6} md={6}>
                                    <p class="text-muted mb-4">John Cena</p>
                                </Col>      
                            </Row> 
                        </Card.Body>
                    </Card>
                
                </Col>

            </Row>

        </Container>
        </>
    )
}