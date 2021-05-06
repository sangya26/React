import React from 'react';
import { Row, Col } from "react-bootstrap";
import './Overview.css';
import Profile from './profile.json';
   
function Overview(){
    return(

        <div className="container">
            <h2>Profile Details</h2>
            <Row>
                <Col className="col1">
                <table>
                    {Profile.user.map((people) => {
                            return(
                            <div>
                            <tr>  
                                <td className="tdFirst">Full Name</td>
                                <td className="tdSecond">{people.FullName}</td>
                            </tr>
                            <tr>                    
                                <td className="tdFirst">Mobile Number</td>
                                <td className="tdSecond">{people.MobileNumber}</td>
                            </tr>
                            <tr>                    
                                <td className="tdFirst">Email ID</td>
                                <td className="tdSecond">{people.EmailID}</td>
                            </tr>
                            <tr>
                                <td className="tdFirst">Gender</td>
                                <td className="tdSecond">{people.Gender}</td>
                            </tr>
                            <tr>
                                <td className="tdFirst">Date of Birth</td>
                                <td className="tdSecond">{people.DateofBirth}</td>
                            </tr>
                            <tr>
                                <td className="tdFirst">Location</td>
                                <td className="tdSecond">{people.Location}</td>
                            </tr>
                            <tr>
                                <td className="tdFirst">Alternate Mobile Number</td>
                                <td className="tdSecond">{people.AlternateMobileNumber}</td>
                            </tr>
                            <tr>
                                <td className="tdFirst">HintName</td>
                                <td className="tdSecond">{people.HintName}</td>
                            </tr>
                        </div>
                    );
                    })
                    }
                  </table>
                </Col>
            </Row>
        </div>
    )
            }
export default Overview;
