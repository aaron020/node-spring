import React, { useState }from 'react';
import { Form, Col, Row} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Options from './options';


const MotherForm = ({ formData, handleInputChange }) => {
    const [motherSameValue, setMotherSameValue] = useState('');
    const [motherDifferentValue, setMotherDifferentValue] = useState('');
    const [motherWealthValue, setMotherWealthValue] = useState('');
    const [motherInheritanceValue, setMotherInheritanceValue] = useState('');
    const [motherNotCurrentValue, setMotherNotCurrentValue] = useState('');


    const handleMotherSameChange = (event) => {
        setMotherSameValue(event.target.value);
        handleInputChange(event);
    };
    const handleMotherDifferentChange = (event) => {
        setMotherDifferentValue(event.target.value);
        handleInputChange(event);
    };
    const handleMotherWealthChange = (event) => {
        setMotherWealthValue(event.target.value);
        handleInputChange(event);
    };
    const handleMotherInheritanceChange = (event) => {
        setMotherInheritanceValue(event.target.value);
        handleInputChange(event);
    };
    const handleMotherNotCurrentChange = (event) => {
        setMotherNotCurrentValue(event.target.value);
        handleInputChange(event);
    };





return(
<Accordion defaultActiveKey="0" className="shadow">
<Accordion.Item eventKey="0">
<Accordion.Header>Mother</Accordion.Header>
<Accordion.Body>
<Row>





<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>mother</strong> works (or worked) in the <strong>same</strong> industry as them which influenced their career/position</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="motherSame"
    value={motherSameValue}
    handleInputChange={handleMotherSameChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's <strong>mother</strong> works (or worked) in a <strong>different</strong> industry which influenced their career/position</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="motherDifferent"
    value={motherDifferentValue}
    handleInputChange={handleMotherDifferentChange}/>
</Form>                            
</Col>
<hr></hr>




<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person's mother's <strong>wealth</strong> influenced their career/position.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="motherWealth"
    value={motherWealthValue}
    handleInputChange={handleMotherWealthChange}/>
</Form>                            
</Col>
<hr></hr>


<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname"><strong>Inheritance</strong> from their mother influenced their career/position.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="motherInheritance"
    value={motherInheritanceValue}
    handleInputChange={handleMotherInheritanceChange}/>
</Form>                            
</Col>
<hr></hr>





<Col sm={8} xs={12} className=''>
<Form.Label htmlFor="inputfirstname">The person would <strong>not</strong> be in their current position/career without their mother.</Form.Label>
</Col>

<Col sm={4} xs={12} className='mb-3'>
<Form>
<Options 
    name="motherNotCurrent"
    value={motherNotCurrentValue}
    handleInputChange={handleMotherNotCurrentChange}/>
</Form>                            
</Col>
<hr></hr>

</Row>



<Row>
<Col sm={12} className='mb-4'>
<Form.Label htmlFor="inputfirstname">Please provide information about your responses:</Form.Label>
<Form.Control as="textarea" name="motherExplain" onChange={handleInputChange} rows={3}/>
</Col>
</Row>

</Accordion.Body>
</Accordion.Item>
</Accordion>
)

}

export default MotherForm;