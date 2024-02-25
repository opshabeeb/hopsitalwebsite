import React from 'react'
import './Services.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Instagram,HeartPulseFill,} from 'react-bootstrap-icons';
import { faBrain,faXRay,faWheelchair,faTooth,faVials,faPlus,faHeartPulse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Services() {
  const ServiceData=[
    {
      icon:faHeartPulse,
      title:'Cardiology',
      text:"Discover superior heart care at our Cardio Department. Advanced diagnostics, expert consultations, innovative treatments – all tailored for you. Get back to the beat of life. Schedule now.",

    },

    {
      icon:faXRay,
      title:'Pulmonary',
      text:"Breath Easy with Our Pulmonary Department. Cutting-edge diagnostics, expert consultations, and personalized treatments. Let us help you breathe freely again. Book your appointment today.",
    },
    {
      icon:faBrain,
      title:'Neurology',
      text:"Empowering Minds, Healing Lives. Our Neurology Department offers expert care, precise diagnostics, and innovative treatments. Trust us with your neurological health. Schedule your consultation now.",
    },
    {
      icon:faWheelchair,
      title:'Orthopedics',
      text:"Move Freely Again with Our Orthopedics Department. From diagnosis to recovery, we're here for you. Regain strength and mobility. Schedule your appointment today."
    },
    {
      icon:faTooth,
      title:'Dental Surgery',
      text:'Smile Confidently with Our Dental Surgery Team. Expert care, gentle hands, and personalized treatments for a brighter, healthier smile. Transform your dental health today.'
    },
    {
      icon:faVials,
      title:'Laboratory',
      text:"Precision in Every Test. Our Laboratory Department delivers accurate results with efficiency and care. Trust us for all your diagnostic needs. Schedule your lab test today."
    }
  ]
  return (
    <Container className='mb-5 '>
        <div className='text-center'>
         <button className='service'>services</button>
        <h1 className='service-title'>Health Care Solutions</h1>
        </div>
        <Row className='pb-5' style={{backgroundColor:'aliceblue'}}>
          {
            ServiceData.map((data,index)=>(
              <Col style={{backgroundColor:'aliceblue'}}>
              <Card style={{ width: '19rem'}} className='service-card' key={index}>
              <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 mt-5 ms-3" style={{width:'65px',height:'65px'}}>
                                <FontAwesomeIcon icon={data.icon} className='fs-3 text-primary text-center' />
                               
                            </div>
          <Card.Body>
            <Card.Title><h4>{data.title}</h4></Card.Title>
            <Card.Text>
              {data.text}
            </Card.Text>
            
           <a href="" className='btn readmore btn-service'><FontAwesomeIcon icon={faPlus} className='fs-4 text-primary text-center' /><span className='readmore-text'>read more</span></a>
                            </Card.Body>
        </Card>
              </Col>
            ))
          }
          
        </Row>
    </Container>
  )
}

export default Services