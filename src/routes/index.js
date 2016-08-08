import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import Join from '../components/Join';
import Error from '../components/NotFound/Error';

const Routes = ({ history }) => 
  <Router history={history}>
    <Route path="/" component={Join}></Route>
    <Route path="/joins" component={Join} />
    <Route path="*" component={Error}/>
  </Router>;


export default Routes;
