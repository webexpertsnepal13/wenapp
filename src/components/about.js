import React, { Component } from 'react';
import AboutDetail from './pages/about-detail';
import AboutServices from './pages/about-services';
import InnerBanner
    from "./pages/banner-inner";
import Abt from '../images/graphics/abt.svg';



export default class About extends Component {
  render() {
    return (
    	<section className="abt-detail padb-100">
                <InnerBanner title="We Are" subTitle="The Experts" img={Abt}/>
                <AboutDetail/>
                <AboutServices/>
        </section>
    )
  }
}