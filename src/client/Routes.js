/*
 *
 * ROUTING LOGIC FOR BOTH CLIENT AND SERVER
 *
 */

import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';

export default () => (
  <div>
    <Route exact path="/test" component={Test} />
    <Route exact path="/" component={Home} />
  </div>
);
