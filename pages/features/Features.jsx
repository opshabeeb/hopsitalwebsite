import React from "react";
import Row from "react-bootstrap/Row";
import { Col, Container } from "react-bootstrap";
import "./Features.css";
import {
  faUserMd,
  faCheck,
  faCommentMedical,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Display } from "react-bootstrap-icons";
import feature from '../../assets/feature1.jpg'

function Features() {
    const featureData=[
        {
            icon:faUserMd,
            text1:'Experienced',
            text2:'Doctors'
        },
        {
            icon:faCheck,
            text1:'Quality',
            text2:'Service'
        },
        {
            icon:faCommentMedical,
            text1:'Positive',
            text2:'Consultation'
        },
        {
            icon:faHeadphones,
            text1:'24 Hours',
            text2:'Support'
        },

    ]
  return (
    <div>
      <Container fluid className="features-container bg-primary mb-5">
  <Row>
    <Col lg={6} className="bg-primary p-5" style={{padding:'0',margin:'0' }}>
      <p className="features text-light fs-5">Features</p>
      <h1 className="text-light features-title">Why Choose Us</h1>
      <p className="text-light features-text">
        Experience the difference at CARESCAPE. Our team of experienced
        doctors, nurses, and specialists are dedicated to ensuring your
        health and well-being. Trust us with your health and well-being.
        Schedule your appointment today.
      </p>
      <Row className="mt-5">
        {featureData.map((data, index) => (
          <Col key={index} xs={6}>
            <Row className="align-items-center mb-4">
              <Col xs='auto'>
                <div className="fe-doc d-flex align-items-center justify-content-center rounded-circle bg-light">
                  <FontAwesomeIcon
                    icon={data.icon}
                    className="text-primary fs-3"
                  />
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-start">
                <div className="text-light">
                  <p className="mb-0">{data.text1}</p>
                  <p className="mb-0 fs-5" style={{fontWeight:'700'}}>{data.text2}</p>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
    <Col lg={6}>
    <img src={feature} alt="" style={{ width: '100%', height: 'auto',padding:'0',margin:'0' }} />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default Features;
