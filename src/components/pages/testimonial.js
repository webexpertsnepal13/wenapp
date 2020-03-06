import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonailsIndv from './testimonialquotes';


// images
import testImg from '../../images/graphics/testimonial-dribble.svg';


export default class Testimonials extends Component {
  render() {
      let testimonials = [
          {
              name: 'J.B. Harroche, KickStartup',
              description: 'Our agency have been working with WEN from past 4 years and they are highly skilled in the website development. Despite our time zone differences, they make sure to have proactive communications for every channel involving project works.The approach and methodology to handle whole process of website development is their key USPs. Hence, we trust them as our able business partners for all development works.'
          },
          {
              name: 'Diana W., Lumiere Creative',
              description: 'I have worked with WEN for the last 3 years on multiple responsive websites and landing pages. WEN specializes in WordPress and is extremely knowledgeable about this CMS. They do a beautiful job of turning my designs into working, responsive sites. The team is very reliable and always professional, keeping me abreast of their progress on projects and providing suggestions for improvements. It is an absolute pleasure to work with them.'
          },
          {
              name: 'Stefan Bauer, Ferras Corporate',
              description: 'Web Experts Nepal is my outsourcing collaborator. They are a true professionals who knows what\'s best in getting the work done. This year we started with Contao in addition to WordPress with them and what absolutely baffles me is their zeal to go beyond their limits and have a good deliverable for us.'
          }
      ];
    return (
        <div className="section">
            <ScrollAnimation animateIn="new-fadeInUp">
                <div className="testimonial-wrap">
                    <div className="container">
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="section-title">
                                    <h3>Hear Them Out</h3>
                                    <h2>Client's Testimonial</h2>
                                    <p>Working with ambitious clients gives us the opportunity to give it everything we’ve got as an agency. Our tried and tested approach gets real results.</p>
                                </div>
                                <div className="img-wrap">
                                    <img style={{margin:'10px 0', 'max-width': '80%'}} src={testImg} alt=""/>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="testimonial-slider">
                                    <Slider
                                            slidesToShow={ 1}
                                            slidesToScroll={ 1}
                                            cssEase={ 'cubic-bezier(0.7, 0, 0.3, 1)'}
                                            infinite={true}
                                            arrows={false}
                                            autoplay={true}
                                            dots={true}
                                    >
                                        {
                                            testimonials.map(function(quotes, index) {
                                                return (
                                                    <TestimonailsIndv project={quotes} key={index} />
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
  }
}