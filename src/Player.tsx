import React, { useState } from 'react';
import QueryChannel from './components/QueryChannel';
import Video from './components/Video';
import Marker from './components/Marker';

export default () => {
  const [channel, setChannel] = useState({});

  const onChannelChange = (chl: any) => {
    setChannel(chl);
  };

  return (
    <React.Fragment>
      <QueryChannel onChange={onChannelChange} />
      <Marker channel={channel} />
      <Video channel={channel} />
    </React.Fragment>
  );
};
