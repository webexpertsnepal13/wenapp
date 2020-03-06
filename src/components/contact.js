import React, { Component } from 'react';
import ContactDetail from "./pages/contact-info";
import InnerBanner
    from "./pages/banner-inner";
import Con from '../images/graphics/contact.svg';



export default class Contact extends Component {
  render() {
    return (
        <div className="contact-page">
            <InnerBanner title="Let's" subTitle="Talk" img={Con}/>
            <ContactDetail/>
        </div>
    )
  }
}