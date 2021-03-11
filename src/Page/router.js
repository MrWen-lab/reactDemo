import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import List from './List';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/list" component={List}/>
    </Switch>
  </HashRouter>
);

export default BasicRoute;