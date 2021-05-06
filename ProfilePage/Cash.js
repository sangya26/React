import React from 'react';
import { Row, Col} from "react-bootstrap";
import Cash from './Cash.json';
import './Cash.css'

const Orders = () => {
    return(
        <div className="container">
            <div className="top">
                <h3>TOTAL AVAILABLE NCASH</h3>
                <p className="ccash"><i className="fa fa-rupee-sign fa-1x"></i> 500</p>
                <p className="para">You can pay upto 10% (may vary during the sale<br/>
                    & promotion events) of your<br/>
                    ordervalue through NCash. Use them on the<br/>
                    Payments page during checkout.</p>
            </div>
            <h3>Coupons</h3>
            <div className="bottom">
                {Cash.coupons.map((detail) => {
                    return(
                        <Row className="coupon">
                            <Col className="off">
                                {detail.off}% <br/>OFF
                            </Col>
                            <Col className="descr">
                                <div>On minimum purchase of Rs.{detail.amount}</div>
                                <div>Code: {detail.code}</div>
                                <div>Expiry: {detail.date} {detail.time}</div>
                            </Col>
                            <Col>
                                <button className="detailBtn">Details</button>
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </div>
    )
}
export default Orders;
