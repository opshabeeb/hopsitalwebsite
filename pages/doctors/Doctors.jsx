import React from "react";
import "./Doctor.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import doctor1 from "../../assets/doctor1.jpg";
import team1 from '../../assets/team-1.jpg'
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import doctorn from "../../assets/doctorn.jpg";
import doctor3 from "../../assets/doctor3.jpg";
import doctor4 from "../../assets/doctor4.jpg";

function Doctors() {
  const DoctorsData=[
     {
      name:'Alexia Putella',
      department:'Dental Surgery',
      image:doctor1
     },
     {
      name:'David Villa',
      department:'Neuro Srugery',
      image:doctorn
     },
     {
      name:'Karim Benzema',
      department:'Cardiology',
      image:doctor3
     },
     {
      name:'Nivin Pauly',
      department:'Dental Surgery',
      image:doctor4
     },
  ]
  return (
    <Container className="mb-5">
      <div className="text-center">
        <button className="Doctor">Doctors</button>
        <h1 className="doctor-title mb-5">Our Experience Doctors</h1>
      </div>
      <Row className=" doctor-cards">
        {
          DoctorsData.map((data,index)=>(
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3 ">
  <Card key={index} className="custom-card" style={{ width: '16rem',backgroundColor:'aliceblue' }}>
    <div className="card-img-wrapper">
      <Card.Img variant="top" src={data.image} className="card-img" height={'300px'} />
    </div>
    <Card.Body className="doctorcard-body">
      <Card.Title className="doctorcard-title">{data.name}</Card.Title>
      <Card.Text className="doctor-text">{data.department}</Card.Text>
      <div className="icon-container ">
        <a className="btn card-icons text-primary" href="#"><Facebook/></a>
        <a className="btn card-icons text-primary" href="#"><Instagram/></a>
        <a className="btn card-icons text-primary" href="#"><Twitter/></a>
      </div>
    </Card.Body>
  </Card>
</Col>
          ))
        }
</Row>
    </Container>
  );
}

export default Doctors;
