
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import './Header.css'
import { ArrowRight,GeoAltFill,Facebook,Instagram,Twitter,Whatsapp,Telephone } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Header() {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    
    {
      title: "Pages",
      dropdown: true,
      items: [
        { title: "Feature", path: "/features" },
        { title: "Our Doctors", path: "/doctors" },
        { title: "Appoinment", path: "/appoinment" },
       
      ],
    },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <>
    <Container fluid className="top">
      <Row>
        <Col xs={3}>
        <p><span className="me-2"><GeoAltFill/></span>123 Street, New York, USA</p>
        </Col>
        <Col style={{alignItems:'center'}}>
        <p>24 * 7  service</p></Col> 
        <Col style={{textAlign:'right'}}>
        <Telephone />+919567992225
        </Col>
        <Col style={{textAlign:'right'}} >
           <Facebook className="icon"/> <Whatsapp className="icon"/><Instagram className="icon"/> <Twitter className="icon"/> 
        </Col>
      </Row>
       
    </Container>

    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" height={"55px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" ,justifyContent:'center',alignItems:'center'}}
            navbarScroll
          >
            {" "}
            {navItems.map((item, index) =>
              item.dropdown ? (
                <NavDropdown className="navitems"
                  key={index}
                  title={item.title}
                  id="navbarScrollingDropdown"
                >
                  {item.items.map((dropdownItem, subIndex) => (
                    <NavDropdown.Item key={subIndex} href="#action3" className="drop">
                     <Link to={dropdownItem.path} className="link-text"> {dropdownItem.title}</Link>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link href="#action1" className="navitems">
                  <Link to={item.path} className="link-text">{item.title}</Link> 
                </Nav.Link>
              )
            )}
            <Container className="make">
            
            <a href="" className="btn btn-primary rounded-2 py-3 px-lg-5 d-none d-lg-block fs-4" ><span className="fw-bold">Appointment </span><ArrowRight/></a>
            </Container >
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </>
  );
}

export default Header;
