import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const Section1 = () => {
    return(
        <Container >
            <p style={{fontFamily:'Garamond', textAlign:'center', marginTop:'10px'}}>Since 1952</p>
            <Row style={{marginTop:'50px'}}>
              <Col lg={6} className="section1" style={{textAlign:'center'}} >
                <img className="paroTTa1" src={require("../assets/rice2.jpg")} ></img>
              </Col>
              <Col lg={6} className="section1" >

                <p ><span style={{fontFamily:"Gabriola", fontSize:'40px' }}>The Taste of Tirunelveli!</span><br></br>
                <span style={{fontFamily:'Calisto MT',}}>Parotta, a south indian flat bread prepared with flour. All purpose flour is the only main ingredient needed for this parotta, but the making of this parotta requires lot of time and work.</span></p>
              </Col>
            </Row>
        </Container>
    );
}

export default Section1;