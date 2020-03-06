import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedProjectIndividual from './featuredProjectIndividual';

// import project images
import Apti from '../../images/projects/apti.svg';
import Twin from '../../images/projects/twin.svg';
import Limit from '../../images/projects/limitless.svg';
import Jewel from '../../images/projects/jewel.svg';
import AptiProj from '../../images/projects/apti-proj.png';
import TwinProj from '../../images/projects/twin-proj.png';
import JewelProj from '../../images/projects/jewel-proj.png';
import LimitlessProj from '../../images/projects/limit-proj.png';

export default class Featuredprojects extends Component {
    render() {
        let projects = [
            {
                name: 'AptiSkills',
                logo: Apti,
                img: AptiProj,
                link: 'https://www.aptiskills.fr/',
                color: '#f29b40',
                description: ''
            },
            {
                name: 'Twin Red',
                logo: Twin,
                img: TwinProj,
                link: 'https://www.twinred.com/',
                color: '#da0000',
                description: ''
            },
            {
                name: 'Jewel Hero',
                logo: Jewel,
                img: JewelProj,
                link: 'https://jewelhero.com/',
                color: '#49678e',
                description: ''
            },
            {
                name: 'Limitless',
                logo: Limit,
                img: LimitlessProj,
                link: 'https://limitlesscreativeco.com/',
                color: '#000',
                description: ''
            }
        ];
        return (
            <div className="fullHeight section featured-port-section">
                 <div className="container">
                     <Row>
                         <Col lg={7}>
                             <div className="section-title">
                                 <h3>OUR WORK</h3>
                                 <h2>Featured Projects</h2>
                             </div>
                             <p>Working with ambitious clients gives us the opportunity to give it everything we’ve got as an agency. Our tried and tested approach gets real results.</p>
                         </Col>
                     </Row>
                     <Row>
                         <Col lg={12}>
                             <Row>
                                 {
                                     projects.map(function(project, index) {
                                         return (
                                            <FeaturedProjectIndividual project={project} key={index} />
                                         )
                                     })
                                 }

                             </Row>
                         </Col>
                     </Row>
                     <div className="wen-btn">
                         <a href="/project">More Projects<span>+</span></a>
                     </div>
                 </div>
            </div>
        );
    }
}