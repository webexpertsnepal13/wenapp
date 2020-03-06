import React, { Component } from 'react';
import InnerBanner
    from "./pages/banner-inner";
import JoinImg from '../images/graphics/join.svg';
import Vacancy
    from "./pages/vacancy";

export default class Join extends Component {
  render() {
    return (
        <section>
            <InnerBanner title="Join Our" subTitle="Expert Team" img={JoinImg}/>
            <Vacancy/>
        </section>
    )
  }
}