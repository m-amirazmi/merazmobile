import React from "react";
import { Row, Col } from "reactstrap";

const MainFooter = props => {
    return (
        <div id="footer">
            <Row>
                <Col md="4">
                    <div className="footer-customer">
                        <h3>For Customer</h3>
                    </div>
                </Col>
                <Col md="4">
                    <div className="footer-maps">
                        <h3>Maps</h3>
                    </div>
                </Col>
                <Col md="4">
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MainFooter;
