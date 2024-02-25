import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import logo from "../../assets/logo.png";
import './Footer.css'
import { ArrowRight,GeoAltFill,Facebook,Instagram,Twitter,Whatsapp,Telephone,Envelope, } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container1'>
        <Container fluid>
            <Row>
                <Col sm>
                <h3>CARESCAPE</h3>
                <h4>Address</h4>
                <p><GeoAltFill/>&nbsp;Malappuram,Kerla</p>
                <p><Telephone/>&nbsp; +919567992225</p>
                <p><Envelope/>&nbsp;medicare@gmail.com</p>
                <Facebook className='social' /> <Whatsapp className='social' /><Instagram className='social' /> <Twitter className='social' />
                </Col>
                <Col sm style={{marginTop:'40px'}}>
                <h4 >Services</h4>
                <ul style={{listStyleType:'none'}} className='services'>
                    <li><span>&#62;</span>Cardiology</li>
                    <li><span>&#62;</span>Pulmonary</li>
                    <li><span>&#62;</span>Neurology</li>
                    <li><span>&#62;</span>Orthopedics</li>
                    <li><span>&#62;</span>Laboratary</li>
                </ul>
                </Col>
                <Col sm style={{marginTop:'40px'}}>
                <h4 >Quick Links</h4>
                <ul style={{listStyleType:'none'}} className='services'>
                  <Link to={'/about'} className='link-text'><li><span>&#62;</span>About-Us</li></Link> 
                  <Link to={'/contact'} className='link-text'><li><span>&#62;</span>Contact-Us</li></Link>  
                  <Link to={'/services'} className='link-text'><li><span>&#62;</span>Our Services</li></Link>  
                    <li><span>&#62;</span>Terms & Condition</li>
                    <li><span>&#62;</span>Support</li>
                </ul>
                </Col>
                
            </Row>
            <Row style={{borderTop:'1px solid black'}} className='copy'>
                <Col >
                <p>&copy;carescape, all right recerved </p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p>Designed by MSOP</p>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Footer