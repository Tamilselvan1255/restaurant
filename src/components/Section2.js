import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import { Carousel } from "react-bootstrap";

const Section2 = () => {
    return(
        <div >
        <Container style={{backgroundColor:'#f3f8fc'}}>
            <Row>
              <Col lg={6} className="section2" >
               
                <p ><span style={{fontFamily:"Gabriola", fontSize:'40px' }}>South Indian Dishes!!</span><br></br>
                <span style={{fontFamily:'Calisto MT'}}>We're serving authentic south indian dishes with love! Also MaMa kadai is not only for non-veg lovers, we've enormouse number of Veg dishes also such as Idli, Dosa, Idiyappam and Sappathi. </span></p>
              </Col>
              <Col lg={6} className="section2" style={{textAlign:'center'}}>
                <Carousel>
                <Carousel.Item>
                    <img className="rice" src={require("../assets/idli.jpg")} style={{borderRadius:'3%'}}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="rice" src={require("../assets/paroTTa2.jpg")} style={{borderRadius:'3%'}}></img>
                </Carousel.Item>
                <Carousel.Item> 
                    <img className="rice" src={require("../assets/idiyappam.jpg")} style={{borderRadius:'3%'}}></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="rice" src={require("../assets/chapaThi1.jpg")} style={{borderRadius:'3%'}}></img>
                </Carousel.Item>
                  <Carousel.Item>
                    <img className="rice" src="https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Farticles%2Fn5cfa29bwrn.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1200&q=75" style={{borderRadius:'3%'}}></img>
                </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Section2;