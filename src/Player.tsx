import React, { useState } from 'react';
import QueryChannel from './components/QueryChannel';
import Video from './components/Video';

export default () => {
  const [channel, setChannel] = useState({});

  const onChannelChange = (chl: any) => {
    setChannel(chl);
  };

  return (
    <React.Fragment>
      <QueryChannel onChange={onChannelChange} />

      <Video channel={channel} />
    </React.Fragment>
  );
};
