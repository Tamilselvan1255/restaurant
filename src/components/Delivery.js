import React from "react"
import { Container, Row } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "rsuite";

const Delivery = () => {
    return (
        <div>
            <Container>

                <center><li style={{ listStyle: 'none' }}>
                    <Link to="/about"><Button variant="outline-dark">Orders for Festivals and Parties are very Welcome!</Button></Link>
                </li> </center>
            </Container><br></br>
            <Footer style={{ marginTop: '40px', }}>
                    <p style={{ fontSize: '15px', textAlign: 'center' }}> © 1996-2022 P012. All Rights Reserved.</p>
            </Footer>
        </div>

    )
}
export default Delivery;