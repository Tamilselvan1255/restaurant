import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	Container,
        Col,
        Row
} from 'reactstrap';
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { Footer } from "rsuite";

function About() {
        const [isOpen, setIsOpen] = React.useState(false);
	         return (
		  <div style={{
			 display: 'block', width: '100%', maxWidth:'100%'
		 }}>
			  <Navbar color="light" light expand="md">
                          <div className="nav-logo">
                                <img
                                src="https://i.pinimg.com/564x/26/b4/f5/26b4f5d56a4b0f8dafc6e6277114aa31.jpg"
                                alt="Logo"
                                className="logo"
                                width="32"
                                height="32"
                                />
                        </div>  
				 <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				 <Collapse isOpen={isOpen} navbar >
					 <Nav className="nav" navbar>	
                                                <li>
                                                <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                <Link to="/contact">Menu</Link>
                                                </li>
                                                <li>
                                                <Link to="/about">Contact</Link>
                                                </li>
                                        </Nav>
                                </Collapse>
                          </Navbar>
                                
                          <h6 style={{color:'red',  fontFamily:'Lucida Handwriting', textAlign:'center', fontSize:'40px'}}>MaMa  <span style={{fontFamily:"Lucida Handwriting", fontSize:'25px', color:'black'}}>kadai</span></h6>
                          <p style={{fontFamily:'Garamond', textAlign:'center', marginTop:'10px'}}>Since 1952</p>
                          <Container style={{marginTop:'50px'}}>
                 
                
                 <h5><u>Chief Cook:</u></h5>
                 <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. Nallaiah</b> </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                 
                 <Row><Col>B.B.A</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                 <br></br><br></br>
 
 
                 <h5><u>For Catering Orders:</u></h5>
                 <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. Vasantha Rajan</b>  </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                
                 <Row><Col>B.B.A</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                 <br></br><br></br>
 
                 <h5><u>For Queries and Concerns:</u></h5>
                 <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. Aswin</b>  </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                 B.E 
                 <Row><Col>Founder of MaMa kadai</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                 </Container>
                 <Footer style={{marginTop:'60px',}}>
                     <p style={{fontSize:'15px', textAlign:'center'}}> © 1996-2022 P012. All Rights Reserved.</p>
                 </Footer>
                  </div >
		);
}

export default About;

