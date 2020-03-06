import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';



export default class ContactDetail extends Component {
    render() {
        return (
            <section className="contact-detail">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ScrollAnimation animateIn="new-fadeInUp">
                                <div className="contact-map">
                                    <Row className="align-items-center">
                                        <Col lg={12} className="form-wrapper">
                                            <div className="form-wrap">
                                                <form>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <input type="text" placeholder="First Name"/>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <input type="text" placeholder="Last Name"/>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <input type="email" placeholder="Email"/>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <input type="text" placeholder="Phone Number"/>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <textarea placeholder="Message"></textarea>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <span className="wen-btn-ip">
                                                                <input type="submit" value="Submit +"/>
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}