import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText
} from "reactstrap";

const OurTraits = props => {
    return (
        <div id="our-traits">
            <Container>
                <Row>
                    <Col md="4">
                        <Card body inverse color="primary">
                            <CardTitle>Best Quality</CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body inverse color="danger">
                            <CardTitle>24/7 Support</CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body inverse color="warning">
                            <CardTitle>Free Delivery</CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurTraits;
