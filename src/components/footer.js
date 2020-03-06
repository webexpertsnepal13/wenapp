import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component {
	render() {
		return (
			<footer id="colophon">
                <div className="lets-discuss">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={8}>
                                <h2>Let's Discuss A Project</h2>
                            </Col>
                            <Col lg={4}>
                                <div className="wen-btn color-fff">
                                    <a href="/contact">Let's Talk<span>+</span></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="map-section">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 577 450">
                        <g>
                            <path
                                className="st0"
                                fill="#3F4C62"
                                d="M213.1,180c0.2-14.5-0.6-29,0.9-43.4c0.5-4.6,1.3-9.2,1.7-13.9c0.3-3.7,3.4-7.5-0.3-11.2
		c-0.4-0.4,0.3-1.8,0.5-2.8c4.5-19.5,15.9-34.9,29.1-49.2c3.8-4.1,7.2-8.2,7.8-14c0.4-3.1,1.7-3.8,4.7-2.6c7.7,3.2,7.8,3.1,13-3.2
		c0.6-0.8,1.2-1.6,1.9-2.3c3.3-2.8,3.9-5.6,0.6-9.1c-1.3-1.4-2.1-3.4-2.9-5.2c-2.2-5.5-3.1-11.4,1.1-16c4.4-4.8,10.9-7.3,16.8-4.6
		c6.2,2.8,10.3,0.8,14.7-2.7c0.7,0,1.3,0,2,0c8.2,4.9,8.3,13.9,0.1,18.9c-1.2,0.7-2.3,1.2-2.2,2.9c0.6,5.6-2.1,10.8-1.8,16.3
		c0.1,1.2,0.1,2.9-1,3.1c-4.4,0.8-5.1,4.7-6.6,7.8c-1.8,3.7-4,4.6-7.4,1.9c-1.1-0.9-2.4-3.3-4.2-0.2c-1.8,3.1,0.6,3.5,2.3,4
		c3.3,1.1,3.7,2.9,1.9,5.6c-3,4.5-2.4,9-0.4,13.7c5.2,12.4,10.7,24.7,13.8,37.9c0.9,4.1,2.4,2.6,4.4,0.8
		c12.9-11.6,25.4-23.6,33.7-39.1c2.7-5,6.2-6.8,12.1-5.2c-4.4,6.4-8.7,12.7-12.9,19c-0.9,1.3-2.3,2.3-1.2,4.4c2.1,4-0.1,6.9-3.5,8.5
		c-3.1,1.4-4.2,3.8-5.2,6.8c-3.5,10.6-7.5,21-12.9,30.8c-2.3,4.1-4.8,8-8.1,11.3c-2.3,2.3-5,5-8,4.6c-7.2-0.9-6,3.5-5.6,7.6
		c0.4,4.3,0.7,8.6,1.1,12.9c0.6,9.2,1.2,18.4,1.8,27.6c0,2,0,4.1,0.1,6.1c-0.4,3.7,0,7.2,0.8,10.9c3.5,16.8,6.7,33.6,10.1,50.4
		c-0.2,2.1,0.4,4.1,1.1,6c0,0.8-0.1,1.7,0.1,2.5c4.7,27.9,9.2,55.8,14.1,83.7c2.3,12.9,3.5,26,6.5,38.8c0.7,2.9,1.9,3.9,4.8,3.4
		c3.1-0.5,6.3-0.6,9.5-0.7c1.6-0.1,3.6-0.6,4.2,1.6c0.6,2.1-1.1,2.9-2.6,3.6c-6.1,3.1-12.1,6.3-18.3,9.2c-6.2,2.9-7.8,1.9-7.7-4.9
		c0.2-8.5-2.1-16.3-5.9-23.8c-16.5-33-32.4-66.4-48.1-99.8c-0.8-1.9-1.4-3.9-2.8-5.4c-0.7-3.6-2.6-6.6-4.4-10.3
		c-2,4.6-3.9,8.7-5.7,12.8c-1.5,2.3-2.9,4.7-3.7,7.4c-0.3,0.4-0.7,0.7-1,1.1c-14.7,27.5-31.9,53.4-49.6,79
		c-5.7,8.2-11.8,16-14.6,25.9c-0.8,3-0.8,4.4,2.1,5.8c4.2,2,8.1,4.6,12.2,6.9c-9.2,1-18,1.1-26.8,1c-3.2,0-3.8-1.7-2.8-4.7
		c1.3-3.8,4.4-6.5,5.6-10.5c1.9-6.5,3.7-12.8,4.7-19.6c3.4-22.7,8.6-45.1,13.9-67.4c0.5-2.3,1-4.6,1.4-6.9c0.2-0.3,0.4-0.5,0.5-0.8
		c6.8-26.3,14.3-52.3,22.8-78c0.4-1.1,0.6-2.3,0.5-3.4c-0.7-9.3-1.4-18.6-2.1-27.9c-0.1-2.3-0.2-4.5-0.3-6.8
		C213.4,184.7,213.2,182.3,213.1,180z M244,181c-1.8,7.8-1.5,15.9-2.7,23.8c-0.4,2.3,1.2,2.7,2.7,3.5c3.7,1.9,6.7,4.9,6.9,9.2
		c0.2,3.9,2.1,3.7,4.9,3.2c10.8-2,21.4-4.9,31.9-8.1c3.3-1,4.5-2.4,4.3-5.9c-0.9-12.8-1.1-25.6-2.3-38.4c-0.6-6.1,0.8-12.6-2.3-18.2
		c-6.2-11.1-7.2-22.6-4.4-34.8c1-4.6,2.7-8.1,7.5-9.5c3.4-1,3.6-3,2.4-6c-3.5-8.3-6.8-16.6-10.2-25c-1.9-4.6-3-9.3-0.3-13.9
		c1.5-2.5,0.5-3.4-1.8-4.4c-7.1-3-14.1-6-21-9.2c-2.4-1.1-4.1-1.2-4.4,2c-0.4,4.2-2.8,7.3-5.8,10.1c-2.7,2.7-5.2,5.6-7.7,8.5
		c-9.5,11.5-17.7,23.7-22,38.3c-1,3.3-0.4,5.2,2.3,7.2c9.4,7.1,19.8,11.4,31.7,11.9c3.5,0.2,5.4-0.8,7-4c4.2-9,7.4-18.2,8.7-28
		c0.2-1.3,0-3.6,2.2-3.2c2.1,0.4,1.1,2.4,0.9,3.8c-0.5,3.3-1,6.6-1.6,9.8c-2.8,7.3-5,14.8-8.9,21.6c-0.9,1.6-1.6,3.6-3.9,3.4
		c-3.1-0.3-4.1,1.8-4.8,4C248.1,148.4,245.2,164.6,244,181z M318.2,389.8c7.1,0.1,3.7-4.7,3.3-7c-4.7-29.4-9.6-58.8-14.6-88.1
		c-4.3-25.3-8.7-50.5-14-75.5c-0.8-3.7-2-4.6-5.8-3.3c-11,3.8-22.3,6.7-33.9,8.2c-1.4,0.2-2.4,0.5-3.4,1.7
		c-8.1,9.9-15.6,9.7-23.1-0.5c-0.6-0.8-1.1-1.9-2.3-1.4c-1.2,0.5-0.6,1.8-0.3,2.6c5,14,12.6,26.1,26.6,32.8c2.7,1.3,4.5,3,5.7,5.8
		c3.7,8.5,7.7,17,11.6,25.4c14.8,32.2,30.3,64,45.9,95.8C315,388.3,315.8,390.3,318.2,389.8z M219.5,222.1c-4.9,16.2-9.7,31.1-14,46
		c-10.3,35.4-18.7,71.3-25.2,107.7c-0.4,2.4-1.6,4.8,2.2,6.5c3.8,1.7,4.7-0.8,6.1-2.9c5.6-8.1,11.3-16.1,16.7-24.2
		c17.6-26.3,34.6-52.9,47.7-81.7c2.6-5.6,1.4-8.8-4-11.6c-5.8-3-10.9-7-15.2-11.9C227.1,242.3,223.1,233.2,219.5,222.1z
		 M224.1,118.9c-1.4,5.7-1.3,10.8-1.7,16c-1.5,24.4,0.1,48.5,8.6,71.8c1.1,3.1,1,5.4-0.9,8.3c-3.2,4.7-1.1,11.2,3.7,13.7
		c5,2.6,11.1,0.5,13.4-4.7c2.4-5.2,0.2-11.5-5.4-13c-4.2-1.1-4.1-3.2-3.8-6.3c2.6-24.8,4.2-49.7,12.6-73.5c0.6-1.6,0.8-2.8-1.6-3.1
		C240.2,127.2,232.2,123.8,224.1,118.9z M325.6,96.4c-6.9,6.6-13.5,12.9-20.2,19.1c-6.4,5.9-6.4,5.8-8.7-2.3
		c-0.4-1.4-0.8-2.9-1.3-4.3c-0.2-0.7-0.4-2-1.5-1.3c-2.4,1.6-5.9,1.5-7,5c-3.4,11.4-3.7,22.6,1.9,33.5c2.7,5.3,7.6,6.4,12.5,2.9
		c3.3-2.4,5.6-5.6,7.8-9c7.8-12.5,12.3-26.5,17.2-40.2C326.6,98.7,326.5,97.8,325.6,96.4z M219.2,121.6c-0.4,1.9-0.9,3.7-1.1,5.6
		c-2.5,18.1-2.2,36.2-1.6,54.3c0.4,11.5,1.2,22.9,1.8,34.4c0.2,3.3,4.3,5.6,6.7,3.9c0.9-0.6,3.6-11,3.1-12.4
		c-6.5-17.9-8.8-36.4-9.1-55.4C218.7,142,219.9,131.9,219.2,121.6z M282.3,44.1c1.8,1.4,3.5,2.7,5.3,4c1,0.8,2,1.5,2.8-0.1
		c0.7-1.2,1.8-2.3-0.3-3.5c-1.2-0.7-2.2-2-3-3.2c-0.6-0.8-1.8-1.9-0.5-3c1.3-1,2,0.1,2.8,1c0.9,1.1,2.2,3.5,3.1,2.6
		c1.7-1.8,5.1-2.9,5.3-4.8c0.5-4.3,2-8.4,2.1-12.8c0-1.3,0.7-3.3-1.3-3.8c-2.2-0.5-2.1,1.5-2.6,2.9c-1,2.9-3.5,3.9-6.3,4.1
		c-3.2,0.3-2.4-2.5-3-4.1c-0.6-1.5-1.3-2.7-3.2-2.3c-1.9,0.4-2.3,1.9-2.2,3.4c0.2,2.5,0,4.7-1.1,7.1c-2.7,6.3-8.2,10.4-11.8,16.3
		c3.1,1.3,6.2,3.8,9,3.4C279.3,51,280.7,46.7,282.3,44.1z M181.3,385c-1.3-0.2-1.9,0.2-2.1,0.8c-1.8,5.4-3.5,10.7-5.2,16.1
		c-0.3,0.8-0.3,1.7,0.9,1.9c0.8,0.2,1.8,0.3,2.1-0.7c2-5.3,4.1-10.5,6-15.8C183.7,385.5,182,385.3,181.3,385z M326,404.9
		c-1-3.4-2-7.1-3.1-10.6c-0.6-2-2.4-1.5-3.8-1.3c-1.9,0.3-1.1,1.7-0.8,2.7c0.8,3.5,1.8,7,2.8,10.5c0.4,1.6,1.6,2,3,1.8
		C325.7,407.7,326.2,406.7,326,404.9z M299.3,7.7c-2.7,1.7-4.8,0.7-7.2-0.6c-7.9-4.4-17.1-1.9-19.7,5.6c7.6-5.6,15.1-6.7,23.1-1.9
		C298.2,12.3,298.6,9.7,299.3,7.7z M306.8,5.6c-3.4-3.1-5.1-2.7-7.4,2C302.1,6.9,304.4,6.3,306.8,5.6z"/>
                            <path
                                className="st1"
                                fill="#D6D9E0"
                                d="M577,323c-17.3,0-34.7,0-52,0c-6.7,0-13.3-0.2-20,0.1c-4.2,0.2-3.9-1.6-2.7-4.4c1.7-3.9,5.3-5.7,8.7-7.7
		c9.6,1.2,18.2-2.4,26.9-5.5c8.3-3,15.3-1.2,21.7,4.2c1.3,1.1,2.2,2.5,4.1,2.3c6-0.7,10.1,2.4,13.3,7C577,320.3,577,321.7,577,323z"
                            />
                            <path
                                className="st2"
                                fill="#324057"
                                d="M8.3,320.4C4,314.6,2.7,307.5,0,301c0-3.7,0-7.3,0-11c0.8-0.2,0.9-0.8,1-1.5c6.3-24.1,20.9-35.3,45.8-34.9
		c18.2,3.1,30.7,13.3,36.4,30.7c5.7,17.3,1.1,32.7-11.7,45.6c-4.7,4.7-9.3,9.5-13.9,14.2c-3,2.9-6.3,5.6-8.7,9.1
		c-2.4,1.6-4.2,4.8-7.7,1C30.4,342.8,19.3,331.6,8.3,320.4z M64.2,264.8c0.1-2.5-2.2-2.7-3.6-3.5c-14.5-8.1-33.1-5.5-45.2,6.1
		c-12.3,11.8-15.3,30.2-7.6,45.7c0.1,0.5,0.1,1.1,0.3,1.4c9.9,13.7,23.1,24.4,34.5,36.7c1.5,1.6,2.5,0.8,3.7-0.4
		c9-9.2,18.5-17.9,26.8-27.6C90.8,302.6,80.9,272.2,64.2,264.8z"/>
                            <path
                                className="st0"
                                fill="#3F4C62"
                                d="M382,450c-0.1-2.4-0.2-4.7-0.3-7.1c0-3.4,1.1-7-1.7-10c-0.2-0.6-0.3-1.3-0.6-1.9c-0.5-1.1-2.2-2.3-1.1-3.4
		c1.7-1.8,1.8,1.9,3.7,1.2c0-3.2,0-6.5,0-9.8c4.3,1.7,0.3,5.9,2.5,8.3c1.2,0.1,2.1-2.7,3.5-0.4c-4.8,4.4-4.3,10.1-3.9,15.9
		c-0.1,2.4-0.2,4.7-0.2,7.1C383.3,450,382.7,450,382,450z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M8.3,320.4c11,11.3,22,22.4,32.8,33.8c3.5,3.8,5.3,0.6,7.7-1c1.1-0.2,2.3-0.3,3.4-0.6
		c28.8-8.7,57.6-17.4,86.4-26.1c17.3-5.2,34.7-10.4,52-15.6c-5.3,22.3-10.5,44.7-13.9,67.4c-1,6.7-2.8,13.1-4.7,19.6
		c-1.1,3.9-4.3,6.6-5.6,10.5c-1,3-0.5,4.7,2.8,4.7c8.8,0.1,17.6,0,26.8-1c-4.1-2.3-8-4.9-12.2-6.9c-2.9-1.4-3-2.9-2.1-5.8
		c2.8-9.9,9-17.7,14.6-25.9c17.8-25.6,34.9-51.5,49.6-79c0.2-0.4,0.6-0.8,1-1.1c5.6-1.5,11.1-3,16.7-4.5
		c15.7,33.4,31.5,66.8,48.1,99.8c3.8,7.6,6,15.3,5.9,23.8c-0.2,6.7,1.5,7.7,7.7,4.9c6.2-2.9,12.2-6.1,18.3-9.2
		c1.5-0.8,3.3-1.5,2.6-3.6c-0.6-2.2-2.6-1.7-4.2-1.6c-3.2,0.2-6.3,0.2-9.5,0.7c-2.9,0.4-4.1-0.5-4.8-3.4c-3-12.8-4.2-25.9-6.5-38.8
		c-4.9-27.9-9.4-55.8-14.1-83.7c-0.1-0.8,0-1.7-0.1-2.5c1.6-0.4,3.2-0.7,4.8-1.2c22.9-6.9,45.8-13.7,68.7-20.6
		c20.4-6.1,40.7-12.3,61-18.5c2.8-0.9,6.2-1.4,5.1-5.8c6-6.1,12.1-12.3,18.1-18.4c2.4,3.7,6.2,5.9,9.3,8.8
		c13.4,12.3,20.1,27.3,18.8,45.6c-0.8,11.5,2.2,22,8,31.7c3,4.9,6.6,9.4,10,14.1c-3.4,2-7,3.7-8.7,7.7c-1.2,2.8-1.4,4.6,2.7,4.4
		c6.6-0.3,13.3-0.1,20-0.1c5.1,6.5,12.1,10.7,18.2,16.1c7.2,6.3,14.8,12.3,20,20.6c5.2,8.4,5,16.6-1.4,23.9
		c-6,7-13.3,12.5-21.2,17.2c-17.5,10.4-36.5,16.8-56.4,19.9c-11.1,1.7-22.4,2.8-33.6,3.2c-16.1,0.5-32.3,0.1-48.5,0.2
		c-1.7,0-3.7-0.7-5.2,1c-3-7.6-5.7-15.3-10.9-21.9c-2.8-3.6-4.5-3.7-7.1,0c-1.8,2.5-3.3,5.3-5,7.9c-2.1,4.5-4.9,8.7-5,13.9
		c-0.3,0-0.6,0.1-0.9,0.2c-3.7-2.2-7.9-1.4-11.6-0.8c-6.7,1-13.3,0.9-19.9,0.7c-13-0.5-25.9,0.6-38.8,1.3c-18.5,1.1-37,2.4-55.4,4.6
		c-18,2.2-36.2,3.4-54.3,5.2c-19,1.9-38,2.7-57.1,3.1c-23.6,0.5-47-0.3-69.9-6.2c-19.1-4.9-35.3-14.2-45.7-31.9
		c-5-8.5-7.6-17.8-9.2-27.2c-1.8-10.4-2.8-21-2.2-31.7C4.5,334.7,5.5,327.4,8.3,320.4z M464.1,351c1.2,4.6-0.8,9.5,1.6,15
		c1.9-5.5,0.2-10.4,1.3-14.9c12.7-0.5,22.9-9.9,25.1-23.1c1.7-2.8,1-5.8,0.5-8.7c-0.8-5.4-2.6-10.6-4.6-15.7
		c-4.8-11.9-9.8-23.6-18.8-33.1c-2.9-3-5.3-2.8-8-0.2c-4.4,4.2-7.6,9.2-10.1,14.7c-5.1,8-9,16.6-11.2,25.8
		C430.3,332.6,447.4,351.4,464.1,351z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M295.1,201.9c-0.6-9.2-1.2-18.4-1.8-27.6c13.4-0.4,26.8,0.8,40.2,1.5c10.9,0.6,21.7,1.7,32.6,3.1
		c15.6,2,30.9,5.2,46.2,9.1c0.5,10.5,5.3,18.8,13,25.8c4.3,3.9,8.1,8.3,12.1,12.4c-1.5-0.1-3,0-4.5-0.3
		c-29.4-5.2-58.8-10.4-88.2-15.5C328.1,207.5,311.6,204.8,295.1,201.9z"/>
                            <path
                                className="st2"
                                fill="#324057"
                                d="M437.3,226.2c-4-4.2-7.8-8.6-12.1-12.4c-7.7-7-12.5-15.2-13-25.8c1.1-11,5.6-20.1,15.5-25.8
		c12-6.8,26.6-4.3,36.3,6.2c9.9,10.7,11.4,26.7,3.4,38.6c-0.8,1.2-1.7,2.4-2.5,3.7c-6,6.1-12.1,12.3-18.1,18.4
		c-2.3,2.5-4.5,2.8-6.7-0.3C439.4,227.8,438.2,227.1,437.3,226.2z M417,195.6c-0.3,2.7,1.2,4.9,2.6,6.8c6.5,9,15.1,15.9,22.5,24
		c1,1.1,1.9,0.9,2.9-0.1c6.5-6.9,14.1-12.9,19.5-20.7c10.5-15.1,4.6-32.8-13.4-41.7c-0.6-0.5-1.2-1.1-1.9-1.3
		c-9.9-2.6-18.9-0.5-26,6.9C416.3,176.9,413.7,185.6,417,195.6z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M57.6,344.1c4.6-4.7,9.3-9.5,13.9-14.2c12.8-12.9,17.4-28.3,11.7-45.6c-5.7-17.4-18.2-27.6-36.4-30.7
		c2-5.1,6-8.7,9.6-12.5c8.4-8.9,17-17.5,25.6-26.3c1.8,1.4,3.2,3.5,5.8,3.5c1.3,6.4-0.5,13.1,1.6,19.5c2-6.2,0.4-12.7,1.4-19
		c7.3-2.2,9.2-5.9,6.9-13.5c3.3-3.8,7.9-5.4,12.3-7.2c14.7-6.2,30.2-9.6,45.9-12.1c1.3-0.2,2.7,0,2.9-1.9
		c18.3,3.2,36.6,6.5,54.9,9.7c0.7,9.3,1.5,18.6,2.1,27.9c0.1,1.1-0.1,2.3-0.5,3.4c-8.5,25.7-16,51.8-22.8,78
		c-0.1,0.3-0.3,0.6-0.5,0.8c-31.6,9.5-63.3,19-94.9,28.5C84.1,336.4,70.8,340.2,57.6,344.1z"/>
                            <path
                                className="st4"
                                fill="#5EFEE2"
                                d="M213.8,193.8c-18.3-3.2-36.6-6.5-54.9-9.7c-12.7-2.2-25.3-4.3-37.9-6.6c-2-0.4-4.5-0.5-4.9-3.4
		c1.4-1.1,2.7-2.2,4.1-3.3c23.6,4.1,47.2,8.1,70.7,12.2c7.4,1.9,14.9,3.4,22.6,3.9C213.6,189.3,213.7,191.6,213.8,193.8z"/>
                            <path
                                className="st2"
                                fill="#324057"
                                d="M120.2,170.9c-1.4,1.1-2.7,2.2-4.1,3.3c-5.7-4.3-10.8-9.4-15.2-15c-5.5-7.1-3.9-17.5,3.1-23.3
		c6.8-5.7,16.5-5.3,23.2,0.9c6.9,6.4,8,17.1,2.1,24.4C126.6,164.5,123.3,167.6,120.2,170.9z M101.9,155.3c0.6,2.8,2.7,4.5,4.5,6.4
		c10.4,10.5,10.4,10.5,20-1c6.3-7.5,5.5-16.2-2.1-22.7c-5.9-4.7-12.6-4.9-18.2-0.7C100.6,141.6,99,148.4,101.9,155.3z"/>
                            <path
                                className="st4"
                                fill="#5EFEE2"
                                d="M97.9,205.4c2.3,7.7,0.4,11.3-6.9,13.5c-0.9-7.1,1-14.5-1.1-21.6c-0.6,0-1.3,0-1.9,0c0,7,0,14,0,21
		c-2.6-0.1-4.1-2.1-5.8-3.5c-1.3-3.4-1.7-6.7,0.7-9.8c1.3-1.7,1-3.2,0.3-5c-0.9-2.6-0.7-5.2,1.9-7c5.1,0,7.8,3.7,10.9,6.9
		C95.8,202,95.6,204.1,97.9,205.4z"/>
                            <path
                                className="st5"
                                fill="#6AFAF4"
                                d="M96,199.9c-3.1-3.2-5.8-6.9-10.9-6.9c0.1-1.6-0.9-2.8-1.6-4.1c-1.6-3.1-1-5.9,1.6-8c2.5-2.1,5.4-2.7,8.3-0.7
		c2.8,1.9,4.6,4.6,2.9,8.1c-1.3,2.6-1.3,5,0.1,7.6C96.9,197.1,97.4,198.6,96,199.9z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M213.5,187c-7.7-0.5-15.2-2-22.6-3.9c0.7-1.6,1.9-2.1,3.5-2.1c6.2,0.2,12.3-1.7,18.5-1
		C213.2,182.3,213.4,184.7,213.5,187z"/>
                            <path
                                className="st1"
                                fill="#D6D9E0"
                                d="M374,411c1.6-2.6,3.2-5.4,5-7.9c2.6-3.7,4.3-3.6,7.1,0c5.2,6.5,7.9,14.3,10.9,21.9c-0.1,3.1,0.7,6.4-1.7,9
		c-2.7-2-3.8-5.6-7.1-7c-1.4-2.3-2.3,0.5-3.5,0.4c-2.2-2.4,1.8-6.6-2.5-8.3C379.1,416.7,377.4,413,374,411z"/>
                            <path
                                className="st6"
                                fill="#96E5FC"
                                d="M388.1,427c3.3,1.4,4.4,5,7.1,7c-1.6,5.5-5.8,7.8-11,8.8C383.8,437.2,383.4,431.5,388.1,427z"/>
                            <path
                                className="st7"
                                fill="#88DFF9"
                                d="M368,425.1c0.3-0.1,0.6-0.1,0.9-0.2c3.2,1.5,4.6,4.9,7.3,6.8c1.1,0.8,1.8,3.2,3.8,1.2c2.8,3,1.6,6.6,1.7,10
		C371.6,441.1,368,436.4,368,425.1z"/>
                            <path
                                className="st8"
                                fill="#65D5F5"
                                d="M270.9,103.8c0.5-3.3,1.1-6.6,1.6-9.8c0.2-1.4,1.2-3.4-0.9-3.8c-2.2-0.4-2,1.9-2.2,3.2c-1.3,9.8-4.6,19-8.7,28
		c-1.5,3.2-3.5,4.2-7,4c-11.9-0.6-22.3-4.8-31.7-11.9c-2.7-2-3.3-4-2.3-7.2c4.3-14.5,12.5-26.8,22-38.3c2.4-2.9,5-5.9,7.7-8.5
		c2.9-2.9,5.3-5.9,5.8-10.1c0.3-3.2,2-3.1,4.4-2c7,3.2,14,6.2,21,9.2c2.3,1,3.3,1.9,1.8,4.4c-2.7,4.6-1.6,9.3,0.3,13.9
		c3.4,8.3,6.7,16.7,10.2,25c1.3,3,1,5.1-2.4,6c-4.8,1.4-6.5,4.9-7.5,9.5c-2.8,12.2-1.8,23.7,4.4,34.8c3.1,5.6,1.8,12.1,2.3,18.2
		c1.2,12.8,1.4,25.6,2.3,38.4c0.2,3.5-1,4.9-4.3,5.9c-10.5,3.3-21.1,6.1-31.9,8.1c-2.8,0.5-4.7,0.7-4.9-3.2
		c-0.2-4.3-3.2-7.2-6.9-9.2c-1.5-0.8-3.1-1.2-2.7-3.5c1.2-7.9,1-16,2.7-23.8c8.3-13.9,14.7-28.6,19.8-43.9
		C267.3,126.3,270.3,115.3,270.9,103.8z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M318.2,389.8c-2.4,0.5-3.2-1.5-4.2-3.5c-15.6-31.8-31.1-63.6-45.9-95.8c-3.9-8.4-7.9-16.9-11.6-25.4
		c-1.2-2.8-3-4.5-5.7-5.8c-14-6.7-21.6-18.8-26.6-32.8c-0.3-0.8-0.9-2.1,0.3-2.6c1.1-0.5,1.7,0.6,2.3,1.4
		c7.6,10.2,15.1,10.4,23.1,0.5c1-1.2,2-1.5,3.4-1.7c11.6-1.5,22.9-4.5,33.9-8.2c3.9-1.3,5.1-0.5,5.8,3.3c5.3,25.1,9.7,50.3,14,75.5
		c5,29.4,9.9,58.7,14.6,88.1C321.9,385.1,325.3,389.8,318.2,389.8z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M219.5,222.1c3.7,11.1,7.6,20.1,14.3,27.8c4.3,5,9.4,8.9,15.2,11.9c5.4,2.8,6.6,6,4,11.6
		c-13.1,28.9-30.1,55.5-47.7,81.7c-5.5,8.2-11.1,16.2-16.7,24.2c-1.4,2.1-2.3,4.5-6.1,2.9c-3.8-1.6-2.7-4.1-2.2-6.5
		c6.5-36.3,14.9-72.2,25.2-107.7C209.8,253.2,214.5,238.3,219.5,222.1z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M306,269.3c-3.3-16.8-6.6-33.6-10.1-50.4c-0.8-3.6-1.2-7.2-0.8-10.9c44.2,7.7,88.5,15.4,132.7,23.2
		c-2.2,2-4.3,2.9-6.5,3.5c-17.8,5.4-35.6,10.8-53.4,16.1C347.4,257,326.7,263.1,306,269.3z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M224.1,118.9c8,4.8,16.1,8.3,25,9.1c2.4,0.2,2.1,1.5,1.6,3.1c-8.4,23.8-10,48.7-12.6,73.5
		c-0.3,3.2-0.4,5.3,3.8,6.3c5.6,1.5,7.7,7.8,5.4,13c-2.3,5.2-8.4,7.3-13.4,4.7c-4.9-2.5-6.9-9-3.7-13.7c2-2.9,2.1-5.2,0.9-8.3
		c-8.5-23.2-10.1-47.3-8.6-71.8C222.8,129.8,222.7,124.6,224.1,118.9z"/>
                            <path
                                className="st4"
                                fill="#5EFEE2"
                                d="M306,269.3c20.7-6.1,41.4-12.3,62-18.4c17.8-5.3,35.6-10.7,53.4-16.1c2.2-0.7,4.3-1.5,6.5-3.5
		c-44.2-7.7-88.5-15.4-132.7-23.2c0-2,0-4.1-0.1-6.1c16.5,2.8,33,5.6,49.5,8.5c29.4,5.1,58.8,10.4,88.2,15.5c1.5,0.3,3,0.2,4.5,0.3
		c1,0.9,2.1,1.6,2.8,2.6c2.2,3.1,4.3,2.8,6.7,0.3c1.1,4.4-2.2,4.9-5.1,5.8c-20.3,6.2-40.7,12.4-61,18.5
		c-22.9,6.9-45.8,13.8-68.7,20.6c-1.6,0.5-3.2,0.8-4.8,1.2C306.4,273.3,305.8,271.4,306,269.3z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M325.6,96.4c0.8,1.4,0.9,2.4,0.6,3.4c-4.9,13.8-9.4,27.7-17.2,40.2c-2.1,3.4-4.5,6.7-7.8,9
		c-4.9,3.5-9.8,2.4-12.5-2.9c-5.6-10.9-5.3-22.1-1.9-33.5c1-3.5,4.6-3.5,7-5c1.1-0.7,1.2,0.7,1.5,1.3c0.5,1.4,0.9,2.8,1.3,4.3
		c2.3,8.1,2.3,8.2,8.7,2.3C312.1,109.2,318.7,102.9,325.6,96.4z"/>
                            <path
                                className="st4"
                                fill="#5EFEE2"
                                d="M57.6,344.1c13.2-3.9,26.4-7.6,39.6-11.6c31.6-9.5,63.3-19,94.9-28.5c-0.5,2.3-1,4.6-1.4,6.9
		c-17.3,5.2-34.7,10.3-52,15.6c-28.8,8.7-57.6,17.4-86.4,26.1c-1.1,0.3-2.3,0.4-3.4,0.6C51.3,349.7,54.6,347,57.6,344.1z"/>
                            <path
                                className="st10"
                                fill="#2CC5F0"
                                d="M270.9,103.8c-0.6,11.5-3.5,22.5-7.1,33.4c-5.1,15.3-11.4,30.1-19.8,43.9c1.2-16.5,4.2-32.6,9.3-48.3
		c0.7-2.3,1.7-4.3,4.8-4c2.3,0.2,2.9-1.8,3.9-3.4C265.9,118.5,268.1,111,270.9,103.8z"/>
                            <path
                                className="st8"
                                fill="#65D5F5"
                                d="M219.2,121.6c0.8,10.3-0.5,20.4-0.3,30.5c0.4,18.9,2.7,37.5,9.1,55.4c0.5,1.3-2.1,11.7-3.1,12.4
		c-2.4,1.7-6.5-0.6-6.7-3.9c-0.7-11.5-1.4-22.9-1.8-34.4c-0.6-18.1-0.9-36.3,1.6-54.3C218.3,125.3,218.8,123.5,219.2,121.6z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M282.3,44.1c-1.7,2.6-3,6.9-4.9,7.1c-2.8,0.4-6-2.1-9-3.4c3.7-5.9,9.2-10,11.8-16.3c1-2.5,1.2-4.7,1.1-7.1
		c-0.1-1.5,0.2-3,2.2-3.4c1.9-0.4,2.7,0.9,3.2,2.3c0.6,1.7-0.2,4.4,3,4.1c2.8-0.2,5.2-1.2,6.3-4.1c0.5-1.4,0.4-3.4,2.6-2.9
		c2.1,0.5,1.3,2.4,1.3,3.8c0,4.3-1.6,8.4-2.1,12.8c-0.2,1.9-3.5,3.1-5.3,4.8c-0.9,0.9-2.2-1.4-3.1-2.6c-0.7-0.9-1.5-2.1-2.8-1
		c-1.4,1.1-0.1,2.2,0.5,3c0.8,1.2,1.8,2.5,3,3.2c2.1,1.2,0.9,2.3,0.3,3.5c-0.9,1.6-1.8,0.9-2.8,0.1
		C285.9,46.8,284.2,45.5,282.3,44.1z"/>
                            <path
                                className="st4"
                                fill="#5EFEE2"
                                d="M263.8,288.8c-5.6,1.5-11.1,3-16.7,4.5c0.8-2.7,2.2-5.1,3.7-7.4c3.4-0.8,6.8-1.7,10.2-2.5
		C262.4,285,263,287,263.8,288.8z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M181.3,385c0.7,0.2,2.4,0.5,1.7,2.3c-1.9,5.3-3.9,10.6-6,15.8c-0.4,1-1.3,0.9-2.1,0.7
		c-1.1-0.2-1.1-1.1-0.9-1.9c1.7-5.4,3.4-10.8,5.2-16.1C179.5,385.2,180,384.8,181.3,385z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M326,404.9c0.3,1.8-0.3,2.8-1.9,3.1c-1.5,0.2-2.6-0.2-3-1.8c-0.9-3.5-1.9-7-2.8-10.5c-0.2-1-1-2.5,0.8-2.7
		c1.4-0.2,3.2-0.7,3.8,1.3C324,397.8,325,401.5,326,404.9z"/>
                            <path
                                className="st1"
                                fill="#D6D9E0"
                                d="M299.3,7.7c-0.8,2-1.2,4.6-3.8,3c-8-4.8-15.4-3.7-23.1,1.9c2.7-7.5,11.9-10,19.7-5.6
		C294.6,8.4,296.6,9.4,299.3,7.7z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M260.9,283.5c-3.4,0.8-6.8,1.7-10.2,2.5c1.8-4.1,3.7-8.2,5.7-12.8C258.3,276.9,260.3,279.9,260.9,283.5z"/>
                            <path
                                className="st1"
                                fill="#D6D9E0"
                                d="M306.8,5.6c-2.4,0.7-4.7,1.3-7.4,2C301.7,2.9,303.4,2.5,306.8,5.6z"/>
                            <path
                                className="st11"
                                fill="#01FCEE"
                                d="M64.2,264.8c16.6,7.4,26.6,37.8,9,58.4c-8.3,9.7-17.8,18.4-26.8,27.6c-1.1,1.2-2.1,2-3.7,0.4
		c-11.4-12.3-24.6-22.9-34.5-36.7c-0.3-0.4-0.2-1-0.3-1.4c0-1.5,0.1-3-0.1-4.4c-2.5-15.8,2.3-29,14.8-38.9
		C35.3,259.7,49.4,258.5,64.2,264.8z M59.5,297.1c0.1-9-7.3-16.5-16.4-16.6c-9-0.1-16.5,7.3-16.6,16.4c-0.1,9,7.3,16.5,16.4,16.6
		C51.9,313.6,59.4,306.2,59.5,297.1z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M64.2,264.8c-14.8-6.4-29-5.1-41.7,4.9c-12.5,9.9-17.4,23.1-14.8,38.9c0.2,1.4,0.1,3,0.1,4.4
		c-7.7-15.5-4.7-33.9,7.6-45.7c12.1-11.6,30.6-14.2,45.2-6.1C62.1,262.1,64.3,262.4,64.2,264.8z"/>
                            <path
                                className="st6"
                                fill="#96E5FC"
                                d="M380.1,433c-2,2-2.7-0.4-3.8-1.2c-2.7-2-4.2-5.3-7.3-6.8c0.1-5.2,2.9-9.4,5-13.9c3.4,2,5.1,5.7,8.1,8.1
		c0,3.3,0,6.6,0,9.8c-1.9,0.6-2-3-3.7-1.2c-1.1,1.2,0.6,2.3,1.1,3.4C379.8,431.7,379.9,432.3,380.1,433z"/>
                            <path
                                className="st7"
                                fill="#88DFF9"
                                d="M439.8,310.9c2.3-9.2,6.1-17.8,11.2-25.8c2.3,0.3,3.9,1.7,5.2,3.5c8.4,11.1,18.5,20.8,26.9,31.9
		c2.3,3,4.7,6.5,8.9,7.6c-2.2,13.2-12.4,22.5-25.1,23.1c-0.1-5.3,0-10.7-0.3-16c-0.2-3.7,0.8-6.7,3.3-9.5c1.6-1.8,4.2-3.3,4-6.8
		c-3.3,1.2-3.9,4.8-7,6c-0.9-6.2,0.5-12.3-0.8-18.1c-0.6,0-1.2,0-1.9,0c0,7.7,0,15.4,0,23c-0.5,0-0.9,0.1-1.4,0.1
		c-1.2-2.2-2.4-4.3-3.6-6.5c-0.6-1.1-1.4-2.2-2.7-1.2c-1.2,0.9,0.1,1.5,0.6,2.3c0.8,1.4,1.4,2.9,2,4.4c-3.9-0.8-5.6-4.2-8.1-6.8
		C447.4,318.3,445.4,312.8,439.8,310.9z"/>
                            <path
                                className="st6"
                                fill="#96E5FC"
                                d="M492.1,328c-4.2-1.1-6.6-4.6-8.9-7.6c-8.4-11.1-18.5-20.8-26.9-31.9c-1.3-1.7-2.9-3.1-5.2-3.5
		c2.6-5.5,5.7-10.5,10.1-14.7c2.7-2.6,5.1-2.9,8,0.2c9,9.5,14,21.3,18.8,33.1c2,5.1,3.8,10.3,4.6,15.7
		C493,322.2,493.8,325.2,492.1,328z"/>
                            <path
                                className="st8"
                                fill="#65D5F5"
                                d="M439.8,310.9c5.6,1.9,7.6,7.4,11.3,11.3c2.4,2.6,4.2,6,8.1,6.8c6.7,6.2,5.2,14.3,4.9,22.1
		C447.4,351.4,430.3,332.6,439.8,310.9z"/>
                            <path
                                className="st0"
                                fill="#3F4C62"
                                d="M464.1,351c0.3-7.8,1.8-15.8-4.9-22.1c-0.7-1.5-1.2-3-2-4.4c-0.5-0.8-1.8-1.4-0.6-2.3c1.3-1,2.1,0.1,2.7,1.2
		c1.2,2.2,2.4,4.3,3.6,6.5c0.5,0,0.9-0.1,1.4-0.1c0-7.7,0-15.4,0-23c0.6,0,1.2,0,1.9,0c1.3,5.8-0.1,11.9,0.8,18.1
		c3.1-1.2,3.8-4.8,7-6c0.2,3.5-2.4,5-4,6.8c-2.5,2.8-3.6,5.7-3.3,9.5c0.3,5.3,0.2,10.6,0.3,16c-1.1,4.6,0.6,9.4-1.3,14.9
		C463.2,360.6,465.2,355.6,464.1,351z"/>
                            <path
                                className="st5"
                                fill="#6AFAF4"
                                d="M451.1,164c18,8.9,23.9,26.6,13.4,41.7c-5.4,7.8-13,13.7-19.5,20.7c-1,1-1.8,1.2-2.9,0.1
		c-7.4-8.1-16.1-15-22.5-24c-1.4-2-2.8-4.1-2.6-6.8c0.3-17.6,8.5-28.3,24.3-31.2C444.4,163.8,447.8,164.1,451.1,164z M454.4,188.7
		c0.1-6.8-4.8-12-11.2-12.2c-6.4-0.1-11.5,5.1-11.6,11.8c-0.1,6.8,4.8,12,11.2,12.2C449.2,200.6,454.3,195.4,454.4,188.7z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M451.1,164c-3.3,0.1-6.7-0.2-9.9,0.4c-15.8,2.9-24,13.6-24.3,31.2c-3.3-10-0.7-18.7,6.3-26
		c7.1-7.5,16-9.5,26-6.9C449.9,162.8,450.5,163.5,451.1,164z"/>
                            <path
                                className="st0"
                                fill="#3F4C62"
                                d="M87.9,218.4c0-7,0-14,0-21c0.6,0,1.3,0,1.9,0c2.1,7,0.2,14.4,1.1,21.6c-1.1,6.3,0.6,12.7-1.4,19
		C87.4,231.4,89.2,224.8,87.9,218.4z"/>
                            <path
                                className="st12"
                                fill="#AFF8F4"
                                d="M124.5,137.9c7.6,6.5,8.4,15.2,2.1,22.7c-9.6,11.5-9.7,11.6-20,1c-1.8-1.9-3.9-3.6-4.5-6.4
		c0.4-10.2,4.5-15.4,13.2-17.9C118.5,136.4,121.4,138.2,124.5,137.9z M115.8,157.2c4.1,0.1,7.3-2.9,7.3-7c0.1-4.1-2.9-7.3-7-7.3
		c-4.1-0.1-7.3,2.9-7.3,7C108.7,154,111.7,157.1,115.8,157.2z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M124.5,137.9c-3.1,0.2-6-1.5-9.3-0.6c-8.7,2.5-12.8,7.8-13.2,17.9c-3-6.9-1.3-13.7,4.3-18
		C111.9,133,118.6,133.3,124.5,137.9z"/>
                            <path
                                className="st2"
                                fill="#324057"
                                d="M59.5,297.1c-0.1,9.1-7.6,16.5-16.6,16.4c-9.1-0.1-16.5-7.6-16.4-16.6c0.1-9.1,7.6-16.5,16.6-16.4
		C52.2,280.6,59.6,288.1,59.5,297.1z M42.8,310.3c7.4,0.1,13.4-5.6,13.6-13c0.2-7.4-5.5-13.4-12.9-13.7c-7.7-0.2-13.8,5.6-13.8,13.2
		C29.6,304.3,35.3,310.2,42.8,310.3z"/>
                            <path
                                className="st2"
                                fill="#324057"
                                d="M454.4,188.7c-0.1,6.7-5.1,11.9-11.6,11.8c-6.4-0.1-11.3-5.4-11.2-12.2c0.1-6.7,5.2-11.9,11.6-11.8
		C449.6,176.6,454.4,181.9,454.4,188.7z M442.9,179.7c-4.7,0.1-8.3,3.9-8.3,8.8c0,5.1,3.9,9,8.7,8.9c4.6-0.2,8.1-4.1,8-9.1
		C451.2,183.4,447.6,179.6,442.9,179.7z"/>
                            <path
                                className="st0"
                                fill="#3F4C62"
                                d="M115.8,157.2c-4.1-0.1-7.1-3.2-7-7.3c0.1-4.1,3.2-7.1,7.3-7c4.1,0.1,7.1,3.2,7,7.3
		C123.1,154.3,120,157.3,115.8,157.2z M116.1,145.4c-2.7,0.2-4.5,1.7-4.7,4.3c-0.2,2.9,1.6,4.8,4.5,4.9c2.7,0.1,4.5-1.6,4.7-4.2
		C120.8,147.4,119,145.8,116.1,145.4z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M42.8,310.3c-7.4-0.1-13.2-6-13.1-13.4c0.1-7.6,6.2-13.5,13.8-13.2c7.4,0.2,13,6.2,12.9,13.7
		C56.2,304.8,50.2,310.4,42.8,310.3z"/>
                            <path
                                className="st9"
                                fill="#FCFCFC"
                                d="M442.9,179.7c4.7-0.1,8.3,3.7,8.4,8.6c0.1,4.9-3.4,8.9-8,9.1c-4.9,0.2-8.7-3.7-8.7-8.9
		C434.6,183.6,438.3,179.7,442.9,179.7z"/>
                            <path
                                className="st3"
                                fill="#E5F7FD"
                                d="M116.1,145.4c2.9,0.4,4.7,2.1,4.5,5c-0.2,2.6-2,4.3-4.7,4.2c-2.9-0.1-4.6-2-4.5-4.9
		C111.6,147,113.4,145.6,116.1,145.4z"/>
                        </g>
                    </svg>

                    <div className="map-wrap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3175766193142!2d85.32151743150003!3d27.6594896642447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cdd0c31c8b%3A0x7d455f4873bf6b10!2sWeb%20Experts%20Nepal!5e0!3m2!1sen!2snp!4v1581488408156!5m2!1sen!2snp" width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="container">
                        <Row>
                            <Col lg={6}>
                                <div className="text-center">
                                    <p>P.O Box: 8043</p>
                                    <p>Satdobato, Lalitpur, Nepal</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="text-center">
                                    <p>
                                        <a href="tel: 015533059">01-5533059</a>
                                    </p>
                                    <p>
                                        <a href="mailto:info@webexpertsnepal.com">
                                            info@webexpertsnepal.com
                                        </a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="footer-wrap">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p>© - 2020 Built with Pride by <Link to="/">WebExperts</Link>.</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="social text-right">
                                        <span>FOLLOW US :</span>
                                        <a target="_blank" href="https://www.facebook.com/WebExpertsNepal"><i className="fa fa-facebook"></i></a>
                                        <a target="_blank" href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</footer>
		)
	}
}