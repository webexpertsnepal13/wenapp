import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';

// import project images
// import Limitless from '../../images/fortress.png';
// import Jewel from '../../images/jewel.png';

export default class HeroSlider extends Component {
  render() {
    return (
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
                        <div className="svg-wrap">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px"
                                     viewBox="0 0 771.4 573.7">
                                <g>
                                    <path d="M543.3,434.3c24.8,0,45.8-8.7,63-26c17.2-17.3,25.7-38.1,25.7-62.2V0h139.5v346c0,63-22.3,116.7-67,161.1
                                        c-44.7,44.4-98.4,66.6-161.3,66.6c-60.5,0-113.2-21.2-157.8-63.5c-44.1,42.4-96.7,63.5-157.8,63.5c-62.3,0-115.8-22.2-160.5-66.6
                                        C22.3,462.6,0,409,0,346V0h139.5v346c0,24.1,8.6,44.9,25.7,62.2c17.2,17.4,37.9,26,62.1,26c24.8,0,45.8-8.7,63-26
                                        c17.2-17.3,25.7-38.1,25.7-62.2V0h139.5v346c0,24.1,8.6,44.9,25.7,62.2C498.3,425.6,519,434.3,543.3,434.3z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="container">
                            <Row>
                                <Col lg={2}>
                                </Col>
                                <Col lg={10}>
                                    <div className="hero-inner">
                                        <div className="section-title color-fff">
                                            <h2>Experts of</h2>
                                            <h1>
                                                <Typewriter
                                                    options={{
                                                        strings: ['Wordpress','Web Development','Responsive Design','Contao','plugins'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </h1>
                                        </div>
                                        <div className="wen-btn color-fff">
                                            <a href="/about">What we do <span>+</span></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}