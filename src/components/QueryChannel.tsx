import React from 'react';
import Navigation from './Navigation';
import channels from '../channels.json';

export default ({ onChange }: any) => {
  return <Navigation data={channels} onChange={onChange} />;
};
