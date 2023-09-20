import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from "react-bootstrap";
import {
        Navbar,
        NavbarToggler,
        Collapse,
        Nav,
        Container,
        Row,
        Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import '../App.css';
// import { Button } from "react-bootstrap";
// import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Footer } from "rsuite";


function Contact() {
        const [isOpen, setIsOpen] = React.useState(false);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
                <div style={{
                        display: 'block', width: '100%', maxWidth: '100%'
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

                        <h6 style={{ color: 'red', fontFamily: 'Lucida Handwriting', textAlign: 'center', fontSize: '40px' }}>MaMa  <span style={{ fontFamily: "Lucida Handwriting", fontSize: '25px', color: 'black' }}>kadai</span></h6>
                        <p style={{ fontFamily: 'Garamond', textAlign: 'center', marginTop: '10px' }}>Since 1952</p>
                        <Accordion flush>
                                <Accordion.Item eventKey="0">
                                        <Accordion.Header>Veg</Accordion.Header>
                                        <Accordion.Body >
                                                <Container ><br></br>
                                                        <center style={{ fontSize: '25px', fontFamily: 'Century Gothic' }}>Food that’s good for your heart.</center><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/idli1.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Idli</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                {/* <Button id="idli" variant="outline-dark" onClick={handleShow}>
                                                                                        Consists of
                                                                                </Button>
                                                                                        <Modal show={show} onHide={handleClose}>
                                                                                                <Modal.Header closeButton>
                                                                                                        <Modal.Title style={{ fontFamily:'Goudy Old Style'}}>Idli</Modal.Title>
                                                                                                </Modal.Header>
                                                                                                <Modal.Body><h3>Price:  ₹20</h3><p></p><div>It Consists: Couple of Idli, Idli podi, Sambar, Chutney and One Vada.</div>
                                                                                                </Modal.Body>
                                                                                        </Modal> */}
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Idli-2Pcs, Sambar, Chutney and Idli podi.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/dosa.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Dosa</b></div><span>Price:</span><span> ₹25</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists:<p>* Dosa-1, Sambar, Chutney-2 and Idli podi.</p><p>* We've varieties of Dosa's like Masala Dosa(₹35), Onion Dosa(₹35), Spl. Vegetable dosa(₹55).</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/chapaThi.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Chapathi</b></div><span>Price:</span><span> ₹25</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Chapathi-2, Veg-kurma, Sambar.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/puTTu.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Puttu</b></div><span>Price:</span><span> ₹35</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Puttu with (Pasi payiru and 1pc of Banana / Kadalai curry).</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/idiyappam1.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Idiyappam</b></div><span>Price:</span><span> ₹30</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 3pcs of Idiyappam with Kadalai curry.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/aapam.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Aapam</b></div><span>Price:</span><span> ₹25</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Aapam with (Coconut milk / Kadalai curry).</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row>
                                                </Container>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                        <Accordion.Header>Non-Veg</Accordion.Header>
                                        <Accordion.Body>
                                        <Container ><br></br>
                                                        <center style={{ fontSize: '25px', fontFamily: 'Century Gothic' }}>Wake up your taste buds!.</center><br></br>
                                                        <Row>
                                                        <center style={{fontFamily:'Candara', fontSize:'20px', backgroundColor:'#F0F3F4', padding:'10px'}}>Main course</center>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/paroTTa.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Parotta</b></div><span>Price:</span><span> ₹30</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 3pcs of parotta with gravy.</p> </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/koThu paroTTa.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Kothu Parotta</b></div><span>Price:</span><span> ₹80</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">Served with Gravy and Kothu parotta.</Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/briyani.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Chicken Briyani</b></div><span>Price:</span><span> ₹120</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 1Chicken briyani, Raitha, Thayir vengayam and 1Boiled egg.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/muTTon briyani.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Mutton Briyani</b></div><span>Price:</span><span> ₹160</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 1Mutton briyani, Raitha, Thayir vengayam.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/chicken meals.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Chicken Meals</b></div><span>Price:</span><span> ₹160</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* White rice-unlimited, Chicken gravy, Omelette-1, Chicken 65-5Pcs.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/muTTon meals.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Mutton Meals</b></div><span>Price:</span><span> ₹220</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* White rice-unlimited, Chicken gravy, Omelette-1, Fried mutton-5Pcs.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                        <center style={{fontFamily:'Candara', fontSize:'20px', backgroundColor:'#F0F3F4', padding:'10px'}}>Gravy's</center>
                                                        <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/muTTon sukka.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Mutton Chukka</b></div><span>Price:</span><span> ₹120</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* A bowl of Mutton chukka weighs about 150gs.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/chicken 65.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Chicken 65</b></div><span>Price:</span><span> ₹45</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 6pcs of Chicken 65.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/chilli chicken.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Chilli Chicken</b></div><span>Price:</span><span> ₹110</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Juicy and Spicy chicken gravy.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                        <center style={{fontFamily:'Candara', fontSize:'20px', backgroundColor:'#F0F3F4', padding:'10px'}}>Egg varieties</center>
                                                       
                                                                <Col lg={2}> <br></br>
                                                                        <center><img className="img1" src={require("../assets/omeleTTe.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Omelette</b></div><span>Price:</span><span> ₹15</span>
                                                                                <div>
                                                                                        {/* <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Couple of Idli, Idli podi, Sambar, Chutney and </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown> */}
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/half boil1.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Half Boil</b></div><span>Price:</span><span> ₹15</span>
                                                                                <div>
                                                                                        {/* <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: Couple of Idli, Idli podi, Sambar, Chutney and </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown> */}
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/half boil.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Boiled Egg</b></div><span>Price:</span><span> ₹10</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 1 Boiled egg.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row>
                                                </Container>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                        <Accordion.Header>Snacks & Desserts</Accordion.Header>
                                        <Accordion.Body>
                                        <Container ><br></br>
                                        <center style={{ fontSize: '25px', fontFamily: 'Century Gothic' }}>From farm to Plate.</center><br></br>
                                                        <Row>
                                                        <center style={{fontFamily:'Candara', fontSize:'20px', backgroundColor:'#F0F3F4', padding:'10px'}}>Kaaram</center>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/vada.jpg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Vadai (Ulundhu)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 4pcs of Vada with Sambar and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/paruppu vada.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Vadai (Paruppu)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 4pcs of Vada with Sambar and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/keerai vada.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Vadai (Keerai)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 3pcs of Vada with Sambar and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/vaazhaipoo vada.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Vadai</b></div><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>(Vaazhaipoo)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Vada with Sambar and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/kaara paniyaram1.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Paniyaram</b></div><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>(Kaaram)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 4pcs of Paniyaram with Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/mil bajji.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Bajji (Chilli)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Chilli Bajji with Sambar and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/oni bajji.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Bajji (Onion)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Onion Bajji with and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/ban bajji.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Bajji (Banana)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Banana Bajji with and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/poT bajji.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Bajji (Potato)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 2pcs of Potato Bajji with and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                        <center style={{fontFamily:'Candara', fontSize:'20px', backgroundColor:'#F0F3F4', padding:'10px'}}>Sweets</center>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/ini paniyaram.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Paniyaram</b></div><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b> (Sweet)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 4pcs of Sweet Paniyaram with and Chutney.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/karu paniyaram1.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Paniyaram</b></div><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b> (Karupatti)</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* 3pcs of Karupatti Paniyaram.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}><br></br>
                                                                        <center><img className="img1" src={require("../assets/ulu kali.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Ulundham Kali</b></div><span>Price:</span><span> ₹45</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists:<p>* A bowl of Ulundham Kali weighs about 100g.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row>
                                                </Container>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                        <Accordion.Header>Beverages</Accordion.Header>
                                        <Accordion.Body>
                                        <Container ><br></br>
                                                        <center style={{ fontSize: '25px', fontFamily: 'Century Gothic' }}>Good sip for Good moments..</center><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/paru paal.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Paruthi paal</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Paruthi paal" made up of "Paruthi(Cotton seed)".</p> <p>* One of the Healthiest and Sweetest porridge ever.</p> </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/keppai kool.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Keppai koozh</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Raagi porridge" made up of "Raagi". </p>
                                                                                                        <p>* One of the Healthiest porridge.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/kambu kool.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Kambu koozh</b></div><span>Price:</span><span> ₹25</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Kambu porridge" made up of "Kambu".</p> <p>* One of the Healthiest porridge ever.</p> </Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                        </Row><br></br><br></br>
                                                        <Row>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/Tea.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Thulasi tea</b></div><span>Price:</span><span> ₹15</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Thulasi Tea" made up of "Thulasi(Mint)".</p> <p>* An Refreshment Tea.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/mil paal.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Milahu paal</b></div><span>Price:</span><span> ₹20</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Milahu Paal" made up of "Milahu(Black pepper), Manjal(Turmeric), Sukku(Dry Ginger)".</p> <p>* A tea which helps to heal your flu and cold.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div></p></center>
                                                                </Col>
                                                                <Col lg={2}>
                                                                        <center><img className="img1" src={require("../assets/karu coffee.jpeg")} /></center></Col>
                                                                <Col lg={2} className='foods'>
                                                                        <center><p><div style={{ fontFamily: 'Goudy Old Style', fontSize: '20px', }}><b>Karupatti coffee</b></div><span>Price:</span><span> ₹25</span>
                                                                                <div>
                                                                                        <Dropdown>
                                                                                                <Dropdown.Toggle id="dropdown-button-outline-dark-example1" variant="outline-dark">
                                                                                                        Consists
                                                                                                </Dropdown.Toggle>
                                                                                                <Dropdown.Menu variant="primary">
                                                                                                        <Dropdown.Item href="#/action-2">It Consists: <p>* Glass of "Karupatti Coffee" made up of "Karupatti(Palm jaggery)".</p> <p>* A best replacement for Sugar tea/coffee.</p></Dropdown.Item>
                                                                                                </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                </div>
                                                                        </p></center>
                                                                </Col>
                                                        </Row>
                                                </Container>
                                        </Accordion.Body>
                                </Accordion.Item>
                        </Accordion>
                        <Footer style={{marginTop:'60px',}}>
                   
                     <p style={{fontSize:'15px', textAlign:'center'}}> © 1996-2022 P012. All Rights Reserved.</p>
                   
                 </Footer>
                </div >
        );
}

export default Contact;
