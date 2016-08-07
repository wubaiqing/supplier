import React, { Component, PropTypes } from 'react';
import Enroll from './Enroll/Enroll';
import MainLayout from '../layouts/MainLayout/MainLayout';

const Apps = ({ location }) => {
  return (
    <MainLayout>
      <Enroll location={location} />
    </MainLayout>
  );
};

export default Apps;
