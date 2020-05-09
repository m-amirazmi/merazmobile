import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardImgOverlay,
    CardBody,
    CardSubtitle,
    Button
} from "reactstrap";

const TopSelling = props => {
    return (
        <div id="top-selling">
            <Container>
                <div className="top-selling-title">
                    <h2>Best Selling Model</h2>
                    <hr />
                </div>
                <div className="top-selling-content">
                    <Row>
                        <Col md="3" className="tsc-box">
                            <Card className="tsc-img">
                                <CardImg
                                    src="https://phone.mesramobile.com/wp-content/uploads/2020/03/xiaomi-redmi-note-9-pro-price-malaysia-1.jpg"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Redmi Note 9s</CardTitle>
                                    <CardSubtitle>Xiaomi</CardSubtitle>
                                    <CardText>RM999.99</CardText>
                                    <Button>Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="tsc-box">
                            <Card className="tsc-img">
                                <CardImg
                                    src="https://phone.mesramobile.com/wp-content/uploads/2020/03/xiaomi-redmi-note-9-pro-price-malaysia-1.jpg"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Redmi Note 9s</CardTitle>
                                    <CardSubtitle>Xiaomi</CardSubtitle>
                                    <CardText>RM999.99</CardText>
                                    <Button>Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="tsc-box">
                            <Card className="tsc-img">
                                <CardImg
                                    src="https://phone.mesramobile.com/wp-content/uploads/2020/03/xiaomi-redmi-note-9-pro-price-malaysia-1.jpg"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Redmi Note 9s</CardTitle>
                                    <CardSubtitle>Xiaomi</CardSubtitle>
                                    <CardText>RM999.99</CardText>
                                    <Button>Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3" className="tsc-box">
                            <Card className="tsc-img">
                                <CardImg
                                    src="https://phone.mesramobile.com/wp-content/uploads/2020/03/xiaomi-redmi-note-9-pro-price-malaysia-1.jpg"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>Redmi Note 9s</CardTitle>
                                    <CardSubtitle>Xiaomi</CardSubtitle>
                                    <CardText>RM999.99</CardText>
                                    <Button>Add to Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default TopSelling;
