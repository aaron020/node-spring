import React, {useState} from 'react';
import NavBar from './components/Navbar';
import {Container, Row, Col, Form,InputGroup,Button,Card,Image} from 'react-bootstrap'
import TestImage from './TestImage.jpg'
import SearchCard from './components/Search/SearchCard'
import { useNavigate } from 'react-router-dom';
import ProfileImage from './components/ProfileImage';


export const Search = (props) => {
const [searchValue, setSearchValue] = useState('');
const [searchResponse, setSearchResponse] = useState([]);
const [showAddNew, setShowAddNew] = useState(false);


const handleInputChange = (event) => {
    setSearchValue(event.target.value);
};

const handleSearchResponse = (data) => {
    setSearchResponse(data);
    if(data.length === 0){
        setShowAddNew(true);
    }else{
        setShowAddNew(false);
    }
}

const handleSearch = () => {
    fetch(`http://localhost:8080/profile/searchByName?contains=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        handleSearchResponse(data);
    })
    .catch(error => {
      // Handle any errors during the request
      console.error(error);
    }); 
};
const navigate = useNavigate();
const handleSearchCardClick = (profileId) => {
    navigate('/profile?id='+profileId);  
};


return(
<>
<NavBar></NavBar>
<Container>
    <Row>
        <Card className="mt-5 mb-3 shadow">
        <Card.Body className="text-center"> 
        <Col   className='mt-2' sm={12} xs={12}>
            <h4 className='text-center'>Search By Name</h4>
        </Col>
        <Col className='mt-2' sm={12} xs={12}>
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Name"
            value={searchValue}
            onChange={handleInputChange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
            Search
            </Button>
            </InputGroup>    
        </Col>
        </Card.Body>
        </Card>
    </Row>

    <Row>
    {searchResponse.map((result, index) => (
        <SearchCard
        profileId={result.profileId}
        title={result.first_name + ' ' + result.last_name}
        subtitle={result.occupation_1 + ' ' + result.occupation_2 + ' ' + result.occupation_3 }
        onCardClick={handleSearchCardClick}/>
    ))}

    {showAddNew && <p>This person cannot be found: <a href='/profile/create'>Create</a></p>}


    </Row>
</Container>
</>
)
}