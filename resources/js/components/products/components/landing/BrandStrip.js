import React from "react";
import { Col, Row, Container } from "reactstrap";

const BrandStrip = props => {
    return (
        <div className="brand-strip">
            <Container>
                <Row>
                    <Col md="4">
                        <h4>Brand</h4>
                    </Col>
                    <Col md="2">
                        <h4>Xiaomi</h4>
                    </Col>
                    <Col md="2">
                        <h4>Oneplus</h4>
                    </Col>
                    <Col md="2">
                        <h4>Oppo</h4>
                    </Col>
                    <Col md="2">
                        <h4>Vivo</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrandStrip;
