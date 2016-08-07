import React, { Component, PropTypes } from 'react';
import Joins from './Joins/Joins';
import MainLayout from '../layouts/MainLayout/MainLayout';

const Join = ({ location }) => {
  return (
    <MainLayout>
      <Joins location={location} />
    </MainLayout>
  );
};

export default Join;
