import React, { useState } from "react"
import {Button, Container, Row, Col} from 'react-bootstrap'
import NavBar from './components/Navbar'


export const Homepage = (props) => {

    return(
        <>
        <NavBar></NavBar>
        <Container>
            
            <Row className="mb-3">
            <h2>Home Page</h2>
            </Row>
            <Row>
            </Row>

        </Container>
        </>
    )
}