import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import './Home.css'
import Homeimg from '../../assets/home.jpeg'
import Doctors from '../doctors/Doctors';
import About from '../about/About';
import Services from '../services/Services';
import Features from '../features/Features';
import Appoinment from '../appoinment/Appoinment';

function Home() {
  return (
    <>
    <Container fluid className='bg-primary home-container'>
      <Row className="align-items-center">
        <Col lg={6} className="p-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-4 text-white mb-5 centered-text">Good Health Is The Root Of All Happiness</h1>
          <Row className="g-4">
            <Col sm={6} md={4}>
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" >123</h2>
                <p className="text-light mb-0">Expert Doctors</p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1">450+</h2>
                <p className="text-light mb-0" >Medical Staff</p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1">5000+</h2>
                <p className="text-light mb-0">Total Patients</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <img src={Homeimg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    <About/>
    <Services/>
    <Features/>
    <Doctors/>
    <Appoinment/>
    </>
  )
}

export default Home