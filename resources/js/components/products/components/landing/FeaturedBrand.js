import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardImgOverlay
} from "reactstrap";

const FeaturedBrand = props => {
    return (
        <div id="featured-brand">
            <Container>
                <div className="featured-brand-title">
                    <h2>Featured Brand</h2>
                    <hr />
                </div>
                <div className="featured-brand-content">
                    <Row>
                        <Col md="3" className="fbc-box">
                            <Card inverse className="fbc-img">
                                <CardImg
                                    src="https://www.powerplanetonline.com/cdnassets/xiaomi_redmi_note_8t_04_blanco_ad_l.jpg"
                                    alt="Card image cap"
                                />
                                <CardImgOverlay className="fbc-overlay "></CardImgOverlay>
                                <CardImgOverlay className=" fbc-brand">
                                    <CardTitle>
                                        <h4>Xiaomi</h4>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="3" className="fbc-box">
                            <Card inverse className="fbc-img">
                                <CardImg
                                    src="https://my-test-11.slatic.net/p/f7ecf1eed54fe245551d166d87a47004.jpg_720x720q80.jpg_.webp"
                                    alt="Card image cap"
                                />
                                <CardImgOverlay className="fbc-overlay "></CardImgOverlay>
                                <CardImgOverlay className=" fbc-brand">
                                    <CardTitle>
                                        <h4>Vivo</h4>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="3" className="fbc-box">
                            <Card inverse className="fbc-img">
                                <CardImg
                                    src="https://images-na.ssl-images-amazon.com/images/I/71xrXGLZtXL._SX679_.jpg"
                                    alt="Card image cap"
                                />
                                <CardImgOverlay className="fbc-overlay "></CardImgOverlay>
                                <CardImgOverlay className=" fbc-brand">
                                    <CardTitle>
                                        <h4>Oppo</h4>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                        <Col md="3" className="fbc-box">
                            <Card inverse className="fbc-img">
                                <CardImg
                                    src="https://satugadget.com.my/wp-content/uploads/2019/10/Oneplus-7.jpg"
                                    alt="Card image cap"
                                />
                                <CardImgOverlay className="fbc-overlay "></CardImgOverlay>
                                <CardImgOverlay className=" fbc-brand">
                                    <CardTitle>
                                        <h4>Oneplus</h4>
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedBrand;
