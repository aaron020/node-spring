import { Form } from 'react-bootstrap';

const options = ({ name, value, handleInputChange }) => {
  return (
    <div className="mb-3 col d-flex flex-column align-items-right">
        <Form.Check
          inline
          label={<span style={{ fontWeight: 'bold' }}>Strongly Disagree</span>}
          name={name}
          type="radio"
          id={`${name}-strongly-disagree`}
          value="-2"
          checked={value === '-2'}
          onChange={handleInputChange}
        />
        <Form.Check
          inline
          label={<span style={{ fontWeight: 'bold' }}>Disagree</span>}
          name={name}
          type="radio"
          id={`${name}-disagree`}
          value="-1"
          checked={value === '-1'}
          onChange={handleInputChange}
        />
        <Form.Check
          inline
          label={<span style={{ fontWeight: 'bold' }}>Neutral</span>}
          name={name}
          type="radio"
          id={`${name}-neutral`}
          value="0"
          checked={value === '0'}
          onChange={handleInputChange}
        />
        <Form.Check
          inline
          label={<span style={{ fontWeight: 'bold' }}>Agree</span>}
          name={name}
          type="radio"
          id={`${name}-agree`}
          value="1"
          checked={value === '1'}
          onChange={handleInputChange}
        />
        <Form.Check
          inline
          label={<span style={{ fontWeight: 'bold' }}>Strongly Agree</span>}
          name={name}
          type="radio"
          id={`${name}-strongly-agree`}
          value="2"
          checked={value === '2'}
          onChange={handleInputChange}
        />
    </div>
  );
};

export default options;