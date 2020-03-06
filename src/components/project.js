import React, { Component } from 'react';
import ProjectList from './pages/project-list';
import Testimonials from './pages/testimonial';
import InnerBanner from './pages/banner-inner';
import Proj from '../images/graphics/project.svg';

export default class ProjectPage extends Component {
  render() {
    return (
    	<section className="project-list">
            <InnerBanner title="Our" subTitle="Projects" img={Proj}/>
            <ProjectList/>
            <Testimonials/>
        </section>
    )
  }
}