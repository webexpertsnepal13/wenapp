import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';



export default class InnerBanner extends Component {
    render() {
        return (
            <div className="hero-wrapper hero-inner-banner">
                <div className="fullHeight">
                    <div className="hero-slider-wrap">
                        <div className="svg-wrapper">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 690.3 120.2">
                                <path fill="#fff" opacity="0.5">
                                    <animate repeatCount="indefinite" attributeName="d" dur="20s"
                                             values="M0,0.2c0,0,24.8-1.2,63.8,21.3s70,28,128.5-0.5S294.9-8.7,356.6,35.5C445.8,99.5,513.3,8,690.3,0v120.2H0.2L0,0.2z;
                        M0,36.7c0,0,43.3-53,82.3-30.5s103,44,161.5,15.5s96.3-32.7,158,11.5C491.1,97.2,591.8,0,690.3,0v120.2H0.2L0,36.7z;
                        M0,0.2c0,0,24.8-1.2,63.8,21.3s70,28,128.5-0.5S294.9-8.7,356.6,35.5C445.8,99.5,513.3,8,690.3,0v120.2H0.2L0,0.2z;"/>
                                </path>

                                <path fill="#fff">
                                    <animate repeatCount="indefinite" attributeName="d" dur="30s"
                                             values="M0,14.6c0,0,24.8-1,63.8,18.8s68.5,33.2,127,8s120-38,203.5-6.5c98.9,37.3,119-12,296-19.1v104.8H0.2L0,14.6z;
                        M0,36.7c0,0,43.3-53,82.3-30.5s103,44,161.5,15.5s96.3-32.7,158,11.5C491.1,97.2,591.8,0,690.3,0v120.2H0.2L0,36.7z;
                        M0,14.6c0,0,24.8-1,63.8,18.8s68.5,33.2,127,8s120-38,203.5-6.5c98.9,37.3,119-12,296-19.1v104.8H0.2L0,14.6z"/>
                                </path>
                            </svg>
                        </div>
                        <div className="svg-arrow">
                            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 44.55 98.67">
                                <g>
                                    <line x1="22.27" x2="22.27" y2="97.25" fill="none" stroke="#93c4dd" strokeMiterlimit="10" strokeWidth="3"/>
                                    <line x1="43.84" y1="75.68" x2="21.57" y2="97.96" fill="none" stroke="#93c4dd" strokeMiterlimit="10" strokeWidth="3"/>
                                    <line x1="0.71" y1="75.68" x2="22.99" y2="97.96" fill="none" stroke="#93c4dd" strokeMiterlimit="10" strokeWidth="3"/>
                                </g>
                            </svg>
                        </div>
                        <div className="height-100">
                            <div className="hero-slider">
                                <div className="container">
                                    <Row>
                                        <Col lg={1}>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="hero-inner padb-70">
                                                <div className="section-title color-fff">
                                                    <h2>{this.props.title}</h2>
                                                    <h1>{this.props.subTitle}</h1>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="abt-banner-img">
                                    <img
                                        src={this.props.img}
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}