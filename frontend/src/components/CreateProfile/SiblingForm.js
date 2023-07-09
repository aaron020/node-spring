import React, { useState }from 'react';
import { Form, Col, Row} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Options from './options';


const SiblingForm = ({ formData, handleInputChange }) => {
    const [siblingSameValue, setSiblingSameValue] = useState('');
    const [siblingDifferentValue, setSiblingDifferentValue] = useState('');
    const [siblingWealthValue, setSiblingWealthValue] = useState('');
    const [siblingInheritanceValue, setSiblingInheritanceValue] = useState('');
    const [siblingNotCurrentValue, setSiblingNotCurrentValue] = useState('');


    const handleSiblingSameChange = (event) => {
        setSiblingSameValue(event.target.value);
        handleInputChange(event);
    };
    const handleSiblingDifferentChange = (event) => {
        setSiblingDifferentValue(event.target.value);
        handleInputChange(event);
    };
    const handleSiblingWealthChange = (event) => {
        setSiblingWealthValue(event.target.value);
        handleInputChange(event);
    };
    const handleSiblingInheritanceChange = (event) => {
        setSiblingInheritanceValue(event.target.value);
        handleInputChange(event);
    };
    const handleSiblingNotCurrentChange = (event) => {
        setSiblingNotCurrentValue(event.target.value);
        handleInputChange(event);
    };





return(
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
<Options 
    name="siblingSame"
    value={siblingSameValue}
    handleInputChange={handleSiblingSameChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>sibling(s)</strong> works (or worked) in a <strong>different</strong> industry which influenced their career/position</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="siblingDifferent"
    value={siblingDifferentValue}
    handleInputChange={handleSiblingDifferentChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>sibling(s)</strong> <strong>wealth</strong> influenced their career/position.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="siblingWealth"
    value={siblingWealthValue}
    handleInputChange={handleSiblingWealthChange}/>
</Form>                            
</Col>
<hr></hr>


<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person would <strong>not</strong> be in their current position/career without their <strong>sibling(s)</strong></Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="siblingNotCurrent"
    value={siblingNotCurrentValue}
    handleInputChange={handleSiblingNotCurrentChange}/>
</Form>                            
</Col>
<hr></hr>

</Row>



<Row>
<Col sm={12} className='mb-4'>
<Form.Label htmlFor="inputfirstname">Please provide information about your responses:</Form.Label>
<Form.Control as="textarea" name="siblingExplain" onChange={handleInputChange} rows={3}/>
</Col>
</Row>

</Accordion.Body>
</Accordion.Item>
</Accordion>
)

}

export default SiblingForm;