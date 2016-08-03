import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from '../components/App';
import Error from '../components/NotFound/Error';

const Routes = ({ history }) => 
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/enroll" component={App} />
    <Route path="/popularize" component={App} />
    <Route path="/joins" component={App} />
    <Route path="*" component={Error}/>
  </Router>;


export default Routes;
