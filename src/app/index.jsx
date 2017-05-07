import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

import About from './components/about';
import Code from './components/code';
import Design from './components/design';
import Contact from './components/contact';

import 'bootstrap-social';

// for bundling your styles
import './bundle.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="/code" component={Code} />
      <Route path="/design" component={Design} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('root'));
