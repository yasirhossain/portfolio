import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

import HomeIndex from './components/index_home';
import Contact from './components/contact';

import 'bootstrap-social';

// for bundling your styles
import './bundle.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeIndex} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('root'));
