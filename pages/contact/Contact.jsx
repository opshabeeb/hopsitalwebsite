import React from 'react'
import './Contact.css'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { faPhone,faEnvelopeOpen,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Contact() {
    const HandleOnsubmit=(event)=>{
        window.alert('thank you for conatcting us we will reach you soon')
    }
  return (
    <Container className='mt-5 mb-5'>
        <Row>
            <Col className='call-us rounded d-flex align-items-center p-5 mb-3 ms-2'>
            <div className='d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white' style={{width:'60px',height:'50px'}}>
           <FontAwesomeIcon icon={faLocationArrow} className='fs-3 text-primary text-center' />
           </div>
           <div className="ms-4">
            <p className='mb-2'>Address</p>
            <h5 className='mb-0'> Malappuram,Kerla</h5>
           </div>
            </Col>
            <Col className='call-us rounded d-flex align-items-center p-5 mb-3 ms-2'>
            <div className='d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white' style={{width:'60px',height:'50px'}}>
           <FontAwesomeIcon icon={faPhone} className='fs-3 text-primary text-center' />
           </div>
           <div className="ms-4">
            <p className='mb-2'>Call-Us Now</p>
            <h5 className='mb-0'>+919567992225</h5>
           </div>
            
            </Col>
            <Col className='call-us rounded d-flex align-items-center p-5 mb-3 ms-2'>
            <div className='d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white' style={{width:'60px',height:'50px'}}>
           <FontAwesomeIcon icon={faEnvelopeOpen} className='fs-3 text-primary text-center' />
           </div>
           <div className="ms-4">
            <p className='mb-2'>Mail-Us</p>
            <h5 className='mb-0'>carescape@gmail.com</h5>
           </div>
              
            </Col>
        </Row>
        <Row>
            <Col>
              <Container fluid>
                 <Button className='contact'>Conatct Us</Button>
                 <h1>Have any Query? Please Contact Us</h1>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt a qui doloremque doloribus, impedit maxime, distinctio repellat sed iure deleniti accusantium quidem velit tempora quis quo ea laudantium? Quis, nemo?</p>

                 <Form onSubmit={HandleOnsubmit}>
      <Row className="mb-4 p-2">
        <Form.Group as={Col} controlId="formName">
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Row>
      <Row className="mb-4 p-2">
      <Form.Group controlId="subject">
          <Form.Control type="text" placeholder="subject" />
        </Form.Group>
      </Row>
      

      <Form.Group className="mb-4 p-2" controlId="formMessage">
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{width:'100%'}}>
        Submit
      </Button>
    </Form>
              </Container>
            </Col>
            <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15663.334482537733!2d76.07399945!3d11.05109795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708835132339!5m2!1sen!2sin" width="600" height="600" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact