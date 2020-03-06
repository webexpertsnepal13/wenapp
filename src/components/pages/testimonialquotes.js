import React, {Component} from 'react';

export default class TestimonailsIndv extends Component {
    render() {
        return (
            <div className="slider-item">
                <div className="slide-inner">
                    <p>{this.props.project.description}</p>
                    <span className="author"><i>- {this.props.project.name}</i></span>
                </div>
            </div>
        )
    }

}