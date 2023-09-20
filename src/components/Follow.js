import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const Follow = () => {
    return (
        <div>
            <center><p style={{ fontFamily: "Mongolian Baiti", fontSize: '35px', }}>Follow us on</p></center><br></br>
            <Container>
                <Row>
                    
                <Col lg={3} className='nope'>
                        <span><a href="https://whatsapp.com/"><img className="icon" src={require("../assets/whaTsapp.png")} /></a></span>
                        
                </Col>
                <Col lg={3}><span style={{paddingLeft:'60px'}}><a href="https://facebook.com/"><img className="icon" src={require("../assets/facebook.png")} /></a></span></Col>
                <Col lg={3}><span style={{paddingLeft:'60px'}}><a href="https://instagram.com/"><img className="icon" src={require("../assets/insTaGram.png")} /></a></span>
</Col>
                <Col lg={3}><span style={{paddingLeft:'60px'}}><a href="https://twitter.com/"><img className="icon" src={require("../assets/TwiTTer.png")} /></a></span>
</Col>
                </Row>    
            </Container>
            
        </div>
    )
}

export default Follow;