import {Row, Col,Button,Card,Image} from 'react-bootstrap'
import TestImage from '../../TestImage.jpg'



const SearchCard = ({ imageSrc, profileId ,title, subtitle , onCardClick }) => {
    const cardClicked = () =>{
        onCardClick(profileId)
    }
    return (
      <Col className='' lg={4} md={6} sm={12} xs={12}>
        <Button variant="primary-outline" onClick={cardClicked} className="w-100">
          <Card className="mb-4 shadow">
            <Card.Body> 
              <Row>
                <Col sm={4} xs={4}>
                  <Image src={TestImage} rounded className="img-fluid mx-auto shadow" style={{ objectFit: 'cover', width: '100px', height: '100px' }}/>
                </Col>
                <Col sm={8} xs={8} className="d-flex align-items-center flex-column">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </Col> 
              </Row>
            </Card.Body>
          </Card>
        </Button>
      </Col>
    );
  };
  
  export default SearchCard;