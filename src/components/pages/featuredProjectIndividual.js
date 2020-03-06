import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';

export default class FeaturedProjectIndividual extends Component {
    render() {
        return (
            <Col
                lg={6}>
                <div
                    className="book-wrap">
                    <a target="_blank" href={this.props.project.link}
                       className="book">
                        <div
                            className="book-front"
                            style={{'borderColor': this.props.project.color}}
                        >
                            <img
                                src={this.props.project.logo}
                                alt=""/>
                            <p>View Website</p>
                        </div>
                        <div
                            className="book-back"
                            style={{'borderColor': this.props.project.color}}
                        >
                            <img
                                src={this.props.project.img}
                                alt=""/>
                        </div>
                    </a>
                </div>
            </Col>
        )
    }

}