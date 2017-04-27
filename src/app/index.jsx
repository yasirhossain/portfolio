import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

import About from './components/about';
import Components from './components/components';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import 'bootstrap-social';

// for bundling your styles
import './bundle.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="/components" component={Components} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('root'));
