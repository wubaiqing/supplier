import React, { Component, PropTypes } from 'react';
import Joins from './Joins/Joins';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Joins location={location} />
    </MainLayout>
  );
};

export default App;
