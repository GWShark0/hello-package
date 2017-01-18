import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

import Tweedledee from '../../src/Tweedledee';
import '../../src/Tweedledee.css';
import Tweedledum from '../../src/Tweedledum';
import '../../src/Tweedledum.css';

const mountNode = document.getElementById('root');

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/dee" component={Tweedledee} />
    <Route path="/dum" component={Tweedledum} />
  </Router>
), mountNode);
