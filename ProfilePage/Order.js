import React from 'react';
import { Row, Col, Card, Image } from "react-bootstrap";
import Products from './product.json';
import './Order.css'

const Orders = () => {
    return(
        <div className="outer">
            <h2>Order & Returns</h2>
            
            <div className="inner">
                {Products.products.map((detail) => {
                    return(
                        <Card className="Card">
                        <Card.Header className="header">
                          <div className="fontUpper">
                          <span className="icons"><i className="flaticon-trash"></i></span>&nbsp;<span className="status">{detail.Status}</span><br/>
                          <span className="request">On {detail.Date} as per your request.<br/></span>
                          <span className="refund">Refund Initiated:</span> Rs.{detail.Refund} on {detail.Date} .
                          <span><a href="a.js" className="link">View Refund Details</a></span>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Row className="Body">
                              <Col>
                                <Image src={detail.ProductImg} fluid  className="img"/>
                              </Col>
                              <Col xs={6}>
                                <div className="middle"><span className="bold">{detail.ProductName}</span><br/>{detail.Description}<br/>Size : {detail.Amount}</div>
                              </Col>
                              <Col>
                                <i className="fa fa-chevron-circle-right fa-4x"></i>
                              </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    );
                })}
                {Products.productsD.map((delivered) => {
                  return(
                    <Card className="Card">
                        <Card.Header className="header2">
                          <div className="fontBottom">
                          <span className="icons_"><i className="flaticon-truck"></i></span>&nbsp;<span className="status">{delivered.Status}</span><br/>
                          <span className="req">On {delivered.Date}<br/></span>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Row className="Body">
                              <Col>
                                <Image src={delivered.ProductImg} fluid  className="img"/>
                              </Col>
                              <Col xs={6}>
                                <div className="middle"><span className="bold">{delivered.ProductName}</span><br/>{delivered.Description}<br/>Size : {delivered.Amount}</div>
                              </Col>
                              <Col>
                                <i className="fa fa-chevron-circle-right fa-4x"></i>
                              </Col>
                          </Row>
                        </Card.Body>
                        <Card.Footer className="bBlock">
                          <button  className="btnD b1">Exchange</button>
                          <button  className="btnD b2">Return</button>
                        </Card.Footer>
                      </Card>
                  );
                })}
            </div>
        </div>
    )
}
export default Orders;
