import React from "react"
import { Col, Container, Row } from "reactstrap";
import Iframe from "react-iframe";
import "../App.css"; 

const Testimonial = () => {
    return (
        <div>
            <Container>
                <p style={{ fontFamily: "Mongolian Baiti", fontSize: '25px', }}><b>Our Testimonials,</b></p></Container>
            <Container >
                <Row >
                    <Col lg={4} className="nope"><br></br> 
                        <Iframe width="350" height="250" src="https://www.youtube.com/embed/RFTUlT9ZjBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                    </Col>
                    <Col lg={4} className="nope"><br></br> 
                        <Iframe width="350" height="250" src="https://www.youtube.com/embed/JFeQZkgWZaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                    </Col>
                    <Col lg={4} className="nope"><br></br> 
                        <Iframe width="350" height="250" src="https://www.youtube.com/embed/GqZf63HNV3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Testimonial;