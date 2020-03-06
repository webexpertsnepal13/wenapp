import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default class Vacancy extends Component {
    render() {
        return (
            <div className="section vacancy-wrap">
                <div className="container">
                    <Row>
                        <Col lg={8}>
                            <ScrollAnimation animateIn="new-fadeInUp">
                                <div className="vacancy-wrap-inner">
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <h4>WordPress Developer</h4>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p><strong>Job Level: </strong> Mid</p>
                                                    <p><strong>No. of Vacancy's: </strong>2</p>
                                                    <p><strong>Experience Required: </strong>Min. 2+ years</p>
                                                    <p><strong>Employment Type: </strong>Full Time</p>
                                                    <p><strong>Offered Salary: </strong>Negotiable</p>
                                                    <h5>Job Description</h5>
                                                    <ul>
                                                        <li>Sit with the Project Lead , PM and discuss on Project Estimations for requirement analysis and share your views/ideas for the success of the project</li>
                                                        <li>Use your experience and rely on discussions for the best deliverable abiding by absolute quality</li>
                                                        <li>Follow Company's and WordPress' coding standards to achieve results with minimum (if not nil) deviations</li>
                                                        <li>Be able to solve complex problems with your analytical and problem solving skill</li>
                                                        <li>Get involved as a professional in group discussions and assisting the Team</li>
                                                        <li>Ability to cope with tight project deadlines</li>
                                                        <li>Must have knowledge on Git and Server deployment</li>
                                                    </ul>
                                                    <h5>Other Specification</h5>
                                                    <ul>
                                                        <li>Bachelor's or Master's Degree in IT or related field but if you are good at what you do - Education is secondary to us</li>
                                                        <li>Should have a minimum of 2 years experience working with real-time web development projects</li>
                                                        <li>Should have adequate knowledge in  PHP, MYSQL, Javascript, jQuery</li>
                                                        <li>Should have worked with Custom / Premium Themes and Plugins</li>
                                                        <li>WooCommerce experience is required</li>
                                                        <li>Good knowledge in any PHP frameworks is a plus</li>
                                                        <li>Knowledge of REST API</li>
                                                        <li>Must be comfortable working in multiple projects across different framework and platform</li>
                                                        <li>Should be highly enthusiast, eager to learn and have strong problem-solving skill</li>
                                                        <li>Be able to document your work and direct project hand-over documentation and/or usage guides</li>
                                                        <li>Must have strong communication and writing skills (English)</li>
                                                    </ul>
                                                    <div className="wen-btn">
                                                        <a href="#">Apply Now<span>+</span></a>
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col lg={4}>
                            <div className="company-benefits">
                                <h4>Comapny Benefits</h4>
                                <ul>
                                    <li>Excellent Salary Remuneration</li>
                                    <li>Convenient Working Environment</li>
                                    <li>Flexible Timing and Holidays</li>
                                    <li>Beverages, Lunch, Snacks Facilities</li>
                                    <li>Transportation Allowances</li>
                                    <li>Salary increment annually or earlier based on performance</li>
                                    <li>Multiple and Project Bonuses</li>
                                    <li>Training and Development programs</li>
                                    <li>Periodic Team Building Activities and Outings from WEN Social Club</li>
                                </ul>
                                <p>And much more...</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}