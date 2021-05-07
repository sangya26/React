import React, {useState} from "react";
import { Navbar, Row, Col, Nav, Form, InputGroup, FormControl} from "react-bootstrap";
import logo from "./logo.png";
import "./ProfilePage.css";
import Box from "@material-ui/core/Box";
import Overview from './Overview';
import Orders from './Order';
import Cash from './Cash';

function ProfilePage(){
    const [show, showState] = useState("Overview");
    
    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" height="50" width="70"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home"><i class="fas fa-home fa-2x"></i></Nav.Link>
                <Nav.Link href="#link"><i class="fas fa-certificate fa-2x "></i> PREMIUM</Nav.Link>
                <Nav.Link href="#link"><i class="fas fa-percent fa-2x"></i> OFFER</Nav.Link>
                <Nav.Link href="#link"><i class="fas fa-shopping-bag fa-2x"></i> RENT</Nav.Link>
                <Nav.Link href="#link"><i class="fas fa-bars fa-2x"></i></Nav.Link>
            </Nav>
            <Form>
            <Form.Row>
            <Col xs="auto">
            <InputGroup  className="mb-2">
            <FormControl placeholder="search" type="search" />
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
            <i class="fas fa-search"></i>
            </InputGroup.Text>
            </InputGroup.Prepend>
            </InputGroup>
            </Col>
            </Form.Row>
            </Form>
            <Nav.Link href="#link"><i class="fas fa-user "></i></Nav.Link>
            <Nav.Link href="#link"><i class="fas fa-heart "></i></Nav.Link>
            <Nav.Link href="#link"><i class="fas fa-cart-plus"></i></Nav.Link>
  </Navbar.Collapse>
</Navbar>
            <div className="top_div">
                <span>
                    <label className="acc">My Account</label><br/>
                    <label className="name">AVINASH KUMAR</label>
                </span>
            </div>
            
                <Row className="row">
                
                    <Col sm={3} className="firstCol">
                        <label className="ham" for="toggle">&#9776;</label>
                        <input type="checkbox" id="toggle"/>
                        <div className="menu">
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={() => showState("Overview")}>
                                Overview
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={() => showState("Orders")}>
                                Orders and Returns
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={() => showState("Cash")}>
                                Coupons & Navyat Cash
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={()=> showState("Address")}>
                                Addresses
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={Overview}>
                                Overview
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={Overview}>
                                Overview
                            </button>
                        </Box>
                        <Box textAlign="center" className="button">
                            <button id="btn" onClick={Overview}>
                                Overview
                            </button>
                        </Box>
                        </div>
                    </Col>
                    <div className="clear"></div>
                    <Col sm={9} className="secondCol">
                        <div className="workSpace" id="work-space">
                            {show === "Overview" && <Overview/>}
                            {show === "Orders" && <Orders/>}
                            {show === "Cash" && <Cash/>}
                            
                        </div>
                    </Col>
                  
                </Row>
            
            <br/><br/><br/><br/>
            
                <Row>
                    <Col lg={12}>
                        <div className="footer">This is footer</div>
                    </Col>
                </Row>
           
            <br/><br/><br/><br/>
        </React.Fragment>
    );
}
export default ProfilePage;