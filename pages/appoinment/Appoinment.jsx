import React from 'react'
import './Appoinment.css'
import {Container,Button} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { faPhone,faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EnvelopeOpen } from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';


function Appoinment() {
    const handleSubmit = (event) => {
        window.alert('your form is submiited please come and enjoy our service')
        // Handle form submission logic here
      };
  return (
    <Container>
        <Row>
            <Col>
            <div className="">
        <button className="Appoinment">Appoinment</button>
        <h1 className="Appoinment-title mb-3">Make An Appointment To Visit Our Doctor</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
      </div>
           <div className="call-us  rounded d-flex align-items-center p-5 mb-3">
            <div className='d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white' style={{width:'60px',height:'50px'}}>
           <FontAwesomeIcon icon={faPhone} className='fs-3 text-primary text-center' />
           </div>
           <div className="ms-4">
            <p className='mb-2'>Call-Us Now</p>
            <h5 className='mb-0'>+919567992225</h5>
           </div>
           </div>


           <div className="call-us  rounded d-flex align-items-center p-5 mb-3">
            <div className='d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white' style={{width:'60px',height:'50px'}}>
           <FontAwesomeIcon icon={faEnvelopeOpen} className='fs-3 text-primary text-center' />
           </div>
           <div className="ms-4">
            <p className='mb-2'>Mail-Us Now</p>
            <h5 className='mb-0'>medicare@gmail.com</h5>
           </div>
           </div>


            </Col>
            
            <Col className='mt-5'>
                <Container className='form-container p-4'>
            <Form onSubmit={handleSubmit}>
      <Row className="mb-4 p-2">
        <Form.Group as={Col} controlId="formName">
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Row>
      <Row className="mb-4 p-2">
        <Form.Group as={Col} controlId="mobail">
          <Form.Control type="text" placeholder="Enter your mobailnumber" />
        </Form.Group>

        <Form.Group as={Col} controlId="doctor">
          <Form.Select aria-label="Choose Doctor">
          <option>Select Doctor</option>
          <option value="Doctor 1">Doctor 1</option>
          <option value="Doctor 2">Doctor 2</option>
          <option value="Doctor 3">Doctor 3</option>
          <option value="Doctor 4">Doctor 4</option>
        </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-4 p-2">
        <Form.Group as={Col} controlId="formdate">
          <Form.Control type="date" placeholder="choose date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formtime">
          <Form.Control type="time" placeholder="choose time" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-4 p-2" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{width:'100%'}}>
        Submit
      </Button>
    </Form>
    </Container>
            </Col>
        </Row>
    </Container>
  )
}

export default Appoinment