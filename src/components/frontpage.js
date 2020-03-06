import React, { Component } from 'react';
import HeroSlider from './pages/heroslider';
import Featuredprojects
    from "./pages/featured-projects";

export default class Home extends Component {
  render() {
    return (
        <section className="hero-wrapper">
                <HeroSlider></HeroSlider>
                <Featuredprojects></Featuredprojects>
        </section>
    );
  }
}