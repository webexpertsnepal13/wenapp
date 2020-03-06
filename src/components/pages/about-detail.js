import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';


export default class AboutDetail extends Component {
  render() {
    return (
        <div className="section abt-detail-wrap padt-0">
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <ScrollAnimation animateIn="new-fadeInUp">
                            <div className="abt-detail-inner">
                                <p>Welcome to Web Experts Nepal ( WE Nepal ) Pvt. Ltd.!</p>
                                <p> We are a South-Asian web-solutions provider in Nepal. Having helped international businesses illuminate their services and radiate their presence online for years now, we have forever proved to be a trustworthy partner in progress.</p>
                                <p> Our Team takes a comprehensive approach in helping you, working from the inside-out to ensure understanding, cooperation and growth.</p>
                                <p> Our clientele are diverse: from multi-nationals to private firms, to domestic clients and individual starters. </p>
                            </div>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}