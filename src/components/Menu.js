import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const Menu = () => {
    return (
        <Container className="justify-content-center align-items-center">
            <h2 style={{ fontFamily: "Stencil Std", fontSize: '35px', textAlign: 'center' }}>Popular Menu</h2><br></br><br></br>
            <Row>
            <Col lg={2}>
            <center> <img className="img" src={require("../assets/briyani1.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>Kothu Parotta</b></div><div style={{fontFamily:'', fontSize:'15px'}}>Fluffy & Softer parotta which ease to digest.</div></p>
                </Col>
                <Col lg={2}>
                <center> <img className="img" src={require("../assets/chicken.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                    <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>Chicken 65</b></div><div style={{fontFamily:'', fontSize:'15px'}}>We use love for cooking so that we can give the fast foods also as a Healthier One.</div></p>
                </Col>
                <Col lg={2}>
                <center> <img className="img" src={require("../assets/muTTon sukka.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                    <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>Mutton Sukka</b></div><div style={{fontFamily:'', fontSize:'15px'}}>We use love for cooking so that we can give the fast foods also as a Healthier One.</div></p>
                </Col>
            </Row><br></br><br></br><br></br>
            <Row>
                <Col lg={2}>
                <center>  <img className="img" src={require("../assets/Grill.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                    <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>Grill</b></div><div style={{fontFamily:'', fontSize:'15px'}}>We use love for cooking so that we can give the fast foods also as a Healthier One.</div></p>
                </Col>
                <Col lg={2}>
                <center> <img className="img" src={require("../assets/Tandoori.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                    <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>Tandoori</b></div><div style={{fontFamily:'', fontSize:'15px'}}>We use love for cooking so that we can give the fast foods also as a Healthier One.</div></p>
                </Col>
                <Col lg={2}>
                   <center> <img className="img" src={require("../assets/bbq.jpg")} /></center></Col>
                <Col lg={2}  className='foods'>
                    <p><div style={{fontFamily:'Goudy Old Style', fontSize:'20px'}}><b>BBQ</b></div><div style={{fontFamily:'', fontSize:'15px'}}>We use love for cooking so that we can give the fast foods also as a Healthier One.</div></p>
                </Col>
               
            </Row>
        </Container>
    );
}
export default Menu;