import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

// styles
import './css/vendors/font-awesome.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "animate.css/animate.min.css";
import './css/style.css';

// componenets
import Header from './components/header';
import Home from './components/frontpage';
import About from './components/about';
import ProjectPage from './components/project';
import Footer from './components/footer';
import Contact from "./components/contact";
import Join from "./components/joinus";

// scripts

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <div className="page-inner">
            <Header></Header>
              <Switch>
                <Route path="/wenapp" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/project" exact component={ProjectPage} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/career" exact component={Join} />
              </Switch>
              <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;