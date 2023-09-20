import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand
} from 'reactstrap';
import { Link } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Menu from "./Menu";
import Location from "./Location";
import Delivery from "./Delivery";
import Title from "./Title";
import Testimonial from "./Testimonial";
import Follow from "./Follow";


function Home() {
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
                          <Title /> 
                        <Section1 />
                        <Section2 /><br></br> <br></br> <br></br>
                        <Menu /> <br></br> <br></br> <br></br>
                        <Testimonial /> <br></br> <br></br> <br></br> 
                        <Location /><br></br>  <br></br> 
                       
                        <Follow /><br></br> <br></br> <br></br> 
                         <Delivery /><br></br> <br></br>
                 </div >
		);
}

export default Home;

