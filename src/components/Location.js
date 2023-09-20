import { React } from "react";
import { Container, Row, Col } from "reactstrap";
import Iframe from "react-iframe";
import "../App.css";


const Location = () => {
    return(
        <div>
        <Container>
        <p style={{ fontFamily: "Mongolian Baiti", fontSize: '25px',}}><b>We're located in,</b></p></Container>

        <Container style={{backgroundColor:'#F8F9F9'}}>
            <Row>
           {/* <Col lg={2}  className='iframe'>
           <img style={{height:'100px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_5IxZLVPx6lU9mBYEMT-82UAKp2foxz7otFf_cV8ggHezrq23z_I6daVo-xanIlFMHY&usqp=CAU" />
           </Col> */}
            <Col lg={4} className="nope">
            <div><img style={{height:'55px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_5IxZLVPx6lU9mBYEMT-82UAKp2foxz7otFf_cV8ggHezrq23z_I6daVo-xanIlFMHY&usqp=CAU" /></div>
                <div><p>No: 126A,<br></br>Therkku Bazaar, Near to Palay Market,<br></br>Palayamkottai, Tirunelveli - 627 012. </p></div>
                </Col>
                <Col lg={4}>
                <center><img style={{height:'250px'}} src={require("../assets/mama.jpg")}/></center>
                </Col>
                <Col lg={4} className='nope'>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126195.47899758397!2d77.63306911905796!3d8.728653178577874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b0411526830e853%3A0xe5fb99804c4e69a!2sOn%20the%20way%20to%20nellaiappar%20temple%2C%20Swami%20Nellaiappar%20High%20Rd%2C%20Gandhi%20Nagar%2C%20Thirunagar%2C%20Tirunelveli%20Town%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627006!3m2!1d8.7286596!2d77.7031097!5e0!3m2!1sen!2sin!4v1675326138591!5m2!1sen!2sin" width="400" height="200" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}
export default Location;