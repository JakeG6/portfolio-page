
import React from "react";
import { Switch, Route } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';

import Home from './Home'
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export default (
  <PoseGroup>
    <RoutesContainer key={location.key}>
      <Switch location={location}>
        <Route component={ Home }      key="home" path="/" exact  />
        <Route component={ Portfolio } key="portfolio"  path="/portfolio"  />
        <Route component={ Skills }    key="skills" path="/skills"  />
        <Route component={ Contact }   key="contact" path="/contact"  />
      </Switch>
    </RoutesContainer>
  </PoseGroup>
)
