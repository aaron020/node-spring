import React, { useState }from 'react';
import { Form, Col, Row} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Options from './options';


const FatherForm = ({ formData, handleInputChange }) => {
    const [fatherSameValue, setFatherSameValue] = useState('');
    const [fatherDifferentValue, setFatherDifferentValue] = useState('');
    const [fatherWealthValue, setFatherWealthValue] = useState('');
    const [fatherInheritanceValue, setFatherInheritanceValue] = useState('');
    const [fatherNotCurrentValue, setFatherNotCurrentValue] = useState('');


    const handleFatherSameChange = (event) => {
        setFatherSameValue(event.target.value);
        handleInputChange(event);
    };
    const handleFatherDifferentChange = (event) => {
        setFatherDifferentValue(event.target.value);
        handleInputChange(event);
    };
    const handleFatherWealthChange = (event) => {
        setFatherWealthValue(event.target.value);
        handleInputChange(event);
    };
    const handleFatherInheritanceChange = (event) => {
        setFatherInheritanceValue(event.target.value);
        handleInputChange(event);
    };
    const handleFatherNotCurrentChange = (event) => {
        setFatherNotCurrentValue(event.target.value);
        handleInputChange(event);
    };





return(
<Accordion defaultActiveKey="0" className="shadow">
<Accordion.Item eventKey="0">
<Accordion.Header>Father</Accordion.Header>
<Accordion.Body>
<Row>





<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>father</strong> works (or worked) in the <strong>same</strong> industry as them which influenced their career/position</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="fatherSame"
    value={fatherSameValue}
    handleInputChange={handleFatherSameChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>father</strong> works (or worked) in a <strong>different</strong> industry which influenced their career/position</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="fatherDifferent"
    value={fatherDifferentValue}
    handleInputChange={handleFatherDifferentChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's father's <strong>wealth</strong> influenced their career/position.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="fatherWealth"
    value={fatherWealthValue}
    handleInputChange={handleFatherWealthChange}/>
</Form>                            
</Col>
<hr></hr>


<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname"><strong>Inheritance</strong> from their father influenced their career/position.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="fatherInheritance"
    value={fatherInheritanceValue}
    handleInputChange={handleFatherInheritanceChange}/>
</Form>                            
</Col>
<hr></hr>





<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person would <strong>not</strong> be in their current position/career without their father</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="fatherNotCurrent"
    value={fatherNotCurrentValue}
    handleInputChange={handleFatherNotCurrentChange}/>
</Form>                            
</Col>
<hr></hr>

</Row>



<Row>
<Col sm={12} className='mb-4'>
<Form.Label htmlFor="inputfirstname">Please provide information about your responses:</Form.Label>
<Form.Control as="textarea" name="fatherExplain" onChange={handleInputChange} rows={3}/>
</Col>
</Row>

</Accordion.Body>
</Accordion.Item>
</Accordion>
)

}

export default FatherForm;