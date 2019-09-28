import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import styled from 'styled-components';

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  outline: 0;
`;

const hls = new Hls({ enableWorker: false });

export default ({ channel }: any) => {
  let instRef: any = useRef();

  useEffect(() => {
    if (instRef.current && channel.url !== undefined) {
      console.log(channel.url);
      var video: any = instRef.current;
      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
  }, [instRef, channel.url]);

  return <StyledVideo ref={instRef}></StyledVideo>;
};
