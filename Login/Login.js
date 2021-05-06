import React from "react";
import "./Login.css";
import logo from "./logo.png";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Box from "@material-ui/core/Box";

function Register() {
  const Login = () => {
    alert(" Login Successfull");
  };
  return (
    <React.Fragment>
      <Navbar bg="light" variant="dark">
      <Navbar.Brand href="#home">
      <img
        alt="Navyat"
        src={logo}
        width="80"
        height="100"
        className="d-inline-block align-top"
      />
      <span className="Logo_heading">Navyat</span>
      </Navbar.Brand>
    </Navbar>
    <Container>
    <Row>
    <Col></Col>
    <Col>
      <Container>
        <div className="outer_div">
          <Container fluid className="Border">
            <Row>
              <Col xs={2}>
                <button id="btnBack">
                <i className="fas fa-chevron-circle-left fa-2x p-2"></i>
                </button>
              </Col>
              <Col xs={10}>
              <h3 className="Heading">
                    <span className="h4 text-center" id="head">Login/Register</span>
                </h3>
              </Col>
            </Row>
          </Container>
        
                
                <div className="inner_div">
                  <br />
                  <Container>
                    <Row>
                      <Col xs={12}>
                       <input type="text" id="input" placeholder="Email ID or Phone Number" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="mt-0 mb-5 right-align" id="req">REQUIRED</div>
                      </Col>
                    </Row>
                  </Container>
                  <br />
                  <br />
                  <br /><br />
                  <br />
                  <br /><br />
                  <br />
                  <br /><br />
                  
                  <Box textAlign="center">
                    <button id="btn" onClick={Login}>
                      Register
                    </button>
                  </Box>
                </div>
              </div>
      </Container>
    </Col>
    <Col></Col>
  </Row>
    </Container>
    </React.Fragment>
  );
}


export default Register;
