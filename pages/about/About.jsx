import React from 'react'
import './About.css'
import home from '../../assets/Homeimg.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { CheckCircle} from 'react-bootstrap-icons';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'

function About() {
  return (
    <Container fluid className='mt-5'>
  <Row className="aboutImage">
  
    <Col xs={12} lg={{ offset:1 }} className="position-relative mb-3 mb-lg-0">
      <img src={about2} alt="Main Image" className="img-fluid mainimage" />
      <img src={about1} alt="Main Image" className="img-fluid Corner-Image" />
    </Col>
    <Col xs={12} lg={6}>
    <p className='about'>About-Us</p>

      <h1 className='about-title'>Why You Should Trust Us? Get Know About Us!</h1>
      <br />
      <p className='about-p'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>

      <p><CheckCircle className='text-primary me-2' />Quality health care</p>
      <p><CheckCircle className='text-primary me-2' />Only Qualified Doctors</p>
      <p><CheckCircle className='text-primary me-2' />Medical Research Professionals</p>

      <button className='btn btn-primary Read'>Read More</button>
    </Col>
  </Row>
</Container>
  )
}

export default About