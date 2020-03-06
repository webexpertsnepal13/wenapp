import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';


export default class AllProjects extends Component {
    render() {
        return (
            <ScrollAnimation animateIn="new-fadeInUp">
                <div className="project-indv">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img src={this.props.project.img} alt=""/>
                        </Col>
                        <Col lg={6}>
                            <div className="project-detail">
                                <h3 style={{color: this.props.project.color}}>{this.props.project.name}</h3>
                                <p>{this.props.project.description}</p>
                                <div className="wen-btn">
                                    <a href={this.props.project.link} target="_blank">View Project<span>+</span></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </ScrollAnimation>
        )
    }

}