
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Home'
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ Portfolio } path="/portfolio"  />
    <Route component={ Skills } path="/skills" />
    <Route component={ Contact } path="/contact" />
  </Switch>
)