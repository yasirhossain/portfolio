import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import About from './about';
import Code from './code';
import Design from './design';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                <li><Link to="/code">Code</Link></li>
                <li><Link to="/design">Design</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <Route exact path="/" component={About} />
            <Route path="/code" component={Code} />
            <Route path="/design" component={Design} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
